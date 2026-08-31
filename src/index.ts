#!/usr/bin/env node
/**
 * PlanWire MCP server.
 *
 * Exposes the PlanWire UK planning-data API as MCP tools so agents (Claude
 * Desktop/Code, Cursor, any MCP client) can search and inspect UK planning
 * applications conversationally. Thin wrapper over the public REST API at
 * api.planwire.io — no data access is reimplemented here; every tool call is
 * an authenticated request with the user's own PlanWire API key.
 *
 * Auth: set PLANWIRE_API_KEY in the environment (get one at https://planwire.io/?utm_source=mcp_runtime&utm_medium=stdio&utm_campaign=mcp).
 */
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  type Tool,
} from "@modelcontextprotocol/sdk/types.js";

const API_BASE = (process.env.PLANWIRE_API_BASE ?? "https://api.planwire.io").replace(/\/$/, "");
const API_KEY = process.env.PLANWIRE_API_KEY ?? "";

const TOOLS: Tool[] = [
  {
    name: "search_planning_applications",
    description:
      "Search UK planning applications by keyword, council, postcode, status, type, or date range. " +
      "Returns matching applications with address, description, reference, status, and dates. " +
      "Use for questions like 'recent planning applications in Camden' or 'refused extensions in OX1'.",
    inputSchema: {
      type: "object",
      properties: {
        q: { type: "string", description: "Full-text search across address, description, and reference." },
        council: { type: "string", description: "Council ID, e.g. 'camden', 'oxford'." },
        postcode: { type: "string", description: "Postcode or postcode prefix, e.g. 'OX1' or 'SW1A 1AA'." },
        status: { type: "string", enum: ["Pending", "Approved", "Refused", "Withdrawn"], description: "Filter by decision status." },
        type: { type: "string", description: "Application type, e.g. 'Householder', 'Full', 'Listed Building'." },
        date_from: { type: "string", description: "Earliest application date, YYYY-MM-DD." },
        date_to: { type: "string", description: "Latest application date, YYYY-MM-DD." },
        page: { type: "integer", description: "Page number (default 1)." },
        limit: { type: "integer", description: "Results per page (paid keys up to 100; free keys 10)." },
      },
    },
  },
  {
    name: "nearby_planning_applications",
    description:
      "Find planning applications within a radius of a point (latitude/longitude). " +
      "Use for 'what's been applied for near this location'.",
    inputSchema: {
      type: "object",
      properties: {
        lat: { type: "number", description: "Latitude (WGS84)." },
        lng: { type: "number", description: "Longitude (WGS84)." },
        radius_km: { type: "number", description: "Radius in kilometres (paid plans allow larger radii)." },
        limit: { type: "integer", description: "Max results (paid keys up to 100; free keys 10)." },
      },
      required: ["lat", "lng"],
    },
  },
  {
    name: "get_planning_application",
    description: "Fetch a single planning application by its PlanWire id.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", description: "PlanWire application id." } },
      required: ["id"],
    },
  },
  {
    name: "list_councils",
    description:
      "List the UK councils (local planning authorities) PlanWire covers, with their IDs for use in searches.",
    inputSchema: { type: "object", properties: {} },
  },
];

async function apiGet(path: string, params: Record<string, unknown> = {}): Promise<unknown> {
  if (!API_KEY) {
    throw new Error(
      "PLANWIRE_API_KEY is not set. Get a free key at https://planwire.io/?utm_source=mcp_runtime&utm_medium=stdio&utm_campaign=mcp and add it to your MCP client config."
    );
  }
  const url = new URL(`${API_BASE}${path}`);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, {
    headers: { "X-API-Key": API_KEY, Accept: "application/json" },
  });
  if (res.status === 401) {
    throw new Error("PlanWire rejected the API key (401). Check PLANWIRE_API_KEY at https://planwire.io/?utm_source=mcp_runtime&utm_medium=stdio&utm_campaign=mcp.");
  }
  if (res.status === 429) {
    throw new Error(
      "PlanWire daily rate limit reached (429). Upgrade your plan at https://planwire.io/?utm_source=mcp_runtime&utm_medium=stdio&utm_campaign=mcp#pricing for higher limits."
    );
  }
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`PlanWire API error ${res.status}: ${body.slice(0, 300)}`);
  }
  return res.json();
}

async function runTool(name: string, args: Record<string, unknown>): Promise<unknown> {
  switch (name) {
    case "search_planning_applications":
      return apiGet("/v1/applications", args);
    case "nearby_planning_applications":
      return apiGet("/v1/applications/nearby", args);
    case "get_planning_application":
      return apiGet(`/v1/applications/${encodeURIComponent(String(args.id))}`);
    case "list_councils":
      return apiGet("/v1/councils");
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

const server = new Server(
  { name: "planwire", version: "0.1.5" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args } = req.params;
  try {
    const data = await runTool(name, (args ?? {}) as Record<string, unknown>);
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
  } catch (err) {
    return {
      content: [{ type: "text", text: err instanceof Error ? err.message : String(err) }],
      isError: true,
    };
  }
});

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("planwire-mcp running on stdio");
}

main().catch((err) => {
  console.error("planwire-mcp failed to start:", err);
  process.exit(1);
});

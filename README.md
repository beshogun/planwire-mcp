# PlanWire MCP Server

Use UK planning application data inside Claude, Cursor, and any MCP client.

PlanWire exposes fresh, normalised UK planning application data through a public API. This MCP server wraps that API as agent tools so an assistant can search applications, inspect a specific record, look near a location, and list supported councils without you writing API calls by hand.

Get a free sandbox API key at https://planwire.io/?utm_source=npm&utm_medium=mcp_readme&utm_campaign=mcp.

## What MCP Is

Model Context Protocol (MCP) is a standard way for AI tools to call external services. You run this package locally through `npx`; it talks to PlanWire using your own API key and returns structured planning data to the MCP client.

This server uses stdio transport. It does not store credentials or run a hosted proxy.

## Install

You need Node.js 18+ and a PlanWire API key.

```bash
npx -y planwire-mcp
```

The server expects `PLANWIRE_API_KEY` in the environment. Optional: set `PLANWIRE_API_BASE` to override the default `https://api.planwire.io`.

## Claude Desktop

Add this to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "planwire": {
      "command": "npx",
      "args": ["-y", "planwire-mcp"],
      "env": {
        "PLANWIRE_API_KEY": "your_planwire_key_here"
      }
    }
  }
}
```

Restart Claude Desktop after saving the config.

## Claude Code

Add this to your project `.mcp.json`:

```json
{
  "mcpServers": {
    "planwire": {
      "command": "npx",
      "args": ["-y", "planwire-mcp"],
      "env": {
        "PLANWIRE_API_KEY": "your_planwire_key_here"
      }
    }
  }
}
```

## Cursor

Add the same server command in Cursor's MCP settings:

```json
{
  "mcpServers": {
    "planwire": {
      "command": "npx",
      "args": ["-y", "planwire-mcp"],
      "env": {
        "PLANWIRE_API_KEY": "your_planwire_key_here"
      }
    }
  }
}
```

## Tools

| Tool | What it does |
| --- | --- |
| `search_planning_applications` | Search by keyword, council, postcode, status, type, or date range. |
| `nearby_planning_applications` | Find applications near a latitude/longitude point. |
| `get_planning_application` | Fetch one application by PlanWire application id. |
| `list_councils` | List covered councils and their IDs. |

## Example Prompts

- "Search PlanWire for recent planning applications in Camden."
- "Find refused householder extensions in OX1 from the last year."
- "What planning applications are within 1km of 51.5074, -0.1278?"
- "List the councils PlanWire covers."
- "Find planning applications mentioning HMOs in Manchester."

## Limits And Pricing

Free sandbox keys are suitable for testing and are capped on daily calls and result size. Paid plans increase limits for production use.

Pricing: https://planwire.io/?utm_source=npm&utm_medium=mcp_readme&utm_campaign=mcp#pricing

## Troubleshooting

If the tool says `PLANWIRE_API_KEY is not set`, add your key to the MCP client config and restart the client.

If PlanWire returns `401`, check that the key is correct and active.

If PlanWire returns `429`, the key has reached its rate limit. Use fewer calls or upgrade at https://planwire.io/?utm_source=npm&utm_medium=mcp_readme&utm_campaign=mcp#pricing.

## Development

```bash
npm install
npm run build
npm start
```

MIT licensed. Built by PlanWire: https://planwire.io/?utm_source=npm&utm_medium=mcp_readme&utm_campaign=mcp

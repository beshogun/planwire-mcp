# PlanWire MCP Server

UK planning application data for AI agents. Search, look up, and geo-query every UK
planning application from Claude, Cursor, or any [MCP](https://modelcontextprotocol.io)
client — conversationally.

Powered by the [PlanWire](https://planwire.io) API: broader council coverage than the
free government data, richer filtering, and real-time updates.

## Tools

| Tool | What it does |
|---|---|
| `search_planning_applications` | Search by keyword, council, postcode, status, type, or date range |
| `nearby_planning_applications` | Find applications within a radius of a lat/lng point |
| `get_planning_application` | Fetch one application by id |
| `list_councils` | List covered councils and their IDs |

## Setup

1. Get an API key (free sandbox, no card) at **https://planwire.io**.
2. Add the server to your MCP client.

### Claude Desktop / Claude Code

Add to your MCP config (`claude_desktop_config.json`, or `.mcp.json` in a project):

```json
{
  "mcpServers": {
    "planwire": {
      "command": "npx",
      "args": ["-y", "planwire-mcp"],
      "env": { "PLANWIRE_API_KEY": "your_key_here" }
    }
  }
}
```

### Cursor / other MCP clients

Same command (`npx -y planwire-mcp`), with `PLANWIRE_API_KEY` in the environment.

## Example prompts

- "Search PlanWire for recent planning applications in Camden."
- "Any refused householder extensions in OX1 in the last year?"
- "What planning applications are within 1km of 51.5074, -0.1278?"
- "Which councils does PlanWire cover?"

## Notes

- Free keys are capped at 10 results per page and a daily request limit; paid plans lift
  both. Upgrade at https://planwire.io/#pricing.
- Rate-limit (429) and auth (401) errors come back as clear messages, not crashes.

## Environment

| Var | Required | Default |
|---|---|---|
| `PLANWIRE_API_KEY` | yes | — |
| `PLANWIRE_API_BASE` | no | `https://api.planwire.io` |

MIT licensed. Built by PlanWire · https://planwire.io

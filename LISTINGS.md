# MCP Registry Listings — submission kit

Paste-ready metadata for listing `planwire-mcp` across MCP registries. The repo is
already registry-ready (`server.json`, `smithery.yaml`, `mcpName`, publish workflow).

## Canonical metadata (same everywhere)

- **Name:** PlanWire
- **Package:** `planwire-mcp` (npm)
- **Registry name:** `io.github.beshogun/planwire-mcp`
- **Repository:** https://github.com/beshogun/planwire-mcp
- **Homepage:** https://planwire.io/mcp
- **Install:** `npx -y planwire-mcp`
- **Transport:** stdio
- **Auth:** env var `PLANWIRE_API_KEY` (free key at https://planwire.io)
- **License:** MIT
- **Tools (4):** search_planning_applications, nearby_planning_applications, get_planning_application, list_councils
- **One-liner:** UK planning application data for AI agents — search, geo-query and look up UK planning applications.
- **Categories/tags:** data, government, location, property, uk, search
- **Client config snippet:**
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

## Per-registry actions

### 1. Official MCP Registry (registry.modelcontextprotocol.io) — mostly automated
Everything is in place (`server.json` + `mcpName`). Two ways to publish:
- **Automated (recommended):** add an `NPM_TOKEN` secret to the GitHub repo (Settings →
  Secrets → Actions), then `git tag v0.1.2 && git push origin v0.1.2`. The workflow
  publishes npm 0.1.2 (with mcpName) and registers with the official registry via OIDC.
- **Manual:** `npm publish` (0.1.2), then download `mcp-publisher`, run
  `mcp-publisher login github` (OAuth as beshogun) and `mcp-publisher publish`.

### 2. Smithery (smithery.ai) — auto-detects, then claim
`smithery.yaml` is in the repo, so Smithery's crawler can list it. Sign in at
smithery.ai with GitHub (beshogun), find planwire-mcp, and claim/verify ownership.

### 3. Glama (glama.ai/mcp) — form
glama.ai → submit server. Uses the canonical metadata above. Glama favours servers with
a real README + install guide (we have both), so it should be accepted.

### 4. PulseMCP (pulsemcp.com) — form
"Submit" in the top nav. Paste the canonical metadata.

### 5. mcp.so — form
mcp.so/submit. Paste the canonical metadata.

### 6. awesome-mcp-servers (github.com/punkpeye/awesome-mcp-servers) — PR
Fork, add under a data/location category (match their alphabetical + emoji legend), PR:
`- [beshogun/planwire-mcp](https://github.com/beshogun/planwire-mcp) 📇 ☁️ - UK planning application data: search, geo-query and look up UK planning applications.`
(Check the current legend at the top of their README for the right emoji codes.)

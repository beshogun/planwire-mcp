# PlanWire MCP Directory Listings

This file tracks the MCP distribution work for `planwire-mcp`.

Package:

- npm: `planwire-mcp`
- current metadata package version: `0.1.5`
- homepage: `https://planwire.io/mcp?utm_source=npm&utm_medium=package_homepage&utm_campaign=mcp`
- repository: `https://github.com/beshogun/planwire-mcp`
- install: `npx -y planwire-mcp`
- auth: user-provided `PLANWIRE_API_KEY`

## Standard Description

PlanWire MCP gives AI agents access to UK planning application data. Search planning applications by keyword, council, postcode, status, type, or date range; find applications near a latitude/longitude point; fetch a specific application; and list supported councils. It runs locally over stdio and calls the PlanWire public API with the user's own API key.

## Short Description

UK planning application search for Claude, Cursor, and MCP clients.

## Categories

- Data
- Search
- Developer tools
- Real estate
- Government
- Geospatial

## Keywords

`uk-planning`, `planning-applications`, `planning-permission`, `property-data`, `proptech`, `geospatial`, `real-estate`, `claude`, `cursor`, `mcp`

## Install Snippet

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

## Example Prompts

- Search PlanWire for recent planning applications in Camden.
- Find refused householder extensions in OX1 from the last year.
- What planning applications are within 1km of 51.5074, -0.1278?
- List the councils PlanWire covers.

## Listing Status

| Directory | Status | Action |
| --- | --- | --- |
| npm | `0.1.5` published and live. | Watch crawled directories for version refresh. |
| Official MCP registry | Metadata present in `server.json`. | Re-submit or refresh now that npm `0.1.5` is published. |
| Smithery | Metadata present in `smithery.yaml`; public listing not yet visible. | Check account/dashboard and resubmit if no pending entry exists. |
| MCP Market | Live. | Verify after npm `0.1.5` publish. |
| Glama | Live via crawler. | Verify after npm `0.1.5` publish. |
| mcpbeat | Live. | Verify after npm `0.1.5` publish. |
| PluginBench | Live. | Verify after npm `0.1.5` publish. |
| ZBS index | Live. | Verify after npm `0.1.5` publish. |
| SyncDev | Live. | Verify after npm `0.1.5` publish. |
| Vibehackers | Live. | Verify after npm `0.1.5` publish. |
| LobeHub | Delisted on 31 Aug 2026 after claim/update still left the generated install command as `npx -y beshogun-planwire-mcp`. | Re-publish only if LobeHub can show install command `npx -y planwire-mcp`, or publish under a listing model that does not expose the wrong package command. |
| PulseMCP | Public checks are Cloudflare-blocked and search did not confirm visibility. | Verify manually in the submission account. |
| mcp.so | Public listing not visible in search/direct URL checks. | Check dashboard/email confirmation and resubmit if needed. |
| awesome-mcp-servers | Prepared. | Open PR with the drafted entry below. |

## awesome-mcp-servers Draft Entry

```md
- [PlanWire](https://github.com/beshogun/planwire-mcp) - UK planning application search for Claude, Cursor, and MCP clients. Search by council, postcode, keyword, date range, nearby location, or application id. Requires a [PlanWire API key](https://planwire.io/?utm_source=awesome_mcp_servers&utm_medium=directory&utm_campaign=mcp).
```

## Attribution Links

Use directory-specific links when submitting listings so MCP signups appear in the PlanWire admin attribution panel instead of collapsing into direct traffic.

| Channel | Signup link | Docs link | Pricing link |
| --- | --- | --- | --- |
| npm README | `https://planwire.io/?utm_source=npm&utm_medium=mcp_readme&utm_campaign=mcp` | `https://planwire.io/mcp?utm_source=npm&utm_medium=package_homepage&utm_campaign=mcp` | `https://planwire.io/?utm_source=npm&utm_medium=mcp_readme&utm_campaign=mcp#pricing` |
| Official registry | `https://planwire.io/?utm_source=mcp_registry&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/mcp?utm_source=mcp_registry&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/?utm_source=mcp_registry&utm_medium=directory&utm_campaign=mcp#pricing` |
| Smithery | `https://planwire.io/?utm_source=smithery&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/mcp?utm_source=smithery&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/?utm_source=smithery&utm_medium=directory&utm_campaign=mcp#pricing` |
| Glama | `https://planwire.io/?utm_source=glama&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/mcp?utm_source=glama&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/?utm_source=glama&utm_medium=directory&utm_campaign=mcp#pricing` |
| PulseMCP | `https://planwire.io/?utm_source=pulsemcp&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/mcp?utm_source=pulsemcp&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/?utm_source=pulsemcp&utm_medium=directory&utm_campaign=mcp#pricing` |
| mcp.so | `https://planwire.io/?utm_source=mcp_so&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/mcp?utm_source=mcp_so&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/?utm_source=mcp_so&utm_medium=directory&utm_campaign=mcp#pricing` |
| awesome-mcp-servers | `https://planwire.io/?utm_source=awesome_mcp_servers&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/mcp?utm_source=awesome_mcp_servers&utm_medium=directory&utm_campaign=mcp` | `https://planwire.io/?utm_source=awesome_mcp_servers&utm_medium=directory&utm_campaign=mcp#pricing` |

## Registry Payload

Name: `PlanWire`

Package: `planwire-mcp`

Command: `npx -y planwire-mcp`

Environment:

- `PLANWIRE_API_KEY` required, secret.
- `PLANWIRE_API_BASE` optional, default `https://api.planwire.io`.

Tools:

- `search_planning_applications`
- `nearby_planning_applications`
- `get_planning_application`
- `list_councils`

Links:

- Website: `https://planwire.io/?utm_source=mcp_registry&utm_medium=directory&utm_campaign=mcp`
- MCP docs: `https://planwire.io/mcp?utm_source=mcp_registry&utm_medium=directory&utm_campaign=mcp`
- Pricing: `https://planwire.io/?utm_source=mcp_registry&utm_medium=directory&utm_campaign=mcp#pricing`
- Repository: `https://github.com/beshogun/planwire-mcp`
- npm: `https://www.npmjs.com/package/planwire-mcp`

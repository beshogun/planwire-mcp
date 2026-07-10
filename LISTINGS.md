# PlanWire MCP Directory Listings

This file tracks the MCP distribution work for `planwire-mcp`.

Package:

- npm: `planwire-mcp`
- next metadata package version: `0.1.4`
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
| npm | `0.1.3` published and live. | Publish `0.1.4` after merge so the npm package includes the UTM-tagged acquisition links. |
| Official MCP registry | Prepared | Submit `mcp/server.json` via the registry's package flow or PR. Needs registry account/token if automated. |
| Smithery | Prepared | Connect GitHub and claim the repo. `mcp/smithery.yaml` is present. |
| Glama | Needs Ben | Submit package URL and standard description above. |
| PulseMCP | Needs Ben | Submit package URL and standard description above. |
| mcp.so | Needs Ben | Submit package URL and standard description above. |
| awesome-mcp-servers | Prepared | Open PR with the drafted entry below. |

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

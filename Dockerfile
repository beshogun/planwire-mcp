# Minimal image so Glama (and other registries) can start the server and run
# MCP introspection (tools/list). No API key needed to start or list tools —
# PLANWIRE_API_KEY is only required when a tool is actually called.
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "dist/index.js"]

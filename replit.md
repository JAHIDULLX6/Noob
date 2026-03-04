# sagor-noob

## Project Overview

A Node.js library — **sagor-noob** — which is an advanced Facebook Chat API (FCA) fork. It provides a programmatic interface for Facebook Messenger bots and automation.

This is a **library project**, not a runnable web application. It is designed to be `require()`'d by other Node.js projects.

## Structure

- `index.js` — Library entry point
- `src/engine/client.js` — Core login/authentication engine
- `src/apis/` — 70+ Facebook API method implementations
- `src/utils/` — Shared utilities (auth helpers, axios config, constants, etc.)
- `src/database/` — Local state management (appState, thread/user data)
- `src/types/index.d.ts` — TypeScript definitions
- `examples/` — Example bot scripts demonstrating usage
- `demo.js` — Replit demo script that shows library info and keeps the process alive

## Runtime

- **Node.js**: v20.20.0 (required — Node 18 lacks the global `File` API needed by undici/axios)
- **Package Manager**: npm

## Workflow

- **Start application**: Runs `node demo.js` (console output type)
  - Loads the library, lists all 70+ available APIs, confirms exports are OK

## Usage

To use this library:

```javascript
const { login } = require('sagor-noob');
// Requires a valid Facebook appState (session cookies)
login({ appState }, (err, api) => {
  api.sendMessage('Hello!', threadID);
});
```

See `examples/` for full bot examples.

## Key Dependencies

- `axios` + `axios-cookiejar-support` — HTTP client with cookie support
- `mqtt` — Real-time messaging via MQTT protocol
- `tough-cookie` — Cookie jar management
- `ws` / `websocket-stream` — WebSocket support
- `cheerio` — HTML parsing
- `bluebird` — Promise utilities

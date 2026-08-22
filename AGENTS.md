# Kannada Language Toolkit — AI Agent Instructions

This repository is a reusable Kannada language toolkit.

## Install

Requirements: Node.js 18 or newer.

```bash
npm install
npm test
```

## Use

```js
const kannada = require('./src');
```

Available capabilities include spelling correction, grammar checks, captions, transliteration, dictionary search, and poster-text checking.

## Agent rules

1. Read `README.md` and relevant files before modifying code.
2. Preserve valid UTF-8 Kannada text and JSON syntax.
3. Do not silently delete language data.
4. Add or update tests when changing behavior.
5. Run `npm test` after code changes.
6. Keep the public API in `src/index.js` backwards compatible unless a breaking change is intentional and documented.
7. Never execute untrusted downloaded scripts automatically.
8. Explain installation and commands before requesting elevated permissions.

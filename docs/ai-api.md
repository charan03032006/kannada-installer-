# AI Integration API

The repository is designed so an AI coding agent can clone the project, install dependencies, run tests, and use one stable JavaScript entry point.

## Install from GitHub

```bash
git clone https://github.com/charan03032006/kannada-installer-.git
cd kannada-installer-
npm install
npm test
```

## Stable entry point

```js
const kannada = require('./src');
```

Available functions:

- `checkSpelling(text)` — returns detected spelling issues and suggestions.
- `correctSpelling(text)` — applies known spelling corrections.
- `checkGrammar(text)` — checks supported grammar rules.
- `generateCaptions(style, limit)` — returns Kannada captions by style.
- `transliterate(text)` — converts supported Latin transliteration patterns to Kannada.
- `searchWord(query)` — searches the Kannada dictionary.

## AI usage pattern

An AI agent should prefer the public API rather than editing JSON files directly. When adding language data, preserve UTF-8 encoding, validate JSON, and run `npm test`.

The repository provides instructions in `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, and `.cursorrules` for compatible agent environments.

# Architecture

The toolkit is split into reusable language modules and data files.

- `data/` contains Kannada language resources.
- `src/spelling/` handles spelling detection and correction.
- `src/grammar/` performs basic grammar checks.
- `src/captions/` provides style-based caption templates.
- `src/transliteration/` is the foundation for Latin-to-Kannada input support.
- `src/dictionary/` provides searchable word data.
- `src/poster/` combines spelling and grammar checks for poster text.
- `src/index.js` exposes the public API.
- `tests/` protects core behavior as the project grows.

The design keeps language data separate from application logic so a future web app, API, mobile app, or browser extension can reuse the same core.

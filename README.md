# Kannada Language Toolkit

A modular Kannada language toolkit for **Varnamala, spelling correction, grammar checks, poster text correction, captions, transliteration, and dictionary search**.

## ✨ What it does

- ಕನ್ನಡ ವರ್ಣಮಾಲೆ — ಸ್ವರಗಳು, ವ್ಯಂಜನಗಳು ಮತ್ತು ಯೋಗವಾಹಗಳು
- Common Kannada spelling mistake detection and correction
- Basic grammar and punctuation checks
- Poster/announcement text quality reports
- Formal, casual, and promotional Kannada captions
- Kannada dictionary search
- Transliteration foundation for Latin-typed Kannada
- Reusable Node.js API
- Automated tests with GitHub Actions

## Quick start

```bash
npm test
```

Use the toolkit from Node.js:

```js
const kannada = require('./src');

console.log(kannada.correctSpelling('ವಿದ್ಯಾರ್ತಿ'));
console.log(kannada.checkGrammar('ನಮಸ್ಕಾರ'));
console.log(kannada.generateCaptions('formal', 2));
console.log(kannada.searchWord('ಕನ್ನಡ'));
console.log(kannada.checkPosterText('ಎಲ್ಲರಿಗೂ ಆತ್ಮೀಯ ಆಮಂತ್ರಣ'));
```

## Structure

```text
kannada-installer-/
├── data/                  # Kannada language datasets
├── src/
│   ├── spelling/          # Spelling detection/correction
│   ├── grammar/           # Grammar and punctuation checks
│   ├── captions/          # Caption generation
│   ├── transliteration/   # Latin → Kannada foundation
│   ├── dictionary/        # Word search
│   └── poster/            # Poster-text quality checker
├── examples/              # Usage examples
├── docs/                  # Architecture and roadmap
├── tests/                 # Automated tests
└── .github/workflows/     # Continuous integration
```

## Vision

The long-term goal is to make Kannada writing easier and more accurate for **posters, Instagram captions, college announcements, invitations, businesses, and everyday Kannada communication**.

See [`docs/roadmap.md`](docs/roadmap.md) for the planned evolution of the project.

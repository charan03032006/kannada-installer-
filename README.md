# Kannada Language Toolkit

A dependency-free, installable Kannada language toolkit for **Varnamala, spelling correction, grammar checks, poster text correction, captions, transliteration, and dictionary search**.

## ✨ Features

- ಕನ್ನಡ ವರ್ಣಮಾಲೆ — ಸ್ವರಗಳು, ವ್ಯಂಜನಗಳು ಮತ್ತು ಯೋಗವಾಹಗಳು
- Kannada spelling mistake detection and correction
- Basic grammar and punctuation checks
- Poster/announcement text quality reports
- Formal, casual, and promotional Kannada captions
- Kannada dictionary search
- Latin → Kannada transliteration foundation
- Reusable Node.js API with subpath exports
- No runtime dependencies
- Automated tests and syntax checks

## 📦 Install

### From GitHub — no npm publishing required

Anyone with Node.js 18+ can install the repository directly:

```bash
npm install github:charan03032006/kannada-installer-
```

Or with the full Git URL:

```bash
npm install git+https://github.com/charan03032006/kannada-installer-.git
```

### Use without installing

Clone the repository and run the included tests:

```bash
git clone https://github.com/charan03032006/kannada-installer-.git
cd kannada-installer-
npm install
npm test
```

## 🚀 Usage

After installing:

```js
const kannada = require('kannada-language-toolkit');

console.log(kannada.correctSpelling('ವಿದ್ಯಾರ್ತಿ'));
console.log(kannada.checkGrammar('ನಮಸ್ಕಾರ'));
console.log(kannada.generateCaptions('formal', 2));
console.log(kannada.searchWord('ಕನ್ನಡ'));
console.log(kannada.checkPosterText('ಎಲ್ಲರಿಗೂ ಆತ್ಮೀಯ ಆಮಂತ್ರಣ'));
```

You can also import individual modules:

```js
const { correctSpelling } = require('kannada-language-toolkit/spelling');
const { checkGrammar } = require('kannada-language-toolkit/grammar');
const { transliterate } = require('kannada-language-toolkit/transliteration');
```

## 🧪 Verify an installation

```bash
npm test
npm run check
```

`npm test` runs the automated test suite. `npm run check` validates the JavaScript syntax of the toolkit modules.

## 🌐 Package distribution

The repository is structured as an npm-compatible package. The `package.json` defines the package entry point, exports, supported Node.js version, repository metadata, and the files included in a package. citeturn0search2turn0search5

Once published to npm, users will be able to install it with:

```bash
npm install kannada-language-toolkit
```

Public unscoped npm packages can be installed by anyone with `npm install <package-name>`. citeturn0search1turn0search11

## 📁 Structure

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
├── package.json           # npm package configuration
└── LICENSE
```

## 🤝 Contributing

New Kannada words, spelling corrections, grammar rules, captions, transliteration mappings, tests, and documentation are welcome. Keep datasets UTF-8 encoded and add tests for new language behaviour where practical.

## 📄 License

MIT License. See `LICENSE`.

## 🎯 Vision

Make Kannada writing easier and more accurate for **posters, Instagram captions, college announcements, invitations, businesses, and everyday Kannada communication**.

const path = require('node:path');

const FEATURES = {
  spelling: 'Kannada spelling detection and correction',
  grammar: 'Basic Kannada grammar and punctuation checks',
  captions: 'Formal, casual and promotional caption generation',
  transliteration: 'Latin-typed Kannada to Kannada script',
  dictionary: 'Kannada word lookup',
  poster: 'Poster and announcement text quality checks'
};

function normalizeFeatures(features) {
  if (!features || features === 'all') return Object.keys(FEATURES);
  const list = Array.isArray(features) ? features : [features];
  const invalid = list.filter((feature) => !FEATURES[feature]);
  if (invalid.length) {
    throw new Error(`Unknown Kannada feature: ${invalid.join(', ')}`);
  }
  return [...new Set(list)];
}

function createInstaller(options = {}) {
  const features = normalizeFeatures(options.features || 'all');
  return {
    name: 'kannada-language-toolkit',
    target: options.target || process.cwd(),
    features,
    status: 'ready',
    files: features.map((feature) => path.join('src', feature, 'index.js'))
  };
}

function getAvailableFeatures() {
  return { ...FEATURES };
}

module.exports = { createInstaller, getAvailableFeatures, normalizeFeatures };

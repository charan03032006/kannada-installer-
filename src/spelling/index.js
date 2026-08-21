const corrections = require('../../data/spelling-corrections.json');

function checkSpelling(text) {
  const suggestions = [];
  for (const [word, replacements] of Object.entries(corrections)) {
    if (text.includes(word)) {
      suggestions.push({ word, replacements });
    }
  }
  return suggestions;
}

module.exports = { checkSpelling };

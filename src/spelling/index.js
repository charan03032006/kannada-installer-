const corrections = require('../../data/spelling-corrections.json');

function checkSpelling(text) {
  const suggestions = [];
  for (const [wrong, correct] of Object.entries(corrections)) {
    if (text.includes(wrong)) suggestions.push({ wrong, correct });
  }
  return suggestions;
}

function correctSpelling(text) {
  return Object.entries(corrections).reduce(
    (result, [wrong, correct]) => result.split(wrong).join(correct),
    text
  );
}

module.exports = { checkSpelling, correctSpelling };

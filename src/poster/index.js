const { checkSpelling, correctSpelling } = require('../spelling');
const { checkGrammar } = require('../grammar');

function checkPosterText(text) {
  const original = String(text || '').trim();
  const spelling = checkSpelling(original);
  const corrected = correctSpelling(original);
  const grammar = checkGrammar(corrected);

  return {
    original,
    corrected,
    spelling,
    grammar,
    issueCount: spelling.length + grammar.issues.length,
    ready: spelling.length === 0 && grammar.issues.length === 0
  };
}

module.exports = { checkPosterText };

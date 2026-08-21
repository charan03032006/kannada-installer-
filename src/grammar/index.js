const rules = require('../../data/grammar-rules.json');

function checkGrammar(text) {
  const issues = [];
  if (text.trim() && !/[.!?]$/.test(text.trim())) {
    issues.push({ rule: 'sentence-ending', message: 'ಪೂರ್ಣವಿರಾಮ, ಪ್ರಶ್ನಾರ್ಥಕ ಅಥವಾ ಉದ್ಗಾರ ಚಿಹ್ನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.' });
  }
  return { issues, rulesUsed: rules.map((rule) => rule.id) };
}

module.exports = { checkGrammar };

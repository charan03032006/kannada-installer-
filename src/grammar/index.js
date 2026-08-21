function checkGrammar(text) {
  const trimmed = text.trim();
  const issues = [];
  if (trimmed && !/[.!?]$/.test(trimmed)) {
    issues.push({
      rule: 'sentence-ending',
      message: 'ವಾಕ್ಯದ ಕೊನೆಯಲ್ಲಿ ಸೂಕ್ತ ವಿರಾಮ ಚಿಹ್ನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.'
    });
  }
  return { valid: issues.length === 0, issues };
}

module.exports = { checkGrammar };

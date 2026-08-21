const { checkSpelling, correctSpelling } = require('./spelling');
const { checkGrammar } = require('./grammar');
const { generateCaptions } = require('./captions');
const { transliterate } = require('./transliteration');
const { searchWord } = require('./dictionary');

module.exports = {
  checkSpelling,
  correctSpelling,
  checkGrammar,
  generateCaptions,
  transliterate,
  searchWord
};

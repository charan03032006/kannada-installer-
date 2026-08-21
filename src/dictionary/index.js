const words = require('../../data/words.json');

function searchWord(query) {
  const value = query.trim();
  if (!value) return [];
  return words.filter((entry) => entry.word.includes(value));
}

module.exports = { searchWord };

const words = require('../../data/words.json');

function searchWord(query) {
  const normalized = query.trim().toLowerCase();
  return words.filter((entry) => entry.word.toLowerCase() === normalized || entry.word.includes(query.trim()));
}

module.exports = { searchWord };

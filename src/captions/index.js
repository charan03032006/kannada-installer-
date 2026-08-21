const captions = require('../../data/captions.json');

function generateCaptions(style = 'casual', limit = 5) {
  const selected = captions[style] || captions.casual;
  return selected.slice(0, Math.max(1, limit));
}

module.exports = { generateCaptions };

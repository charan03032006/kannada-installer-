const captions = require('../../data/captions.json');

function generateCaptions(style = 'casual', limit = 5) {
  const list = captions[style] || captions.casual;
  return list.slice(0, Math.max(1, limit));
}

module.exports = { generateCaptions };

// Transliteration foundation. Extend this map as the toolkit grows.
const map = {
  a: 'ಅ', aa: 'ಆ', i: 'ಇ', ii: 'ಈ', u: 'ಉ', uu: 'ಊ', e: 'ಎ', ee: 'ಏ', ai: 'ಐ', o: 'ಒ', oo: 'ಓ', au: 'ಔ'
};

function transliterate(input) {
  let output = input;
  for (const [latin, kannada] of Object.entries(map).sort((a, b) => b[0].length - a[0].length)) {
    output = output.replaceAll(latin, kannada);
  }
  return output;
}

module.exports = { transliterate };

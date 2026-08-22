const test = require('node:test');
const assert = require('node:assert/strict');
const posters = require('../data/poster-proofreading.json');

test('poster proofreading dataset has no known incorrect forms', () => {
  const allText = JSON.stringify(posters);
  const forbidden = [
    'ಅಂತರಾಷ್ಟ್ರೀಯ',
    'ದೇವರೆಂತೆ',
    'ಹಾರ್ಧಿಕ',
    'ವಿದ್ಯಾರ್ತಿ',
    'ಬಾಷೆ',
    'ಸಮೃದ್ಧಿಯಿಂದೂ, ನೆಡಲಿ',
    'ಅಭಿವೃದ್ಧಿ ಬೆಳೆಸೋಣ'
  ];

  for (const value of forbidden) {
    assert.equal(allText.includes(value), false, `Forbidden form found: ${value}`);
  }
});

test('corrected poster text contains the standardized festival and observance headings', () => {
  const byId = Object.fromEntries(posters.posters.map((poster) => [poster.id, poster]));

  assert.match(byId.varamahalakshmi.corrected_text, /ವರಮಹಾಲಕ್ಷ್ಮಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು/);
  assert.match(byId.independence-day.corrected_text, /ಸ್ವಾತಂತ್ರ್ಯವು ನಮ್ಮ ಹಕ್ಕು ಮಾತ್ರವಲ್ಲ/);
  assert.match(byId.international-youth-day.corrected_text, /ಅಂತರರಾಷ್ಟ್ರೀಯ ಯುವ ದಿನ/);
  assert.match(byId.teachers-day.corrected_text, /ಶಿಕ್ಷಕರ ದಿನಾಚರಣೆಯ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು/);
});

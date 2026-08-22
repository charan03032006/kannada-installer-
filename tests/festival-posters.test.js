const test = require('node:test');
const assert = require('node:assert/strict');
const posters = require('../data/festival-posters.json');

test('Varamahalakshmi poster text is proofread and non-empty', () => {
  const poster = posters.varamahalakshmi;
  assert.equal(poster.proofread, true);
  assert.ok(poster.title.length > 0);
  assert.ok(poster.subtitle.length > 0);
  assert.ok(poster.greeting.length > 0);
  assert.ok(poster.shortGreeting.length > 0);
});

test('Varamahalakshmi poster uses the standard Kannada festival spelling', () => {
  const poster = posters.varamahalakshmi;
  const combined = Object.values(poster).filter((value) => typeof value === 'string').join(' ');
  assert.match(combined, /ವರಮಹಾಲಕ್ಷ್ಮಿ/);
  assert.doesNotMatch(combined, /ವರಮಹಾಲಕ್ಶ್ಮಿ|ವರಮಹಾಲಕ್ಷ್ಮೀ/);
});

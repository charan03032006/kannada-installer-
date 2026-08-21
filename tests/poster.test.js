const test = require('node:test');
const assert = require('node:assert/strict');
const { checkPosterText } = require('../src/poster');

test('poster checker returns corrected text and issues', () => {
  const result = checkPosterText('ಎಲ್ಲರಿಗೂ ಆತ್ಮೀಯ ಆಮಂತ್ರಣ');
  assert.equal(result.corrected, 'ಎಲ್ಲರಿಗೂ ಆತ್ಮೀಯ ಆಮಂತ್ರಣ');
  assert.ok(Array.isArray(result.spelling));
  assert.ok(Array.isArray(result.grammar.issues));
});

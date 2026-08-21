const test = require('node:test');
const assert = require('node:assert/strict');
const toolkit = require('../src');

test('spelling checker detects known mistakes', () => {
  const result = toolkit.checkSpelling('ನಮ್ಮ ವಿದ್ಯಾರ್ತಿ');
  assert.equal(result[0].correct, 'ವಿದ್ಯಾರ್ಥಿ');
});

test('spelling correction fixes known mistakes', () => {
  assert.equal(toolkit.correctSpelling('ವಿದ್ಯಾರ್ತಿ'), 'ವಿದ್ಯಾರ್ಥಿ');
});

test('grammar checker flags missing punctuation', () => {
  assert.equal(toolkit.checkGrammar('ನಮಸ್ಕಾರ').valid, false);
});

test('caption generator supports styles', () => {
  assert.ok(toolkit.generateCaptions('formal', 1).length === 1);
});

test('dictionary searches Kannada words', () => {
  assert.equal(toolkit.searchWord('ಕನ್ನಡ')[0].meaning, 'Kannada');
});

const test = require('node:test');
const assert = require('node:assert/strict');
const grammar = require('../data/grammar-rules.json');
const orthography = require('../data/orthography-rules.json');

const requiredCategories = [
  'sentence_structure',
  'noun_and_case',
  'pronouns',
  'verb_morphology',
  'agreement',
  'nonfinite_and_auxiliaries',
  'sandhi_and_word_formation',
  'word_classes',
  'register_and_usage',
  'school_grammar_topics'
];

test('grammar catalogue contains the major Kannada grammar areas', () => {
  for (const category of requiredCategories) {
    assert.ok(grammar.categories[category], `Missing grammar category: ${category}`);
    assert.ok(grammar.categories[category].length > 0, `Empty grammar category: ${category}`);
  }
});

test('orthography rules have valid correction pairs', () => {
  for (const rule of orthography.rules) {
    assert.equal(typeof rule.incorrect, 'string');
    assert.equal(typeof rule.correct, 'string');
    assert.notEqual(rule.incorrect, rule.correct);
  }
});

test('critical public-content correction pairs are protected', () => {
  const pairs = new Map(orthography.rules.map((rule) => [rule.incorrect, rule.correct]));
  assert.equal(pairs.get('ಬಾಷೆ'), 'ಭಾಷೆ');
  assert.equal(pairs.get('ವಿದ್ಯಾರ್ತಿ'), 'ವಿದ್ಯಾರ್ಥಿ');
  assert.equal(pairs.get('ಹಾರ್ಧಿಕ'), 'ಹಾರ್ದಿಕ');
  assert.equal(pairs.get('ಎಲ್ಲಾರಿಗೂ'), 'ಎಲ್ಲರಿಗೂ');
});

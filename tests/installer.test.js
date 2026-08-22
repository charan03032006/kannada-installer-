const test = require('node:test');
const assert = require('node:assert/strict');
const { createInstaller, getAvailableFeatures } = require('../src');

test('installer enables all Kannada toolkit features by default', () => {
  const installer = createInstaller();
  assert.equal(installer.status, 'ready');
  assert.deepEqual(installer.features.sort(), Object.keys(getAvailableFeatures()).sort());
});

test('installer supports selecting individual features', () => {
  const installer = createInstaller({ features: ['spelling', 'transliteration'] });
  assert.deepEqual(installer.features, ['spelling', 'transliteration']);
});

test('installer rejects unknown features', () => {
  assert.throws(() => createInstaller({ features: ['unknown'] }), /Unknown Kannada feature/);
});

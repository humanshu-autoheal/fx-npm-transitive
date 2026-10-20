const test = require('node:test');
const assert = require('node:assert');
const { sessionMiddleware } = require('../src/index');

test('sessionMiddleware returns an express middleware', () => {
  assert.strictEqual(typeof sessionMiddleware(), 'function');
});

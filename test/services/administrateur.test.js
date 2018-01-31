const assert = require('assert');
const app = require('../../src/app');

describe('\'administrateur\' service', () => {
  it('registered the service', () => {
    const service = app.service('administrateur');

    assert.ok(service, 'Registered the service');
  });
});

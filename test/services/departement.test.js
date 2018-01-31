const assert = require('assert');
const app = require('../../src/app');

describe('\'departement\' service', () => {
  it('registered the service', () => {
    const service = app.service('departement');

    assert.ok(service, 'Registered the service');
  });
});

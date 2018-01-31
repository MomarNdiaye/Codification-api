const assert = require('assert');
const app = require('../../src/app');

describe('\'etage\' service', () => {
  it('registered the service', () => {
    const service = app.service('etage');

    assert.ok(service, 'Registered the service');
  });
});

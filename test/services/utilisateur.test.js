const assert = require('assert');
const app = require('../../src/app');

describe('\'utilisateur\' service', () => {
  it('registered the service', () => {
    const service = app.service('utilisateur');

    assert.ok(service, 'Registered the service');
  });
});

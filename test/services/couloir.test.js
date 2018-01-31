const assert = require('assert');
const app = require('../../src/app');

describe('\'couloir\' service', () => {
  it('registered the service', () => {
    const service = app.service('couloir');

    assert.ok(service, 'Registered the service');
  });
});

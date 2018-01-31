const assert = require('assert');
const app = require('../../src/app');

describe('\'pavillon\' service', () => {
  it('registered the service', () => {
    const service = app.service('pavillon');

    assert.ok(service, 'Registered the service');
  });
});

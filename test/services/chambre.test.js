const assert = require('assert');
const app = require('../../src/app');

describe('\'chambre\' service', () => {
  it('registered the service', () => {
    const service = app.service('chambre');

    assert.ok(service, 'Registered the service');
  });
});

const assert = require('assert');
const app = require('../../src/app');

describe('\'codification_annuelle\' service', () => {
  it('registered the service', () => {
    const service = app.service('codification-annuelle');

    assert.ok(service, 'Registered the service');
  });
});

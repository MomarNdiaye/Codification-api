const assert = require('assert');
const app = require('../../src/app');

describe('\'etudiant\' service', () => {
  it('registered the service', () => {
    const service = app.service('etudiant');

    assert.ok(service, 'Registered the service');
  });
});

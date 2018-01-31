// Initializes the `etudiant` service on path `/etudiant`
const createService = require('feathers-sequelize');
const createModel = require('../../models/etudiant.model');
const hooks = require('./etudiant.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'etudiant',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/etudiant', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('etudiant');

  service.hooks(hooks);
};

// Initializes the `etage` service on path `/etage`
const createService = require('feathers-sequelize');
const createModel = require('../../models/etage.model');
const hooks = require('./etage.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'etage',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/etage', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('etage');

  service.hooks(hooks);
};

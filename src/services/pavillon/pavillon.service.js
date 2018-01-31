// Initializes the `pavillon` service on path `/pavillon`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pavillon.model');
const hooks = require('./pavillon.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pavillon',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pavillon', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pavillon');

  service.hooks(hooks);
};

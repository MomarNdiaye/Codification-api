// Initializes the `administrateur` service on path `/administrateur`
const createService = require('feathers-sequelize');
const createModel = require('../../models/administrateur.model');
const hooks = require('./administrateur.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'administrateur',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/administrateur', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('administrateur');

  service.hooks(hooks);
};

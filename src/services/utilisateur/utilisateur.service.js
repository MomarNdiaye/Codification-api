// Initializes the `utilisateur` service on path `/utilisateur`
const createService = require('feathers-sequelize');
const createModel = require('../../models/utilisateur.model');
const hooks = require('./utilisateur.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'utilisateur',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/utilisateur', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('utilisateur');

  service.hooks(hooks);
};

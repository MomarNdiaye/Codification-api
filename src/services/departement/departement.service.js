// Initializes the `departement` service on path `/departement`
const createService = require('feathers-sequelize');
const createModel = require('../../models/departement.model');
const hooks = require('./departement.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'departement',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/departement', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('departement');

  service.hooks(hooks);
};

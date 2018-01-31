// Initializes the `chambre` service on path `/chambre`
const createService = require('feathers-sequelize');
const createModel = require('../../models/chambre.model');
const hooks = require('./chambre.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'chambre',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chambre', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chambre');

  service.hooks(hooks);
};

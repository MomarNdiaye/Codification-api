// Initializes the `campus` service on path `/campus`
const createService = require('feathers-sequelize');
const createModel = require('../../models/campus.model');
const hooks = require('./campus.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'campus',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/campus', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('campus');

  service.hooks(hooks);
};

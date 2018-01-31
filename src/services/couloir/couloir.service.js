// Initializes the `couloir` service on path `/couloir`
const createService = require('feathers-sequelize');
const createModel = require('../../models/couloir.model');
const hooks = require('./couloir.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'couloir',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/couloir', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('couloir');

  service.hooks(hooks);
};

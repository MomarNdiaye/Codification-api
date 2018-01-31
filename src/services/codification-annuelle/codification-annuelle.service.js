// Initializes the `codification_annuelle` service on path `/codification-annuelle`
const createService = require('feathers-sequelize');
const createModel = require('../../models/codification-annuelle.model');
const hooks = require('./codification-annuelle.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'codification-annuelle',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/codification-annuelle', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('codification-annuelle');

  service.hooks(hooks);
};

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pavillon = sequelizeClient.define('pavillon', {
    Nom: {type: DataTypes.STRING,allowNull: false}
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  pavillon.associate = function (models) {
    // Define associations here
    pavillon.belongsTo(models.campus); 
  };

  return pavillon;
};

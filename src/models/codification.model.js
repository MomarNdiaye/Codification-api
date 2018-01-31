// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const codification = sequelizeClient.define('codification', {
    Annee: {type: DataTypes.DATE, allowNull: false },
    DateDebut: {type: DataTypes.DATE, allowNull: false },
    DateFin: {type: DataTypes.DATE, allowNull: false },
    
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  codification.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/


  };

  return codification;
};

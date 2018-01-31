// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const reservation = sequelizeClient.define('reservation', {
    Annee: {type: DataTypes.DATE, allowNull: false }, 
    PositionChambre:{ type : DataTypes.STRING, allowNull:false}
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  reservation.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
     reservation.belongsTo(models.etudiant);
     reservation.belongsTo(models.chambre);
  };

  return reservation;
};

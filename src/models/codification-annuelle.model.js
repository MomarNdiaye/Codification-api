// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const codificationAnnuelle = sequelizeClient.define('codification_annuelle', {
    PositionChambre: {type: DataTypes.STRING,allowNull: false}
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  codificationAnnuelle.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    codificationAnnuelle.belongsTo(models.codification);
    codificationAnnuelle.belongsTo(models.etudiant);
    codificationAnnuelle.belongsTo(models.chambre);   
  };

  return codificationAnnuelle;
};

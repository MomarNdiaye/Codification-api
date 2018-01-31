// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const administrateur = sequelizeClient.define('administrateur', {
    Prenom: { type: DataTypes.STRING , allowNull :false },
    Nom :   {type : DataTypes.STRING , allownull :false },
    Telephone:{type : DataTypes.STRING , allownull :true },
    Mail: { type: DataTypes.STRING , allownull:false} 


  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  administrateur.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    administrateur.belongsTo(models.utilisateur); 
  };

  return administrateur;
};

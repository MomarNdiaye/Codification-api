const etudiant = require('./etudiant/etudiant.service.js');
const administrateur = require('./administrateur/administrateur.service.js');
const departement = require('./departement/departement.service.js');
const campus = require('./campus/campus.service.js');
const pavillon = require('./pavillon/pavillon.service.js');
const etage = require('./etage/etage.service.js');
const couloir = require('./couloir/couloir.service.js');
const chambre = require('./chambre/chambre.service.js');
const reservation = require('./reservation/reservation.service.js');
const codification = require('./codification/codification.service.js');
const codificationAnnuelle = require('./codification-annuelle/codification-annuelle.service.js');
const utilisateur = require('./utilisateur/utilisateur.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(etudiant);
  app.configure(administrateur);
  app.configure(departement);
  app.configure(campus);
  app.configure(pavillon);
  app.configure(etage);
  app.configure(couloir);
  app.configure(chambre);
  app.configure(reservation);
  app.configure(codification);
  app.configure(codificationAnnuelle);
  app.configure(utilisateur);
};

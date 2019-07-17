var express = require('express');
var router = express.Router();
const connection = require('../conf');

/* GET reservations listing. */
router.get('/', function (req, res, next) {
  connection.query('SELECT jointable.id, artistes.id as artistsID, artistes.name, reservations.id as reservationsID, reservations.email_client, reservations.nom_client, reservations.nb_client, reservations.date FROM artiste_reservation AS jointable LEFT JOIN artistes ON jointable.artiste_id = artistes.id LEFT JOIN reservations ON jointable.reservation_id = reservations.id', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la récupération des réservations");
    } else {
      res.json(result);
    }
  })
});

/* POST d'une reservation depuis le composant réservation */
router.post('/', function (req, res, next) {
  const reservation = req.body
  connection.query('INSERT INTO reservations SET ?', reservation, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la création d'une réservation");
    } else {
      res.json(result);
    }
  })
});

module.exports = router;

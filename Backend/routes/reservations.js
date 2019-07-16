var express = require('express');
var router = express.Router();
const connection = require('../conf');

/* GET reservations listing. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM reservations', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la récupération des réservations");
    } else {
      res.json(result);
    }
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();
const connection = require('../conf');

const requestSQL = 'SELECT dates.id, dates.client_id, dates.artiste_id, dates.date, clients.nom, clients.email, clients.nombre, artistes.nom as artistes, artistes.description, artistes.image, artistes.evaluation FROM dates LEFT JOIN clients ON dates.client_id = clients.id LEFT JOIN artistes ON dates.artiste_id = artistes.id ORDER BY date ASC'


/* GET clients listing. */
router.get('/', function (req, res, next) {
  connection.query(requestSQL, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la récupération des clients");
    } else {
      res.json(result);
    }
  })
});


module.exports = router;

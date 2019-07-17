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


router.post('/', function (req, res, next) {
  const dataToInsert = req.body
  connection.query('INSERT INTO artistes SET ?', dataToInsert, (err, results) => {
      if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la création d'un artiste");
      } else {
          res.json(results);
      }
  });
});

module.exports = router;

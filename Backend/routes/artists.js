var express = require('express');
var router = express.Router();
const connection = require('../conf');

/* GET artists listing. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM artistes', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la récupération des artistes");
    } else {
      res.json(result);
    }
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();
const connection = require('../conf');

/* DELETE a reservation */
router.delete('/:id', (req, res) => {
    const deleteId = req.params.id;
    connection.query('DELETE FROM dates WHERE dates.id = ?', deleteId, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send(`Erreur lors de la suppression de la réservation n°${deleteId}`);
        }
    });
});


module.exports = router;
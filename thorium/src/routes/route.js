const express = require('express');
const router = express.Router();


//1)Define an array of movies
router.get('/movies',function (req, res) {
    res.send('["Don","Dhoom","Radhe","Sooryavanshi"]')
});




module.exports = router;

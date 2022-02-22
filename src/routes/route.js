let obj = require('../logger/logger');
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('Welcome to my application. I am Ranjan Maji and a part of FunctionUp Thorium cohort')
});




module.exports = router;

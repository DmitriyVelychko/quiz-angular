var express = require('express');
var router = express.Router();
var checkingAnswers = require('../services/answerCheck');

router.post('/', function (req, res) {
    var response = checkingAnswers(req.body);
    res.json(response);

});

module.exports = router;

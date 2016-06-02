var express = require('express');
var router = express.Router();
var checkingAnswers = require('../services/answerCheck');
var request = require('request');

router.post('/', function (req, res) {

    var response = checkingAnswers(req.body).toString();

    res.end(response);

});

module.exports = router;

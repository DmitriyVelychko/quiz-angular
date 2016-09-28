var express = require('express');
var router = express.Router();
var resultService = require('../services/result.service');

router.post('/check', check);

module.exports = router;

function check(req, res) {
  resultService.checkAnswer(req.body)
    .then(function (answer) {
      if (answer || answer === 0) {
        res.json(answer);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
}

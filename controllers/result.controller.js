var express = require('express');
var router = express.Router();
var resultService = require('../services/result.service');

router.post('/check', check);

module.exports = router;

function check(req, res) {
  const result = resultService.checkAnswer(req.body);
  if (result || result === 0) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
}

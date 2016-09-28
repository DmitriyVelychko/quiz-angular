const Q = require('q');

const service = {};

service.checkAnswer = checkAnswer;

module.exports = service;

function checkAnswer(data) {
  const deferred = Q.defer();

  if (data.checker && data.answers && data.answers.length > 0) {
    const checker = require(`../app/assets/question/${data.checker}/checker.json`);
    let userAnswer = data.answers.sort((a, b) => a.id - b.id);
    let correctAnswers = 0;

    userAnswer.forEach((el, i) => {
      if (parseInt(el.answer) === checker.answers[i].answer) {
        correctAnswers++;
      }
    });
    deferred.resolve(correctAnswers / data.answers.length * 100);
  }

  return deferred.promise;
}

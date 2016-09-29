const service = {};

service.checkAnswer = checkAnswer;

module.exports = service;

function checkAnswer(data) {
  if (data.checker && data.answers && data.answers.length > 0) {
    const checker = require(`../quiz/${data.checker}/checker.json`);
    const userAnswer = data.answers.sort((a, b) => a.id - b.id);
    let correctAnswers = 0;
    userAnswer.forEach((el, i) => {
      if (parseInt(el.answer, 10) === checker.answers[i].answer) {
        correctAnswers++;
      }
    });
    return Math.floor(correctAnswers / data.answers.length * 100);
  }
  return null;
}

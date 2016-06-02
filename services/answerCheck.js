var express = require('express');

var answerCheck = function (data) {

    var checker  = require('../answerCheck/'+data.checker);
    var correctness;
    var correctAnswers = 0;

    data.answers = data.answers.sort(function (a, b) {
        return a.questionId - b.questionId;
    });

    for (var i in data.answers) {
        if(+data.answers[i].answer === checker.answers[i].correctAnswer){
            correctAnswers++;
        }
    }

    correctness = (correctAnswers / data.answers.length) * 100;
    return correctness;

};

module.exports = answerCheck;
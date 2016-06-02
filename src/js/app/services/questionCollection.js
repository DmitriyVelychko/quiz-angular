'use strict';

module.exports = function (questionService, $localStorage) {
    var QuestionCollection = function () {
        this.init();
    };

    QuestionCollection.prototype.init = function () {
        this.initModel();

        if (!$localStorage.questions) {

            $localStorage.questions = this.questions;
            $localStorage.current = this.current;


            this.fetchQuestions()
        }
    };

    QuestionCollection.prototype.fetchQuestions = function () {
        var that = this;

        questionService.get().then(function (data) {
            data.questions.forEach(function (el, index) {
                el.isAnswered = false;
                el.index = index;
                that.questions.push(el);
            });

            that.checker = data.checker;
            $localStorage.checker = that.checker;
            that.current = that.questions[0];

        }, function (err) {
            $log.error(err);
        });
    };

    QuestionCollection.prototype.initModel = function () {
        this.questions = $localStorage.questions || [];
        this.checker = $localStorage.checker || "";
        this.current = $localStorage.current || "";
        this.sessionAnswers = $localStorage.sessionAnswers || [];
    };

    QuestionCollection.prototype.reset = function () {
        $localStorage.$reset();
        this.init();
    };

    QuestionCollection.prototype.getCurrent = function () {
        return this.current;
    };

    QuestionCollection.prototype.send = function () {
        var reqData = {
            checker: this.checker,
            answers: this.sessionAnswers
        };
        questionService.post(JSON.stringify(reqData));

    };

    QuestionCollection.prototype.findNext = function (collection) {
        for (var k = 0, length = collection.length; k < length; k += 1) {
            if (!collection[k].isAnswered) {
                return collection[k];
            }
        }
    };

    QuestionCollection.prototype.getNext = function () {
        var current;
        var left;

        if (this.current.index + 1 < this.questions.length) {
            left = this.questions.slice(this.current.index + 1);
            current = this.findNext(left);
        }

        this.current = !current ? this.findNext(this.questions) : current;
        $localStorage.current = this.current;

        return this.current;
    };

    QuestionCollection.prototype.saveAnswers = function (sessionAnswers) {
        this.sessionAnswers = sessionAnswers;
        $localStorage.sessionAnswers = this.sessionAnswers;

    };

    QuestionCollection.prototype.getSessionAnswer = function () {

        return this.sessionAnswers;

    };

    return new QuestionCollection();
};
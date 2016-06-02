module.exports = function ($scope, $location, questionCollection) {
    var vm = this;
    var nextQuestion;

    vm.defineListeners = function () {

        $scope.$watch('questions', function () {
            if (!vm.question) {
                vm.question = questionCollection.getCurrent();
            }
        }, true);
    };

    vm.defineScope = function () {

        vm.sessionAnswer = [];
        $scope.questions = questionCollection.questions;
        vm.userAnswer = {
            answer: "wrong"
        };

    };

    vm.answerQuestion = function () {

        vm.question.isAnswered = true;
        vm.userAnswer.questionId = vm.question.id;
        vm.userAnswer.type = vm.question.type;
        vm.sessionAnswer.push(vm.userAnswer);
        questionCollection.saveAnswers(vm.sessionAnswer);
        vm.nextQuestion();

    };

    vm.nextQuestion = function () {

        nextQuestion = questionCollection.getNext();

        if (nextQuestion) {

            vm.question = nextQuestion;
            vm.userAnswer = {
                answer: "wrong"
            };


        } else {

            questionCollection.send();
            questionCollection.reset();
            $location.url('result');

        }
    };

    vm.init = function () {
        vm.defineScope();
        vm.defineListeners();
    };

    vm.init();

};

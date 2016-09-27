export default class TestController {

  constructor($scope, $state, QuizService) {
    'ngInject';
    this.$state = $state;
    this.$scope = $scope;
    this.QuizService = QuizService;
    this.init();
  }

  init() {
    this.defineScope();
    this.defineListeners();
  }

  defineScope() {
    this.sessionAnswer = [];
    this.$scope.questions = this.QuizService.questions;
    this.userAnswer = {
      answer: 'wrong',
    };
  }

  defineListeners() {
    this.$scope.$watch('questions', () => {
      if (!this.question) {
        this.question = this.QuizService.getCurrent();
      }
    }, true);
  }

  answerQuestion() {
    this.question.isAnswered = true;
    this.userAnswer.questionId = this.question.id;
    this.userAnswer.type = this.question.type;
    this.sessionAnswer.push(this.userAnswer);
    this.QuizService.saveAnswers(this.sessionAnswer);
    this.nextQuestion();
  }

  nextQuestion() {
    const nextQuestion = this.QuizService.getNext();
    if (nextQuestion) {
      this.question = nextQuestion;
      this.userAnswer = {
        answer: 'wrong',
      };
    } else {
      this.QuizService.send().then(
          (res) => {
            const answer = res.data;
            this.QuizService.reset();
            this.$state.go('result', { answer });
          }
      );
    }
  }

}

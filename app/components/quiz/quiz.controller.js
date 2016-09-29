export default class TestController {

  constructor($scope, $state, QuizService, $stateParams) {
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.$scope = $scope;
    this.QuizService = QuizService;
    this.init();
  }

  init() {
    this.QuizService.fetchQuiz(this.$stateParams.name).then(
      (data) => {
        this.questions = data.questions;
        this.questions.forEach((el, index) => {
          el.isAnswered = false;
          el.index = index;
        });
        this.checker = data.checker;
        this.currentQuestion = this.questions[0];
      }
    );
    this.answers = [];
    this.currentAnswer = {
      answer: false,
    };
  }

  answerQuestion() {
    this.currentQuestion.isAnswered = true;
    this.currentAnswer.id = this.currentQuestion.id;
    this.answers.push(this.currentAnswer);
    this.nextQuestion();
  }

  nextQuestion() {
    const nextQuestion = this.getNext();
    if (nextQuestion) {
      this.currentQuestion = nextQuestion;
      this.userAnswer = {
        answer: false,
      };
    } else {
      this.finishQuiz();
    }
  }

  getNext() {
    let current;
    let left;
    const findNext = (collection) => {
      let finder = null;
      for (let k = 0, length = collection.length; k < length; k += 1) {
        if (!collection[k].isAnswered) {
          finder = collection[k];
        }
      }
      return finder;
    };

    if (this.currentAnswer.index + 1 < this.questions.length) {
      left = this.questions.slice(this.currentAnswer.index + 1);
      current = findNext(left);
    }
    return !current ? findNext(this.questions) : current;
  }


  finishQuiz() {
    this.QuizService.send().then(
      (res) => {
        const answer = res.data;
        this.QuizService.reset();
        this.$state.go('result', { answer });
      }
    );
  }

}

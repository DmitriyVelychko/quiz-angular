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
        this.questions = data.questions.map((el, index) => {
          const question = el;
          question.isAnswered = false;
          question.index = index;
          return question;
        });
        this.checker = data.checker;
        this.currentQuestion = this.questions[0];
      }
    );
    this.answers = [];
    this.currentAnswer = {
      answer: 0,
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
      this.currentAnswer = {
        answer: 0,
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
    const formatAnswer = {
      checker: this.checker,
      answers: this.answers,
    };
    this.QuizService.sendAnswers(formatAnswer).then(
      (res) => {
        const result = res.data;
        this.$state.go('result', { result });
      }
    );
  }

}

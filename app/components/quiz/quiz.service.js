export default class TestService {
  constructor(CommunicationService, $localStorage, $log) {
    'ngInject';
    this.CommunicationService = CommunicationService;
    this.$localStorage = $localStorage;
    this.$log = $log;
    this.init();
  }

  init() {
    this.initModel();
    if (!this.$localStorage.questions) {
      this.$localStorage.questions = this.questions;
      this.$localStorage.current = this.current;
      this.fetchQuestions();
    }
  }

  initModel() {
    this.questions = this.$localStorage.questions || [];
    this.checker = this.$localStorage.checker || '';
    this.current = this.$localStorage.current || '';
    this.sessionAnswers = this.$localStorage.sessionAnswers || [];
  }

  fetchQuestions() {
    const that = this;
    this.CommunicationService.get().then(
      (data) => {
        data.questions.forEach((el, index) => {
          const tempEl = el;
          tempEl.isAnswered = false;
          tempEl.index = index;
          that.questions.push(tempEl);
        });
        that.checker = data.checker;
        this.$localStorage.checker = that.checker;
        that.current = that.questions[0];
      },
      (err) => {
        this.$log.error(err);
      });
  }


  reset() {
    this.$localStorage.$reset();
    this.init();
  }

  getCurrent() {
    return this.current;
  }

  send() {
    const reqData = {
      checker: this.checker,
      answers: this.sessionAnswers,
    };
    this.CommunicationService.post(angular.toJson(reqData));
  }

  findNext(collection) {
    let finder = null;
    for (let k = 0, length = collection.length; k < length; k += 1) {
      if (!collection[k].isAnswered) {
        finder = collection[k];
      }
    }
    return finder;
  }

  getNext() {
    let current;
    let left;

    if (this.current.index + 1 < this.questions.length) {
      left = this.questions.slice(this.current.index + 1);
      current = this.findNext(left);
    }
    this.current = !current ? this.findNext(this.questions) : current;
    this.$localStorage.current = this.current;
    return this.current;
  }

  saveAnswers(sessionAnswers) {
    this.sessionAnswers = sessionAnswers;
    this.$localStorage.sessionAnswers = this.sessionAnswers;
  }

  getSessionAnswer() {
    return this.sessionAnswers;
  }
}

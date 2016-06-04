export default class TestService  {
  constructor(CommunicationService, $localStorage) {
    'ngInject';
    this.CommunicationService = CommunicationService;
    this.$localStorage = $localStorage;
    this.init();
  }

  init () {
    this.initModel();
    if (!this.$localStorage.questions) {
      this.$localStorage.questions = this.questions;
      this.$localStorage.current = this.current;
      this.fetchQuestions()
    }
  };

  initModel () {
    this.questions = this.$localStorage.questions || [];
    this.checker = this.$localStorage.checker || "";
    this.current = this.$localStorage.current || "";
    this.sessionAnswers = this.$localStorage.sessionAnswers || [];
  };

  fetchQuestions () {
    const that = this;
    this.CommunicationService.get().then((data) => {
      data.questions.forEach((el, index) => {
        el.isAnswered = false;
        el.index = index;
        that.questions.push(el);
      });

      that.checker = data.checker;
      this.$localStorage.checker = that.checker;
      that.current = that.questions[0];

    }, (err) => {
      console.error(err);
    });
  };



  reset () {
    this.$localStorage.$reset();
    this.init();
  };

  getCurrent () {
    return this.current;
  };

  send () {
    var reqData = {
      checker: this.checker,
      answers: this.sessionAnswers
    };
    this.CommunicationService.post(JSON.stringify(reqData));
  };

  findNext (collection) {
    for (var k = 0, length = collection.length; k < length; k += 1) {
      if (!collection[k].isAnswered) {
        return collection[k];
      }
    }
  };

  getNext () {
    let current, left;

    if (this.current.index + 1 < this.questions.length) {
      left = this.questions.slice(this.current.index + 1);
      current = this.findNext(left);
    }
    this.current = !current ? this.findNext(this.questions) : current;
    this.$localStorage.current = this.current;
    return this.current;
  };

  saveAnswers  (sessionAnswers) {
    this.sessionAnswers = sessionAnswers;
    this.$localStorage.sessionAnswers = this.sessionAnswers;
  };

  getSessionAnswer  () {
    return this.sessionAnswers;
  };

};
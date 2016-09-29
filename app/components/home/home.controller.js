export default class HomeController {
  constructor($state) {
    this.$state = $state;
  }

  onQuiz(name) {
    this.$state.go('quiz', { name });
  }
}

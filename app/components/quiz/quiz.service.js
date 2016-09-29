export default class TestService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  fetchQuiz(name) {
    return this.$http.get(`./quiz/${name}/test.json`)
      .then(
        (res) => res.data,
        (err) => this.$q.reject(err)
      );
  }

  sendAnswers(answers) {
    return this.$http.post('/api/result/check', angular.toJson(answers)).success((res) => res);
  }

}

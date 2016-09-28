export default class CommunicationService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  get() {
    return this.$http.get('./question/first/test.json')
      .then(
        (res) => res.data,
        (err) => this.$q.reject(err)
      );
  }

  post(data) {
    return this.$http.post('/api/result/check', data).success((res) => res);
  }

}

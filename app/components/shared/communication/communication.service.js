export default class CommunicationService {
  constructor($http, $q, $log, resultValue) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
    this.$log = $log;
    this.resultValue = resultValue;
  }

  get() {
    const defer = this.$q.defer();
    this.$http.get('./question/test-php.json').then((res) => {
      this.$log.log(res);
      defer.resolve(res.data);
    }, (err) => {
      this.$log.error(err);
      defer.reject(err);
    });
    return defer.promise;
  }

  post(data) {
    this.$http.post('/result', data).success((result) => {
      this.resultValue.correctness = result;
    });
  }

}

export default class CommunicationService {
  constructor($http, $q, $log) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
    this.$log = $log;
  }

  get() {
    const defer = this.$q.defer();
    this.$http.get('./question/test-php.json').then((res) => {
      defer.resolve(res.data);
    }, (err) => {
      this.$log.error(err);
      defer.reject(err);
    });
    return defer.promise;
  }

  post(data) {
    return this.$http.post('/result', data).success((res) => res);
  }

}

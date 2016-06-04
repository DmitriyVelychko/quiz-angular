export default class CommunicationService {
  constructor($http, $q, resultValue) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
    this.resultValue = resultValue
  }

  get() {
    const defer = this.$q.defer();
    this.$http.get("./question/test-php.json").then((res) => {
      console.log(res)
      defer.resolve(res.data);
    }, (err) => {
      console.log(err)
      defer.reject(err);
    });
    return defer.promise;
  };

  post(data) {
    this.$http.post("/result", data).success((data) => {
      this.resultValue.correctness = data;
    });
  };

};

export default class CommunicationService {
    constructor($http, $q) {
        'ngInject';
        this.$http = $http;
        this.$q = $q;
    }

    get() {
        return this.$http.get('./question/test-php.json')
            .then(
                (res) => res.data,
                (err) => this.$q.reject(err)
            );
    }

    post(data) {
        return this.$http.post('/result', data).success((res) => res);
    }

}

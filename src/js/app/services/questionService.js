'use strict';

module.exports = function ($http, $q, $log, sessionResult) {
    var QuestionService = function () {
    };

    QuestionService.prototype.get = function () {
        var defer = $q.defer();

        $http.get("../question/test-php.json").then(function (res) {
            defer.resolve(res.data);
        }, function (err) {
            $log.error(err);
            defer.reject(err);
        });

        return defer.promise;
    };

    QuestionService.prototype.post = function (data) {

        $http.post("/result", data).success(function (data) {

            sessionResult.correctness = data;

        });
    };

    return new QuestionService();
};

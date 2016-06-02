'use strict';

var angular = require('angular');

require('angular-route');
require('ngstorage');

angular.module('quizApp', ['ngRoute', 'ngStorage']);

require('./services');
require('./controllers');

angular.module('quizApp').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'views/main.html',
            controller: 'mainController as vm'
        }).when('/test', {
            templateUrl: 'views/test.html',
            controller: 'testController as vm'
        }).when("/result", {
            templateUrl: "views/result.html",
            controller: "resultController as vm"
        }).otherwise({
            redirectTo: '/main'
        });
    }]);

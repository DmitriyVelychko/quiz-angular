'use strict';

angular.module('quizApp').controller('mainController', ['$scope', require('./mainController')]);
angular.module('quizApp').controller('resultController', ['$scope', 'sessionResult', require('./resultController')]);
angular.module('quizApp').controller('testController', ['$scope', '$location', 'questionCollection', require('./testController')]);

'use strict';

angular.module('quizApp').value('sessionResult', require('./sessionResult'));
angular.module('quizApp').factory('questionCollection', ['questionService', '$localStorage', require('./questionCollection')]);
angular.module('quizApp').factory('questionService', ['$http', '$q', '$log', 'sessionResult', require('./questionService')]);

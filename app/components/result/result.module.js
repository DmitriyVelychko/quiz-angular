import ResultController from './result.controller';

const ResultModule = angular.module('app.result', []);

ResultModule
  .controller('ResultController', ResultController)
  .value('resultValue', {correctness: ''});
;

export default ResultModule.name;

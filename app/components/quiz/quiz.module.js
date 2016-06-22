import QuizController from './quiz.controller';
import QuizService from './quiz.service';

angular.module('app.quiz', [])
  .controller('QuizController', QuizController)
  .service('QuizService', QuizService)
;

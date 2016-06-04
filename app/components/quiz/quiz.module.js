import QuizController from './quiz.controller';
import QuizService from './quiz.service';

const QuizModule = angular.module('app.quiz', []);

QuizModule
  .controller('QuizController', QuizController)
  .service('QuizService', QuizService)
;

export default QuizModule;

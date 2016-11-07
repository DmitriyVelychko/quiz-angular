import home from './components/home/home.view.html';
import quiz from './components/quiz/quiz.view.html';
import result from './components/result/result.view.html';

export function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: home,
      controller: 'HomeController',
      controllerAs: 'vm',
    })
    .state('quiz', {
      url: '/quiz/:name',
      template: quiz,
      controller: 'QuizController',
      controllerAs: 'vm',
    })
    .state('result', {
      url: '/result',
      template: result,
      controller: 'ResultController',
      controllerAs: 'vm',
      params: {
        result: null,
      },
    });
  $urlRouterProvider.otherwise('/home');
}

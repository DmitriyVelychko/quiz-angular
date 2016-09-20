export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'components/home/home.view.html',
      controller: 'HomeController',
      controllerAs: 'vm',
    })
    .state('test', {
      url: '/test',
      templateUrl: 'components/quiz/quiz.view.html',
      controller: 'QuizController',
      controllerAs: 'vm',
    })
    .state('result', {
      url: '/result',
      templateUrl: 'components/result/result.view.html',
      controller: 'ResultController',
      controllerAs: 'vm',
    });
  $urlRouterProvider.otherwise('/home');
}

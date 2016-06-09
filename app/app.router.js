export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/components/home/home.view.html',
      controller: 'HomeController',
      controllerAs: 'vm',
    })
    .state('test', {
      url: '/test',
      templateUrl: 'views/components/quiz/quiz.view.html',
      controller: 'QuizController',
      controllerAs: 'vm',
    })
    .state('result', {
      url: '/result',
      templateUrl: 'views/components/result/result.view.html',
      controller: 'ResultController',
      controllerAs: 'vm'
    });
  $urlRouterProvider.otherwise('/home');

}

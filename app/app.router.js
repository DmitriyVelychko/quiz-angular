export function routerConfig ($routeProvider) {
  'ngInject'
  $routeProvider.when('/home', {
    templateUrl: 'views/components/home/home.view.html',
    controller: 'HomeController',
    controllerAs: 'vm',
  }).when('/test', {
    templateUrl: 'views/components/quiz/quiz.view.html',
    controller: 'QuizController',
    controllerAs: 'vm',
  }).when('/result', {
    templateUrl: 'views/components/result/result.view.html',
    controller: 'ResultController',
    controllerAs: 'vm'
  }).otherwise({
    redirectTo: '/home'
  });
}

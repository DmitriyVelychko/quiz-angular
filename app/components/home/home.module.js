import HomeController from './home.controller';

const HomeModule = angular.module('app.home', []);

HomeModule
  .controller('HomeController', HomeController)
;

export default HomeModule;

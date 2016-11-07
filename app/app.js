import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './assets/sass/styles.scss';

import './components/home/home.module';
import './components/result/result.module';
import './components/quiz/quiz.module';

import { routerConfig } from './app.router';

angular.module('app', [
  uiRouter,
  'app.home',
  'app.result',
  'app.quiz',
])
  .config(routerConfig)
;

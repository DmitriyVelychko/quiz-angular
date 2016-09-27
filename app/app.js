import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'ngstorage';

import './components/home/home.module';
import './components/result/result.module';
import './components/quiz/quiz.module';
import './components/shared/shared.module';
import './app.templates';

import { routerConfig } from './app.router';

angular.module('app', [
  uiRouter,
  'ngStorage',
  'app.home',
  'app.result',
  'app.quiz',
  'app.shared',
  'app.templates',
])
  .config(routerConfig)
;

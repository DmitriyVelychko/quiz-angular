import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'ngstorage';

import HomeModule from './components/home/home.module';
import ResultModule from './components/result/result.module';
import QuizModule from './components/quiz/quiz.module';
import CommunicationModule from './shared/communication/communication.module';

import {routerConfig} from './app.router';

angular.module('app', [
  uiRouter,
  'ngStorage',
  HomeModule,
  ResultModule,
  QuizModule,
  CommunicationModule,
])
  .config(routerConfig)

;
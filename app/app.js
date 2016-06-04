import angular from 'angular';
import ngRoute from 'angular-route';
import ngStorage from 'ngstorage';

import HomeModule from './components/home/home.module';
import ResultModule from './components/result/result.module';
import QuizModule from './components/quiz/quiz.module';
import CommunicationModule from './shared/communication/communication.module';

import {routerConfig} from './app.router';

angular.module('app', [
  'ngRoute',
  'ngStorage',
  HomeModule.name,
  ResultModule.name,
  QuizModule.name,
  CommunicationModule.name,
])
  .config(routerConfig)

;
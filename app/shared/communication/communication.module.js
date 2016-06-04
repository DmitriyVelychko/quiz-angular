import CommunicationService from './communication.service';

const CommunicationModule = angular.module('app.communication', []);

CommunicationModule
  .service('CommunicationService', CommunicationService)
;

export default CommunicationModule;

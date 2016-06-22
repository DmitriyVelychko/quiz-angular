export default class ResultService {

  constructor(resultValue) {
    'ngInject';
    this.correctness = resultValue.correctness;
  }
}

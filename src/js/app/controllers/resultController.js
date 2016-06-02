module.exports = function ($scope, sessionResult) {
    var vm = this;

    vm.defineScope = function () {
    };

    vm.sessionResult = sessionResult;


    vm.init = function () {
        vm.defineScope();
    };

    vm.init();

};

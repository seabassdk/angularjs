(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LCController', LCController);

LCController.$inject = ['$scope'];
function LCController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();

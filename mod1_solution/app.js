(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LCController', LCController);

LCController.$inject = ['$scope'];
function LCController($scope) {
  $scope.foods = "";

  $scope.check = function () {
    var foodSplit = $scope.foods.split(",");

    for(var i = 0; i < foodSplit.length; ++i){
	      if (foodSplit[i] === "") foodSplit.splice(i, 1);
    }

    //if(foodSplit.length == 1 && foodSplit[0] == ""){
    if(foodSplit.length === 0){
      $scope.verdict = "Please enter data first";
      $scope.myStyle = {"color":"red",
                        "border":"1px solid red",
                        "display":"inline-block",
                        "padding":"3px"}
    }else if(foodSplit.length <= 3){
      $scope.verdict = "Enjoy! ";
      $scope.myStyle = {"color":"green",
                        "border":"1px solid green",
                        "display":"inline-block",
                        "padding":"3px"}
    }else{
      $scope.verdict = "Too much!";
      $scope.myStyle = {"color":"green",
                        "border":"1px solid green",
                        "display":"inline-block",
                        "padding":"3px"}
    }
  };

}

})();

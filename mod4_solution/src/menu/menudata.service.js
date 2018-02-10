(function () {
'use strict';

angular.module('data')
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ["$http"]
function MenuDataService ($http) {
  var service = this;

  var getCatResponse = function(){

    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    });

    return response;
  };

  var getItemResponse = function(itemShortName){

    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + itemShortName
    });

    return response;
  };

  service.getAllCategories = function(){

    var promise = getCatResponse();

    return promise;
  }

  service.getItemsForCategory = function(categoryShortName){

    var promise = getItemResponse(categoryShortName);

    return promise;
  }
}

})();

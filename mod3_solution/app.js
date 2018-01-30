(function () {
'use strict';

angular.module("NarrowItDownApp",[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItemsDir', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsLayout.html',
    scope: {
      foundItems: '<',
      onRemove: '&',
      canShowEmpty: '<' //to show if there is nothing found
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'dirCtrl',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
}

NarrowItDownController.$inject = ["MenuSearchService","$scope"];
function NarrowItDownController(MenuSearchService, $scope){
  var myCtrl = this;

  myCtrl.searchWord = "";
  myCtrl.canShowEmpty = MenuSearchService.getEmpty();
  myCtrl.items = MenuSearchService.getItems();

  myCtrl.getItems = function(){
    MenuSearchService.getMatchedMenuItems(myCtrl.searchWord);
  };

  myCtrl.remove = function(index){
    MenuSearchService.removeItem(index);
  };

}


MenuSearchService.$inject = ["$http"]
function MenuSearchService($http){

  var searchService = this;

  var foundItems = [];
  var empty = {canShow:  false};

  var getResponse = function(){
    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    });
    return response;
  };

  searchService.getMatchedMenuItems = function(searchTerm){
    foundItems.length = 0;

    if(searchTerm ===""){
      isEmpty();
      return foundItems;
    }

    var promise = getResponse();

    promise.then(function (response) {
    // process result and only keep items that match
    var toSearch = searchTerm.toLowerCase();
    var searchIn;

    var menuItems = response.data;
    var itemsArray = menuItems.menu_items;

    var i;
    for(i = 0; i < itemsArray.length; i++){
      searchIn = itemsArray[i].description.toLowerCase();

      if(searchIn.indexOf(toSearch) !== -1){
        var toAdd = {
          name : itemsArray[i].name,
          short_name : itemsArray[i].short_name,
          description : itemsArray[i].description
        };
        foundItems.push(toAdd);
      }
    }
    // return processed items
    isEmpty();
    return foundItems;
  })
  .catch(function (error) {
    console.log(error);
  });
  };

  searchService.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
    isEmpty();
  };

  var isEmpty = function() {
    if(foundItems.length === 0)
      empty.canShow = true;
    else
      empty.canShow = false;
  };

  searchService.getItems = function () {
    return foundItems;
  };

  searchService.getEmpty = function () {
    return empty;
  };


}


})();

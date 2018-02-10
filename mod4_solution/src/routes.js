(function () {
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  console.log("Setting up the states");
  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  //categories state
  .state('categoriesState', {
    url: '/categories',
    templateUrl: 'src/templates/state.categories.template.html',
    controller: 'MenuDataCatController as catData',
    resolve: {
      //should inject this resolve property into the controller to get data
      items: ['MenuDataService', function (MenuDataService) {
        console.log("In the function in state categories");
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemsState', {
    url: '/items/{itemShortName}',
    templateUrl: 'src/templates/state.items.template.html',
    controller: 'MenuDataItemController as itemData',
    resolve: {
      //should inject this resolve property into the controller to get data
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        console.log("In the function in state items");
        return MenuDataService.getItemsForCategory($stateParams.itemShortName);
      }]
    }
  })

}

})();

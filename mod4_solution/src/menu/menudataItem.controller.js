(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuDataItemController', MenuDataItemController);


MenuDataItemController.$inject = ['MenuDataService', 'items'];
function MenuDataItemController(MenuDataService, items) {
  var itemData = this;

  itemData.items = items.data.menu_items;
  itemData.category = items.data.category.name;


}

})();

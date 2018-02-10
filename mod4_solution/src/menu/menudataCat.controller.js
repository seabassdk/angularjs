(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuDataCatController', MenuDataCatController);


MenuDataCatController.$inject = ['MenuDataService', 'items'];
function MenuDataCatController(MenuDataService, items) {
  var catData = this;

  catData.items = items.data;

}

})();

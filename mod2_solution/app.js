(function () {
'use strict';
console.log("starting angular");
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buy = this;

  buy.toBuylist = ShoppingListCheckOffService.getBuyItems();

  buy.buying = function(itemIndex){
      ShoppingListCheckOffService.buying(itemIndex);
  }

  buy.buyListLength = function(){
    return buy.toBuylist.length;
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;

  bought.boughtList = ShoppingListCheckOffService.getBoughtItems();

  bought.boughtListLength = function(){
    return bought.boughtList.length;
  }
}

function ShoppingListCheckOffService(){
  var service = this;

  var buyItems = ["Buy 10 cookies","Buy 100 cookies"];
  var boughtItems = [];

  service.buying = function(itemIndex){
    boughtItems.push(buyItems[itemIndex]);
    buyItems.splice(itemIndex, 1);
  };

  service.getBoughtItems =  function(){
    return boughtItems;
  };

  service.getBuyItems =  function(){
    return buyItems;
  };
}

})();

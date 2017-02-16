(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.bought = function (itemIndex) {
    ShoppingListCheckOffService.bought(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: 'cookies', quantity: 10 },
    { name: 'chips', quantity: 20 },
    { name: 'milk', quantity: 5 },
    { name: 'chocolate', quantity: 2 },
    { name: 'candies', quantity: 10 }
  ];
  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.bought = function (itemIdex) {
    var item = toBuyItems[itemIdex];
    toBuyItems.splice(itemIdex, 1);
    boughtItems.push(item);
  };

}

})();

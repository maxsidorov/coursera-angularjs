(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var controller = this;
  controller.categoryName = items.category.name;
  controller.items = items.menu_items;
}

})();

(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ServerSearchUrl', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      message: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'controller',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;

  controller.searchTerm = "";
  controller.foundItems = [];
  controller.errorMessage = ""

  controller.search = function () {
    controller.errorMessage = ""
    if (controller.searchTerm.trim()) {
      var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
      promise.then(function (foundItems) {
        controller.foundItems = foundItems;
        if (controller.foundItems.length == 0) {
          controller.errorMessage = "Nothing found";
        }
      })
    } else {
      controller.errorMessage = "Nothing found";
    }
  };

  controller.removeFoundItem = function (index) {
    controller.foundItems.splice(index, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ServerSearchUrl'];
function MenuSearchService($http, ServerSearchUrl) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ServerSearchUrl)
    }).then(function (response) {
      var menuItems = response.data.menu_items;
      var foundItems = menuItems.filter(function (item) {
        return item.description.indexOf(searchTerm) !== -1;
      });
      return foundItems;
    }).catch(function (error) {
      console.log(error);
    });
  };

}

})();

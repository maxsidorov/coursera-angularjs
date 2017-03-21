(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController)
.directive('menuItemExistent', MenuItemExistentDirective);

SignupController.$inject = ['UserService', 'MenuService'];
function SignupController(UserService, MenuService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.menuItemShortName)
    .then(function (menuItem) {
      UserService.signup($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone, menuItem);
      $ctrl.completed = true;
    }).catch(function (error) {
      console.log(error);
    });
  };
}

MenuItemExistentDirective.$inject = ['MenuService'];
function MenuItemExistentDirective(MenuService) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.menuItemExistent = function(modelValue, viewValue) {
        return MenuService.getMenuItem(modelValue);
      };
    }
  };
}

})();

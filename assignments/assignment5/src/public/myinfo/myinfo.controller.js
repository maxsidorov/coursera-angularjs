(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath', 'UserService'];
function MyInfoController(ApiPath, UserService) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;

  $ctrl.isSignedUp = function () {
    return UserService.isSignedUp;
  };

  $ctrl.getFirstName = function () {
    return UserService.firstName;
  };

  $ctrl.getLastName = function () {
    return UserService.lastName;
  };

  $ctrl.getEmail = function () {
    return UserService.email;
  };

  $ctrl.getPhone = function () {
    return UserService.phone;
  };

  $ctrl.getMenuItem = function () {
    return UserService.menuItem;
  };

}


})();

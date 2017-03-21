(function () {
'use strict';

angular.module('public')
.service('UserService', UserService);

function UserService() {
  var service = this;
  service.isSignedUp = false;

  service.signup = function (firstName, lastName, email, phone, menuItem) {
    service.firstName = firstName;
    service.lastName = lastName;
    service.email = email;
    service.phone = phone;
    service.menuItem = menuItem;

    service.isSignedUp = true;
  };

}

})();

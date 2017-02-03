(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkDishes = function () {
    if (!$scope.dishes) {
      $scope.message = 'Please enter data first';
    } else {
      var dishesAmount = $scope.dishes.split(',').length;
      if (dishesAmount <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    }
  };
}

})();

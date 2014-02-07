var module = angular.module('dgmt.controllers');

module.controller('RestCtrl', function($scope,  $routeParams, $interval, $location) {
  var remainingTime = $routeParams.time;
  
  function decrementTime() {
    remainingTime -= 1000;   
    if (remainingTime < 1000) {
      stopCounting();
      returnToExercise();
    } else {
      $scope.time = remainingTime;
    }
  }

  function stopCounting() {
    $interval.cancel(stop);
    stop = undefined;
  }

  function returnToExercise() {
    $location.path('/exercise');  
  }

  var stop = $interval(decrementTime, 1000);

  $scope.$on('$destroy', stopCounting);
  $scope.time = remainingTime;
});

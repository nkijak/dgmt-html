var module = angular.module('dgmt.controllers');

module.controller('RestCtrl', function($scope, PushupSchedule) {
  $scope.time = PushupSchedule.nextRest();
});

var module = angular.module("dgmt.controllers");

module
.controller("WorkoutHomeCtrl", function($scope, $location, PushupSchedule) {
    $scope.go = function() {
       $location.path("/exercise"); 
    }
	  $scope.workout = PushupSchedule.currentWorkout;
    $scope.episodes = PushupSchedule.episodes();
    $scope.levels = PushupSchedule.levels();
})
;

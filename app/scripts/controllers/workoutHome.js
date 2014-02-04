var module = angular.module("dgmt.controllers");

module
.controller("WorkoutHomeCtrl", function($scope, $location, PushupSchedule) {
    $scope.instruction = "Initializing...";
    $scope.go = function() {
       $location.path("/exercise"); 
    }
	  $scope.workout = PushupSchedule.currentWorkout;
})
;

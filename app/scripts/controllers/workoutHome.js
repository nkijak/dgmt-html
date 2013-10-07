var module = angular.module("dgmt.controllers", ['dgmt.ui.elements', 'dgmt.services']);

module.controller("WorkoutHomeCtrl", function($scope, $location, PushupSchedule) {
    $scope.instruction = "Initializing...";
    $scope.go = function() {
       $location.path("/exercise"); 
    }
	$scope.workout = PushupSchedule.currentWorkout;
});

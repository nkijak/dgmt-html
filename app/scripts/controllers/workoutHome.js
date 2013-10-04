var module = angular.module("dgmt.workoutHome", ['dgmt.ui.elements']);

module.controller("WorkoutHomeCtrl", function($scope) {
    $scope.instruction = "Initializing...";
    $scope.go = function() {
        $scope.instruction = "RUNNING";

    }
});

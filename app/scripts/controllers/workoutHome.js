var module = angular.module("dgmt.controllers", ['dgmt.ui.elements']);

module.controller("WorkoutHomeCtrl", function($scope, $location) {
    $scope.instruction = "Initializing...";
    $scope.go = function() {
       $location.path("/exercise"); 
    }
});

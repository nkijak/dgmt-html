var module = angular.module('app.controllers', ['app.services']);

module.controller('ExerciseCtrl', function($scope, PushupSchedule) {
    var count = 0; 
    $scope.count = function() {
        count += 1;
        console.log(count);
    };
});

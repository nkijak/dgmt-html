angular.module('dgmt', ['ngRoute', 'dgmt.controllers'])

  .constant('TPL_PATH', '/templates')

  .config(function($routeProvider, TPL_PATH) {
    $routeProvider.when('/',{
      controller : 'WorkoutHomeCtrl',
      templateUrl : TPL_PATH + '/workoutHome.html'
    })
    .when('/exercise', {
        controller: 'ExerciseCtrl',
        templateUrl: TPL_PATH + '/exercise.html'
    })
    ;
  });

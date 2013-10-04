angular.module('dgmt', ['ngRoute', 'dgmt.workoutHome'])

  .constant('TPL_PATH', '/templates')

  .config(function($routeProvider, TPL_PATH) {
    $routeProvider.when('/',{
      controller : 'WorkoutHomeCtrl',
      templateUrl : TPL_PATH + '/workoutHome.html'
    });
  });

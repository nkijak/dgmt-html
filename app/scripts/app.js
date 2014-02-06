angular.module('dgmt', ['ngRoute', 'ngTouch', 'dgmt.controllers'])

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
    .when('/rest', {
      controller: 'RestCtrl',
      temlateUrl: TPL_PATH + '/rest.html'
    })
    ;
  });

angular.module("dgmt.controllers", ['dgmt.ui.elements', 'dgmt.services']);

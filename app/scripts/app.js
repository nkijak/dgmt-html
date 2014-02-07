angular.module('dgmt', ['ngRoute', 'ngTouch', 'dgmt.controllers', 'dgmt.filters'])

  .constant('TPL_PATH', '/templates')

  .config(function($routeProvider, TPL_PATH, $logProvider) {
    $logProvider.debugEnabled(true);

    $routeProvider.when('/',{
      controller : 'WorkoutHomeCtrl',
      templateUrl : TPL_PATH + '/workoutHome.html'
    })
    .when('/exercise', {
      controller: 'ExerciseCtrl',
      templateUrl: TPL_PATH + '/exercise.html'
    })
    .when('/rest/:time', {
      controller: 'RestCtrl',
      templateUrl: TPL_PATH + '/rest.html'
    })
    .otherwise({redirectTo:'/'});
    
  });

angular.module('dgmt.filters', []);
angular.module("dgmt.controllers", ['dgmt.ui.elements', 'dgmt.services']);


'use strict';

describe('Workout Home', function() {

  var $scope;
  var pushupSchedule;
  beforeEach(angular.mock.module('dgmt.controllers'));

  beforeEach(inject(function($rootScope, $controller, $location) {
    $scope = $rootScope.$new();
    pushupSchedule = {'currentWorkout': [1,2,3],
                      'episodes': function() { 
                        return [{label:"dummy data", value: -1}];
                      },
                      'levels': function() {
                        return ['level1','level2'] ;
                      }};
    $controller('WorkoutHomeCtrl', {$scope: $scope, 
                                    $location: $location, 
                                    PushupSchedule: pushupSchedule});
  }));

  it('should add the current workout to scope', function() {
    expect($scope.workout).toBe(pushupSchedule.currentWorkout);
  });

  it('should add the episode list to scope', function() {
    expect($scope.episodes).toEqual(pushupSchedule.episodes());
  });

  it('should add the levels to to the scope', function() {
    expect($scope.levels).toEqual(pushupSchedule.levels());
  });

  //TODO how to test location?
  xit('should move to /exercise when go() is invoked', function() {
    expect($scope.go).not.toBe(undefined);
    $scope.go();
    expect($location.path).toEqual('/exercise');
  });
});

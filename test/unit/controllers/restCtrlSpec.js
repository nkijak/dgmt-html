'use strict';

describe('Rest Home', function() {

  var $scope;
  var interval;
  var mockLocation = {
    path: function(path) {
      this.pathValue = path;
    }
  };
  
  beforeEach(angular.mock.module('dgmt.controllers'));

  beforeEach(inject(function($rootScope, $controller, $interval) {
    $scope = $rootScope.$new();
    $controller('RestCtrl', {$scope: $scope, 
      $routeParams: {
        time: 30000
      },
      $interval: $interval,
      $location: mockLocation
    });
    interval = $interval;
  }));

  it("should get the current rest from the PushupSchedule and put in scope", function() {
    expect($scope.time).toEqual(30000);
  });

  it("should count down and update the time after a second", function() {
    interval.flush(1000);
    expect($scope.time).toEqual(29000);
  });

  it("should change path back to exercise when time is up", function() {
    interval.flush(30000);
    expect(mockLocation.pathValue).toEqual('/exercise');
  });
});

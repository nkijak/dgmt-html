'use strict';

describe('Exercise Home', function() {

  var $scope;
  beforeEach(angular.mock.module('dgmt.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('ExerciseCtrl', {$scope: $scope, PushupService: {}});
  }));

  it('should add a count function to $scope', function() {
    expect($scope.count).not.toBe(undefined);
  });
});

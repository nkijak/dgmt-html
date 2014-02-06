'use strict';

describe('Rest Home', function() {

  var $scope;
  beforeEach(angular.mock.module('dgmt.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('RestCtrl', {$scope: $scope, 
      PushupSchedule: {
        nextRest: function() {return 30;}
      }
    });
  }));

  it("should get the current rest from the PushupSchedule and put in scope", function() {
    expect($scope.time).toEqual(30); 
  });
});

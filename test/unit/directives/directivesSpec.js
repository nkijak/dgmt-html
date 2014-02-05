describe('directives', function() {
  beforeEach(angular.mock.module('dgmt.ui.elements'));
  var rootScope;
  var element;

  describe('speech-bubble', function(){
    beforeEach(angular.mock.module('/templates/speechBubble.html'));

    beforeEach(inject(function($compile, $rootScope) {
        rootScope = $rootScope;
        element = $compile("<speech-bubble workout='workout'/>")($rootScope);  
        $rootScope.$digest();
    }));

    it('should display default message without workout', function() {
      expect(element.html()).toContain("Beat your face!");
    });

    it('should display a total count message', function() {
      rootScope.workout = [1,1,1,1]; 
      rootScope.$digest();

      expect(element.html()).toContain("Drop and Give Me 4!");
    });
  });
});

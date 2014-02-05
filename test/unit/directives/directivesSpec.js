describe('directives', function() {
  beforeEach(angular.mock.module('dgmt.ui.elements'));


  describe('speech-bubble', function(){
    beforeEach(angular.mock.module('/templates/speechBubble.html'));

    it('should display a total count message', function() {

      inject(function($compile, $rootScope, $templateCache) {
        var element = $compile("<speech-bubble workout='workout'/>")($rootScope);  
        $rootScope.$digest();

        $rootScope.workout = [1,1,1,1]; 
        $rootScope.$digest();

        expect(element.html()).toContain("Drop and Give Me 4!");
      });
    });
  });
});

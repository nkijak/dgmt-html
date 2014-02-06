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


  describe('workout-select', function() {
    var pushupSchedule;

    beforeEach(angular.mock.module('/templates/workoutSelect.html')); 

    beforeEach(angular.mock.module(function ($provide) {
      $provide.provider('PushupSchedule', function () { 
        this.$get = function () {
          return {
            levels: function() {
              return ['level1','level2'];
            },
            episodes: function() {
              return [{label: 'DUMMY_EPISODE', value: "0"}, {label: 'OTHER_DUMMY_EPISODE', value: "1"}];
            },
            workoutFor: function(episodeIndex, level) {
              return [1,2,3,4,5];
            }
          };
        }
      });
    }));

    beforeEach(inject(function($compile, $rootScope, $injector) {
      rootScope = $rootScope;
      element = $compile('<workout-select episodes="episodes" levels="levels" workout="workout"></workout-select>')($rootScope);
      $rootScope.workout = [];
      pushupSchedule = $injector.get('PushupSchedule');
      $rootScope.levels = pushupSchedule.levels(); 
      $rootScope.episodes = pushupSchedule.episodes();
      $rootScope.$digest();
    }));

    it('should have a dropdown of episodes', function() {
      var dropdown = element.find('select#episode');
      expect(dropdown).not.toBe(null);
      
      dropdown = dropdown[0];
      expect(dropdown.options.length).toBe(2);
    });

    it('should have a dropdown of levels', function() {
      var dropdown = element.find('select#level');
      expect(dropdown).not.toBe(null);
      
      dropdown = dropdown[0];
      expect(dropdown.options.length).toBe(2);
    });
    
    it('should set episode on scope when selected', function() {
      element.val('1');
      // workoutFor called without params because its mocked to return same value all the time
      expect(rootScope.workout).toEqual(pushupSchedule.workoutFor());
    });
  });
});

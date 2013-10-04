var module = angular.module("dgmt.ui.elements", ['dgmt.services']);

module.directive("speechBubble", [function() {
    return {
        restrict: 'E',
        scope: {
            text: "@",
            episode: "@"
        },
        templateUrl: '/templates/speechBubble.html',
        link: function(scope, element, attrs) {
            

        }
    }
}]);

module.directive("workoutSelect", ["PushupSchedule", function(PushupSchedule){
    return {
        restrict: 'E',
        templateUrl: '/templates/workoutSelect.html',
        controller: function($scope) {

            this.selectedWorkout = function(schedule) {
            }

        },
        link: function(scope, element, attrs) {
            scope.episodes = PushupSchedule.episodes();
            scope.levels = PushupSchedule.levels();
            scope.episode = "week 1 day 1";
            scope.level = "EASY";
        }
    }

}]);

module.directive("overviewChart", [function() {
    return {
        restrict: 'E',
        template: '<div class="chart"></div>'
    }
}]);


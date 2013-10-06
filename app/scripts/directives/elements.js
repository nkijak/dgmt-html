var module = angular.module("dgmt.ui.elements", ['dgmt.services']);

module.directive("speechBubble", [function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/speechBubble.html',
        link: function(scope, element, attrs) {
           scope.$watch('workout', function(value){
               try {
                   scope.text = "Drop and Give Me "+value.reduce(function(acc, i) { return acc + i;}, 0) + "!";
               } catch (e) {
                   scope.text = "Beat your face!";
               }
           });
        }
    }
}]);

module.directive("workoutSelect", ["PushupSchedule", function(PushupSchedule){
    return {
        restrict: 'E',
        templateUrl: '/templates/workoutSelect.html',
        controller: function($scope) {
            this.setWorkout = function(episode, level) {
                $scope.workout = PushupSchedule.workoutFor(episode, level);
                PushupSchedule.currentWorkout = $scope.workout;
            }
        },
        link: function(scope, element, attrs, ctrl) {
            element.find("select").on("change", function() {
               ctrl.setWorkout(scope.episode.value, scope.level);
            });

            scope.episodes = PushupSchedule.episodes();
            scope.levels = PushupSchedule.levels();
            scope.episode = scope.episodes[0];
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


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
        template: '<svg class="chart" />',
		link: function(scope, element, attrs){
						
			var h = element.prop("offsetHeight"),
				w = element.prop("offsetWidth");
			
			var y = d3.scale.linear()
						.domain([0, d3.max(scope.workout)])
						.range([0, h - 20]);
			var x = d3.scale.linear()
						.domain([0, scope.workout.length * 20 + 10])
						.rangeRound([0, w - 50]);
			var chart = d3.select(".chart");
			
		    var bars = chart.selectAll("rect").data(scope.workout);
			bars.enter()
				.append("rect")
				.attr("x", function(d,i){ return x(i * 20 + 10); })
				.attr("y", function(d) { return h - y(d);})
				.attr("height", y)
				.attr("width", 20);

			scope.$watch('workout', function (value) {
				bars.data(value)
					.transition()
						.duration(1000)
						.attr("height", y);
			});
			
		}
    }
}]);


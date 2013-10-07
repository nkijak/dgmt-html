angular.module("dgmt.services", [])
    .factory("PushupSchedule", function() {
        var schedule = [
            {  "EASY": [[3, 1, 1, 2, 1],[3, 1, 1, 2, 1],[3, 1, 1, 2, 1]],
                "MID": [[4, 2, 2, 3, 2],[4, 2, 2, 4, 2],[4, 3, 2, 4, 3]],
                "HARD": [[5, 3, 3, 4, 3],[5, 3, 3, 5, 3],[5, 3, 3, 5, 3]]},
            
            {  "EASY": [[4, 2, 2, 3, 2],[4, 2, 2, 4, 2],[4, 3, 2, 4, 3]],
                "MID": [[5, 3, 3, 4, 3],[5, 3, 3, 5, 3],[5, 3, 3, 5, 3]],
                "HARD": [[7, 5, 5, 6, 5],[7, 5, 5, 7, 5],[7, 5, 5, 7, 7]]},
        ];
        var currentWorkout = [0,0,0,0,0];
        return {
            currentWorkout: currentWorkout, 
            workoutFor: function(index, level) {
                var week = Math.floor(index / 3);
                var day = index % 3;
                return schedule[week][level][day];
            },
            episodes: function() { 
                var eps = [];
                for (var w = 1; w <= 2; w++) {
                   for (var d = 1; d <= 3; d++) {
                       eps.push({label:("week "+w+" day "+d), value: ((w-1)*3 + d)});
                   }
                }
                return eps;
            },
            levels: function() {
                return ["HARD", "MID", "EASY"];
            }
        }
    });

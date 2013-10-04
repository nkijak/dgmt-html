describe("Pushup Schedule", function() {
    var service;

    
    beforeEach(function() {
        angular.mock.module("dgmt.services")

        inject(function(PushupSchedule) {
            service = PushupSchedule;
        });
    });

    describe("scheduleFor", function() {
        it("should give the right schedule based on index and level (0,EASY)", function() {  
            expect(service.workoutFor(0, "EASY")).toEqual([3, 1, 1, 2, 1]);
        });
        it("should give the right schedule based on index and level (5,HARD)", function() {  
            expect(service.workoutFor(5, "HARD")).toEqual([7, 5, 5, 7, 7]);
        });
        it("should give the right schedule based on index and level (3,MID)", function() {  
            expect(service.workoutFor(3, "MID")).toEqual([5, 3, 3, 4, 3]);
        });
    });
});

describe('Countdown Filter', function() {
  var filter;
  const MILLS_IN_SEC = 1000;
  const SEC_IN_MIN = 60;
  const MIN_IN_HOUR = 60;

  beforeEach(angular.mock.module('dgmt.filters'));

  beforeEach(inject(function($filter) {
    filter = $filter('countdown');
  }));
    
  it('should handle hours, min, seconds', function() {
    var time = MILLS_IN_SEC * ( SEC_IN_MIN * ( MIN_IN_HOUR + 1) + 1);
    expect(filter(time)).toEqual("01:01:01");
  });
  
  it('should handle 10s of hours,min,secons', function() {
    var time = 20 * MILLS_IN_SEC * ( SEC_IN_MIN * ( MIN_IN_HOUR + 1) + 1);
    expect(filter(time)).toEqual("20:20:20");
  });

  it('should handle time less than 1 second', function() {
    var time = 100;
    expect(filter(time)).toEqual("00:00:00");
  });  
});

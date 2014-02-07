var module = angular.module('dgmt.filters');

const MILLS_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const MILLS_IN_HOUR = MILLS_IN_SEC * SEC_IN_MIN * MIN_IN_HOUR;

module.filter('countdown', function() {
  return function(time) {
    var hours = Math.floor(time / MILLS_IN_HOUR);
    var remainingTime = time - (hours * MILLS_IN_HOUR);

    var min = Math.floor(remainingTime/(MILLS_IN_SEC * SEC_IN_MIN));
    remainingTime -= min * MILLS_IN_SEC * SEC_IN_MIN;
  
    var seconds = Math.floor(remainingTime/MILLS_IN_SEC);
    remainingTime -= seconds * MILLS_IN_SEC;

    return [hours,min,seconds].map(function(part) {
      return (part < 10? "0":"")+part;
    }).join(":");
  }
});

dnnApp.controller('AptTimepickerController', function ($scope, $log, dateTimeService) {
  
  $scope.hstep = 1;
  $scope.mstep = 15;
  $scope.ismeridian = true;
  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.time);
  };

  $scope.getRoundedDate = function(){
    var coeff = 1000 * 60 * 15;
    var date = new Date();  //or use any other date
    return new Date(Math.round(date.getTime() / coeff) * coeff)
  }
  $scope.time = $scope.getRoundedDate();

  $scope.setTime = function() {
    dateTimeService.setDateTime($scope.time);
  }
});
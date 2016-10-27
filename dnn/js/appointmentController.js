dnnApp.controller('appointmentController', function($scope, $locale) {
  $scope.appointmentsJSON = [];

  $scope.appointment = {};
  $scope.appointment.timestamp = null;
  $scope.appointment.title = '';
  $scope.appointment.text = ''; 
  $scope.appointment.datetime; 

  $scope.now = new Date();
  $scope.date = new Date();
  $scope.time = new Date();

  // func onPageLoad()
  // {
  //   var json = getJsonfromdisk();
  //   $scope.events = JSON.parse(json);
  // }

  // func onSaveClick()
  // {
  //   var event = new Event();
  //   // update event

  //   $scope.events.add(event)
  //   var json = JSON.stringify($scope.events)
  //   savetodisk(json)
  // }

$scope.$on('$viewContentLoaded', function() {
    $scope.loadJSON();
});

$scope.loadJSON = function() {
  var json = localStorage.getItem('appointments');
    if (json !== null){
      $scope.appointmentsJSON = JSON.parse(json);
    }
}

  $scope.createAppointment = function() {
    
    $scope.appointment.timestamp = moment().unix();
    var date = moment($scope.date);
    var time = moment($scope.time);
    var datetime = date;
    datetime.hours(time.hours());
    datetime.minutes(time.minutes());
    datetime.seconds(time.seconds());
    $scope.appointment.datetime = moment(datetime).milliseconds(0).toISOString();
    var appointmentJSON = {
      timestamp: parseInt($scope.appointment.timestamp),
      title: $scope.appointment.title,
      text: $scope.appointment.text,
      date: $scope.appointment.datetime
    }
    $scope.appointmentsJSON.push(appointmentJSON);

    var json = JSON.stringify($scope.appointmentsJSON);
    $scope.resetAppointment();
    localStorage.setItem('appointments', json);
}
  
  $scope.resetAppointment = function() {
    $scope.appointment.timestamp = null;
    $scope.appointment.title = '';
    $scope.appointment.text = ''; 
    $scope.appointment.datetime = null;
    $scope.date = new Date();
    $scope.time = new Date();
  }

//   $scope.deleteAppointment = function(appointment) {
    // $scope.loadAppointment(appointment);
//     var len = $scope.appointment.length;
//       while (len--) {
//        if( $scope.appointment[len].timestamp === appointment.timestamp){
//          $scope.appointment.splice(len, 0);
//           var json = JSON.stringify($scope.appointmentsJSON);
//           localStorage.setItem('appointment', json);
//           return;
//        }
//     }
//   }

});

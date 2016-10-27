dnnApp.controller('appointmentController', function($scope) {
  $scope.appointmentsJSON = [];

  $scope.appointments = [];
  $scope.appointment = {};
  $scope.appointment.timestamp = null;
  $scope.appointment.title = '';
  $scope.appointment.text = ''; 
  $scope.appointment.datetime; 

  $scope.now = new Date();
  $scope.date = new Date();
  $scope.time = new Date();

  // $scope.$watch('appointments', function(newValue, oldValue) {
  //    console.log(newValue);
  //   console.log(oldValue);
  // });

$scope.loadJSON = function() {
  var json = localStorage.getItem('appointments');
    if (json !== null){
      $scope.appointmentsJSON = JSON.parse(json);
      $scope.loadAppointments($scope.appointmentsJSON);
    }
}

  $scope.loadAppointments = function(json) {
        var len = json.length;
        var appointments = [];
        for(var i=0; i<len; i++){
            $scope.appointment.timestamp = moment(json[i].timestamp); 
            $scope.appointment.title = json[i].title;
            $scope.appointment.text = json[i].text; 
            $scope.appointment.datetime = moment(json[i].date).milliseconds(0);
            appointments.push($scope.appointment);
        }
        // How to refresh data?
       // $scope.$apply(function(){$scope.appointments = appointments;});
      
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
//     $scope.loadAppointment(appointment);
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

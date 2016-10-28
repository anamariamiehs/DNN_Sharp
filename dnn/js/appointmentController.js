dnnApp.controller('appointmentController', ['$scope', function($scope) {
  var vm = this;

  vm.appointments = [];
  vm.appointment = {};
  vm.appointment.timestamp = null;
  vm.appointment.title = '';
  vm.appointment.text = ''; 
  vm.appointment.datetime; 
  $scope.date = new Date();
  $scope.time = new Date();

vm.loadAppointments = function() {
  var json = localStorage.getItem('appointments');
    if (json !== null){
      var data = JSON.parse(json);
      vm.appointments = data;
    }
}();

$scope.$on('$viewContentLoaded', function() {
    console.log(vm.appointments, "viewContentLoaded")
});

  vm.createAppointment = function() {
    
    vm.appointment.timestamp = moment().unix();
    var date = moment($scope.date);
    var time = moment($scope.time);
    var datetime = date;
    datetime.hours(time.hours());
    datetime.minutes(time.minutes());
    datetime.seconds(time.seconds());
    vm.appointment.datetime = moment(datetime).milliseconds(0).toISOString();
    var appointmentJSON = {
      timestamp: parseInt(vm.appointment.timestamp),
      title: vm.appointment.title,
      text: vm.appointment.text,
      date: vm.appointment.datetime
    }
    vm.appointmentsJSON.push(appointmentJSON);

    var json = JSON.stringify(vm.appointmentsJSON);
    vm.resetAppointment();
    localStorage.setItem('appointments', json);

    console.log(vm.appointments, "createAppointment")
}
  
  vm.resetAppointment = function() {
    vm.appointment.timestamp = null;
    vm.appointment.title = '';
    vm.appointment.text = ''; 
    vm.appointment.datetime = null;
    $scope.date = new Date();
    $scope.time = new Date();
  }

//   vm.deleteAppointment = function(appointment) {
//     vm.loadAppointment(appointment);
//     var len = vm.appointment.length;
//       while (len--) {
//        if( vm.appointment[len].timestamp === appointment.timestamp){
//          vm.appointment.splice(len, 0);
//           var json = JSON.stringify(vm.appointmentsJSON);
//           localStorage.setItem('appointment', json);
//           return;
//        }
//     }
//   }


}]);

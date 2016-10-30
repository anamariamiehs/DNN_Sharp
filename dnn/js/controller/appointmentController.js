dnnApp.controller('appointmentController', ['$scope', 'dateTimeService', function($scope, dateTimeService) {
  var vm = this;
  vm.appointments = [];
  vm.appointment = {};
  vm.appointment.timestamp = null;
  vm.appointment.title = '';
  vm.appointment.text = ''; 
  vm.appointment.date = null; 
  $scope.date = new Date();

vm.loadAppointments = function() {
  var json = localStorage.getItem('appointments');
    if (json == null || json == "[]"){
      vm.appointments = [];
      return;
    }
    var data = JSON.parse(json);
    vm.appointments = data;
}();

// $scope.$on('$viewContentLoaded', function() {
//     console.log(vm.appointments, "viewContentLoaded")
// });

  vm.createAppointment = function() {
    
    vm.appointment.timestamp = moment().unix();
    var date = moment($scope.date);
    var time = dateTimeService.getDateTime();
    time = moment(time);
    var datetime = date;
    datetime.hours(time.hours());
    datetime.minutes(time.minutes());
    datetime.seconds(time.seconds());
    datetime.milliseconds(0);
    var iso = moment(datetime).toISOString();
    vm.appointment.date = iso;
    console.log(vm.appointment, vm.appointments)
    vm.appointments.push({
      timestamp: vm.appointment.timestamp,
      title: vm.appointment.title,
      text: vm.appointment.text,
      date: vm.appointment.date
    });
    vm.sortAppointments();
    var json = JSON.stringify(vm.appointments);
    localStorage.setItem('appointments', json);
    vm.resetAppointment();
}
  
  vm.resetAppointment = function() {
    vm.appointment.timestamp = null;
    vm.appointment.title = '';
    vm.appointment.text = ''; 
    vm.appointment.date = null;
    $scope.date = new Date();
  }

  vm.sortAppointments = function() {
    var arr = vm.appointments;
    arr.sort(vm.compareDates);
    console.log("sorted", arr);
    vm.appointments = arr;
    }
    
    vm.compareDates = function(a, b) {
      aDate = new Date(a.date);
      bDate = new Date(b.date);
      if (aDate < bDate) return -1;
      if (aDate > bDate) return 1;
      return 0;
    }

  vm.deleteAppointment = function(i) {
    if(!vm.appointments.length) vm.loadAppointments();
    var arr = vm.appointments.splice(i, 1);
    vm.sortAppointments();
    var json = JSON.stringify(vm.appointments);
    localStorage.setItem('appointments', json);
  }
  //TODO: Move these
  vm.clamp = function(min, max, val) {
    return Math.max(min, Math.min(val, max));
  }
  
  vm.setCube = function(len) {
    var i = vm.clamp(0, 3, len-1);
    return new Array(i);
  }
}]);

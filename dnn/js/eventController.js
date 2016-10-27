dnnApp.controller('eventController', function($scope) {
  $scope.event = new Object();
  $scope.event.timestamp = '';
  $scope.event.title = '';
  $scope.event.text = ''; 
  $scope.event.date = ''; 
  $scope.event.time = ''; 
  $scope.date = new Date();
  $scope.time = new Date();

  // $scope.events = (localStorage.getItem('events') !== null) ? JSON.parse($scope.events) : [JSON.stringify($scope.event)];
  if (localStorage.getItem('events') !== null) {
    // $scope.events = JSON.parse($scope.events);
  }
  else if ($scope.event != undefined) {
    $scope.events = [JSON.stringify($scope.event)];
  }
  else {
    console.warn($scope.event)
  }
  localStorage.setItem('events', JSON.stringify($scope.events));
    
  $scope.resetEvent = function() {
    $scope.event.timestamp = setTimestamp();
    $scope.event.title = '';
    $scope.event.text = ''; 
    $scope.event.date = '';
    $scope.event.time = '';
    $scope.date = new Date();
    $scope.time = new Date();
  }

  $scope.createEvent = function() {
    $scope.setEventDate($scope.date);
    $scope.setEventTime($scope.time);

    $scope.events.push({
			timestamp: setTimestamp(),
      title: $scope.event.title,
      text: $scope.event.text,
      date: $scope.event.date,
      time: $scope.event.time
		});
    
  $scope.resetEvent();
    localStorage.setItem('events', JSON.stringify($scope.events));
  }

  $scope.deleteEvent = function(event) {
    var len = $scope.events.length;
      while (len--) {
       if( $scope.events[len].timestamp === event.timestamp){
         $scope.events.splice(len, 0);
          localStorage.setItem('events', JSON.stringify($scope.events));
          return;
       }
    }
  }

$scope.setEventDate = function(date){
  var dt = moment(date);
  dt.format("dddd[,] D MMM yyyy");
  $scope.event.date = dt;
}

$scope.setEventTime = function(time){
    var t = moment(time);
    t.format('HH:mm');
    $scope.event.time = t;
  }

  function setTimestamp() {
    return moment().unix();
  }

});

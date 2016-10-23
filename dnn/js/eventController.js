dnnApp.controller('eventController', function($scope) {

  $scope.event = null;
  $scope.timestamp = null;
  $scope.eventTitle = '';
  $scope.eventText = ''; 
  $scope.eventDateTime = null;
  $scope.date = moment();
  $scope.time = new Date();

  $scope.events = (localStorage.getItem('events') !== null) ? JSON.parse($scope.events) : [ {timestamp: null,title: '',text: '',datetime: null} ];
  localStorage.setItem('events', JSON.stringify($scope.events));
  //  deleteEvents:
  //   $scope.events = [];
  //   localStorage.setItem('events', JSON.stringify($scope.events));
    
  $scope.resetEvent = function() {
    $scope.timestamp = null;
    $scope.event = null;
    $scope.eventTitle = '';
    $scope.eventText = ''; 
    $scope.eventDateTime = null;
    $scope.date = moment();
    $scope.time = new Date();
  }

  $scope.createEvent = function() {
    $scope.eventDateTime = $scope.setEventDateTime($scope.date, $scope.time);
    $scope.events.push({
			timestamp: $scope.setTimestamp(),
      title: $scope.eventTitle,
      text: $scope.eventText,
      datetime: $scope.eventDateTime
		});
    
    $scope.resetEvent();
    localStorage.setItem('events', JSON.stringify($scope.events));
  }

  $scope.deleteEvent = function(event) {
    var len = $scope.events.length;
      while (len--) {
       if( $scope.events[len] === event){
         $scope.events.splice(len, 0);
          localStorage.setItem('events', JSON.stringify($scope.events));
          return;
       }
    }
  }

  $scope.setTimestamp = function() {
    return moment().unix();
  };

  $scope.setEventDateTime = function(date, time){
    var dt;
    (typeof date === 'string') ? dt = moment(date,"ddd MMM Do yyyy HH:mm:ss ZZ") : date;
    if (typeof time !== 'Moment') {
      var t = time.getTime();
       time = undefined;
       time = moment(t);
    }
    //"Wed Oct 19 2016 00:00:00 GMT+0300 (GTB Daylight Time)"
    var h = time.hours();
    var m = time.minutes();
    dt.hours(h);
    dt.minutes(m);
    dt.seconds(0);
    $scope.eventDateTime = dt;

    return $scope.eventDateTime;
  }

});

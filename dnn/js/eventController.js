dnnApp.controller('eventController', function($scope) {
  $scope.time = new Date();
  $scope.saved = localStorage.getItem('events');
  $scope.events = (localStorage.getItem('events') !== null) ? JSON.parse($scope.saved) : [];
  localStorage.setItem('events', JSON.stringify($scope.events));
  $scope.datetime = null;

  $scope.createEvent = function() {
    $scope.events.push({
      timestamp: $scope.setTimestamp,
      title: $scope.eventTitle,
      text: $scope.eventText
    });

    //reset the inputs after creating
    $scope.date = null;
    $scope.eventTitle = '';
    $scope.eventText = ''; 

    localStorage.setItem('events', JSON.stringify($scope.events));
    console.log($scope.events)
    
  };

  // $scope.readEvents = function() {
  //   $scope.events = localStorage.getItem('events');
  // }

  // $scope.updateEvent = function() {
  //   //TODO
  // }

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

  $scope.deleteEvents = function() {
    $scope.events = [];
    localStorage.setItem('events', JSON.stringify($scope.events));
  }

  $scope.setTimestamp = function() {
    // var now = String(Math.round(new Date().getTime()/1000.0));
    var now = moment().unix();
    console.log(now)
    return now;
  };

  $scope.getTimestamp = function(timestampString) {
    var timestamp = moment.unix(parseInt(timestampString));
    console.log( moment().timestamp.format() );
    return timestamp;
  }


  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.events, function(event) {
      count += event.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldEvents = $scope.events;
    $scope.events = [];
    angular.forEach(oldEvents, function(event) {
      if (!event.done)
        $scope.events.push(event);
    });
    localStorage.setItem('events', JSON.stringify($scope.events));
  };
});

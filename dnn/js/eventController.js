dnnApp.controller('eventController', function($scope) {
  $scope.events = $scope.readEvents;
  localStorage.setItem('events', JSON.stringify($scope.events));
  $scope.dateTime = null;
  $scope.date = moment();
  $scope.time = moment();

/*!
 * Event functions
 */
  $scope.readEvents = function() {
    (localStorage.getItem('events') !== null) ? JSON.parse($scope.events) : [];
    console.log(events)
  }

  $scope.createEvent = function() {
    $scope.events.push({
      timestamp: $scope.setTimestamp,
      title: $scope.getEventTitle,
      text: $scope.getEventText,
      dateTime: $scope.setDateTime($scope.date, $scope.time)
    });
    //reset the inputs after creating
    $scope.dateTime = null;
    $scope.eventTitle = '';
    $scope.eventText = ''; 

    localStorage.setItem('events', JSON.stringify($scope.events));
    console.log($scope.events)
    
  }
  //TODO: updateEvent
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

/*!
 * Event Data functions
 */
  $scope.setTimestamp = function() {
    return moment().unix();
  };

  $scope.getEventTitle = function() {

  }
  $scope.getEventText = function() {

  }

  $scope.setDateTime = function(date, time){
    var dateTime = moment(date);
    time = moment(time);
    dateTime.hours(time.hours())
    dateTime.minutes(time.minutes())
    dateTime.seconds(time.seconds())
    return dateTime;
  }

//https://attach2process.wordpress.com/2015/05/04/angular-js-communication-between-modules-with-rootscope-broadcast-and-on/

  $scope.getCalendarDate = function() {

  }

  $scope.getClockTime = function() {
    
  }

  // $scope.getTimestamp = function(timestampString) {
  //   var timestamp = moment.unix(parseInt(timestampString));
  //   console.log( moment().timestamp.format() );
  //   return timestamp;
  // }
});

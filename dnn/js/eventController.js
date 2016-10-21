// function eventController($scope, eventService) {
//     $scope.event = eventService;
// }

dnnApp.controller('eventController', function($scope) {
  $scope.saved = localStorage.getItem('events');
  $scope.date = Math.round(new Date().getTime()/1000);//avoid milliseconds
  $scope.events = (localStorage.getItem('events') !== null) ? JSON.parse($scope.saved) : [];
  localStorage.setItem('events', JSON.stringify($scope.events));

  $scope.addEvent = function() {
    $scope.events.push({
      timestamp: $scope.date,
      title: $scope.eventTitle,
      text: $scope.eventText
    });

    //reset the inputs after adding
    $scope.date = null;
    $scope.eventTitle = '';
    $scope.eventText = ''; 

    localStorage.setItem('events', JSON.stringify($scope.events));
    console.log($scope.events)
    
  };

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

// function eventController($scope) {

// }
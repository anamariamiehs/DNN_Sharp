// function eventController($scope, eventService) {
//     $scope.event = eventService;
// }

dnnApp.controller('eventController', function($scope, eventService) {
$scope.event = eventService;
$scope.message = 'What is going on!?';
});



// $scope.addEvent = function() {
//         $scope.events.push({
//                 timestamp: '',
//                 title: '',
//                 content: ''
//         });
//         $scope.todoText = ''; //clear the input after adding
//         localStorage.setItem('events', JSON.stringify($scope.events));
// };
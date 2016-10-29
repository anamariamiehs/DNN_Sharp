// create the controller and inject Angular's $scope
dnnApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
    // $scope.key = function($event){
    //     console.log($event.keyCode);
    //     if ($event.keyCode == 38)
    //         console.log("up arrow");
    //     else if ($event.keyCode == 39)
    //         console.log("right arrow");
    //     else if ($event.keyCode == 40)
    //         console.log("down arrow");
    //     else if ($event.keyCode == 37)
    //         console.log("left arrow");
    // }
});
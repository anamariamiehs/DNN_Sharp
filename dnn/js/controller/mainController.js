// create the controller and inject Angular's $scope
dnnApp.controller('mainController', ['$scope', 'animateCubeService', function($scope, animateCubeService) {
    $scope.keyup = function($event){
        // 38 up, 39 right, 40 down, 37 left
        if( $event.keyCode == 38 ||
            $event.keyCode == 39 ||
            $event.keyCode == 40 ||
            $event.keyCode == 37 ) animateCubeService.setKeyCode($event.keyCode);
    }
}]);
dnnApp.directive('cubenav', ['animateCubeService', function (animateCubeService) {
  this.id = "#cube";
  function moveCube(keyCode){
            // In here we have our operations on the element
            console.log("fancy seeing you here", keyCode)
    }

    return {
        link: function(scope, element){
             // Bind to the window resize event for each directive instance.
             angular.element(element).on('keyup', function(){
                  var keyCode = animateCubeService.getKeyCode();
                  moveCube(keyCode);
             });
        }
    };
}]);

// Control keyup cube behavior
// .show-front 
// .show-back  
// .show-right 
// .show-left  
// .show-top   
// .show-bottom

// if ($event.keyCode == 38){
//     animateCubeService.setKeyCode($event.keyCode);
//     console.log("up arrow")
//     }
// else if ($event.keyCode == 39){
//     animateCubeService.setKeyCode($event.keyCode);
//     console.log("right arrow");
// }
// else if ($event.keyCode == 40){
//     animateCubeService.setKeyCode($event.keyCode);
//     console.log("down arrow");
// }
// else if ($event.keyCode == 37){
//     animateCubeService.setKeyCode($event.keyCode);
//     console.log("left arrow");
// }
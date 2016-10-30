dnnApp.directive('cubenav', ['$rootScope', '$location','animateCubeService', 'Constants', function ($rootScope, $location, animateCubeService, Constants) {
//TODO: Figure out how to do the routed cube

//   function moveHorizontal(keyCode, element){
//       var dir = (keyCode == 39) ? 1: -1;
//       var index = null;
//       var className = element.classList[1];
//       animateCubeService.setClassName(className);
      
//       for(var i = 0; i < Constants.AnimateCube.length; i++){
//           if (Constants.AnimateCube[i] == className){
//               index = i;
//               break;
//           }
//       }
//     var c = clampLoop(1, 4, (index+dir));
//     element.classList.remove(className);
//     element.classList.add(Constants.AnimateCube[c]);

//   }

//   function moveCube(keyCode, element){
//         // In here we have our operations on the element
//         console.log("fancy seeing you here", keyCode);
//         //   console.log(Constants.AnimateCube[1])
//             var current = element[0].querySelector("#cube");
//             if(current.classList.length < 1) return;

//             var currentShow = current.classList[1];
//             //front right back left facets
//             var isHorizontal = (currentShow === Constants.AnimateCube[0] ||
//                                 currentShow === Constants.AnimateCube[1] ||
//                                 currentShow === Constants.AnimateCube[2] ||
//                                 currentShow === Constants.AnimateCube[3]);
//             //top bottom facets
//             var isVertical =   (currentShow === Constants.AnimateCube[4] ||
//                                 currentShow === Constants.AnimateCube[5]);
//             //left right
//             if (keyCode == 37 || keyCode == 39){
//                 if(isHorizontal){
//                     //moveHorizontal(keyCode, current);
//                 }
//             }
//             //top bottom
//             if (keyCode == 38 || keyCode == 40){

//             }                

// }

// function clamp(min, max, val){
//     return Math.max(min, Math.min(val, max));
// }

function clampLoop(min, max, val){
    if (val > max) return min;
    if (val < min) return max;
    return val;
}

    return {
        link: function(scope, element){
            element.on('load', function(){
                console.log('load: ' + $location.path());
                // var className = animateCubeService.getClassName();
                // var current = element[0].querySelector("#cube");
                // current.className = "cube " + className;
            });
             // Bind to the window resize event for each directive instance.
             angular.element(element).on('keyup', function(){
                var route = animateCubeService.getRoute();
                var prevRoute = animateCubeService.getPrevRoute();
                var keyCode = animateCubeService.getKeyCode();
                if(route == Constants.Routes[1]) {
                    // Route '/add' 
                    if (keyCode == 37 || keyCode == 39){
                    //left right
                    element.className = "cube " + Constants.AnimateCube[4];
                    }
                    if (keyCode == 38 || keyCode == 40){
                     //top bottom
                    element.className = "cube " + Constants.AnimateCube[0];
                    }   
                } else if(route == Constants.Routes[2]){
                    // Route '/about'
                    if (keyCode == 37 || keyCode == 39 || keyCode == 38 || keyCode == 40){
                        element.className = "cube " + Constants.AnimateCube[0];
                    }
    
                } else {
                    // Route '/' the 4 events
                    if (keyCode == 37 || keyCode == 39){
                    //left right
                        //TODO: Move laterally through events
                        //TODO: get cube event position between 0-4
                        var pos = 2;
                        var loop = clampLoop(0, 4, pos);
                        element.className = "cube " + Constants.AnimateCube[loop];
                    }
                    if (keyCode == 38){
                       //top go to Add route
                        element.className = "cube " + Constants.AnimateCube[4];
                    } if (keyCode == 40){
                     // bottom go to About route
                        element.className = "cube " + Constants.AnimateCube[5];
                    }
                    
                }
                
                //   moveCube(keyCode, element);
             });
             $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
                console.log('routechange: ' + $location.path());
                animateCubeService.setRoute($location.path());
            });

        }
    };
}]);


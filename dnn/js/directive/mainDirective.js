// dnnApp.directive('cubenav', ['animateCubeService', 'Constants', function (animateCubeService, Constants) {

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
//                     moveHorizontal(keyCode, current);
//                 }
//             }
//             //top bottom
//             if (keyCode == 38 || keyCode == 40){

//             }                

// }

// // function clamp(min, max, val){
// //     return Math.max(min, Math.min(val, max));
// // }

// function clampLoop(min, max, val){
//     if (val > max) return min;
//     if (val < min) return max;
//     return val;
// }

//     return {
//         link: function(scope, element){
//             element.on('load', function(){
//                 // var className = animateCubeService.getClassName();
//                 // var current = element[0].querySelector("#cube");
//                 // current.className = "cube " + className;
//             });
//              // Bind to the window resize event for each directive instance.
//              angular.element(element).on('keyup', function(){
//                 //   var keyCode = animateCubeService.getKeyCode();
//                 //   moveCube(keyCode, element);
//              });
//         }
//     };
// }]);

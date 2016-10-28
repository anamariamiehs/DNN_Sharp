// app.directive('cube', function() {
//   return {
//     restrict: 'AE',
//     replace: true,
//     template: '<section class="cube-container"><div id="cube" class="cube"><figure class="front">{{model1}}</figure><figure class="back">{{model2}}</figure><figure class="right">{{model3}}</figure><figure class="left">{{model4}}</figure><figure class="top">{{model5}}</figure><figure class="bottom">{{model6}}</figure></div></section>',
//     link: function(scope, elem, attrs) {
//       elem.bind('click', function() {
//         elem.css('background-color', 'white');
//         scope.$apply(function() {
//           scope.color = "white";
//         });
//       });
//       elem.bind('keypress', function() {
//         elem.css('cursor', 'pointer');
//       });
//     }
//   };
// });
angular.module('motion.service', [])

    .factory('MotionService', function($state, $timeout, $cordovaDeviceMotion) {
// Might use a resource here that returns a JSON array

      return {
        init : function(seconds){
          var start = performance.now();
          var firstIteration = true;

          document.addEventListener("deviceready", function () {

            $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {

            }, function(err) {
              // An error occurred. Show a message to the user
            });

            var options = { frequency: 2000 };

            var watch = $cordovaDeviceMotion.watchAcceleration(options);
            watch.then(
              null,
              function(error) {
                // An error occurred
              },
              function(result) {
                var X = result.x;
                var Y = result.y;
                var Z = result.z;
                var timeStamp = result.timestamp;

                var currTime = performance.now();
                if ((currTime - start > 1000 * seconds) && (firstIteration)) {
                  $state.go('tab.fast');
                  firstIteration = false;
                }
              });

          }, false);
        }
      };
  });

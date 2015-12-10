angular.module('motion.service', [])

    .factory('MotionService', function($state, $cordovaDeviceMotion) {
// Might use a resource here that returns a JSON array
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

          $state.go('/ta1b/dash');
        });

    }, false);
  });

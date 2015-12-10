angular.module('starter.controllers', ['profile.service'])

.controller('DashCtrl', function($scope, $cordovaDeviceMotion) {

  $scope.test = 0;

  document.addEventListener("deviceready", function () {

    $scope.test = 1;

    $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
      $scope.accelerationResult = result;
      $scope.test = 2;
    }, function(err) {
      $scope.test = 'err';
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

        $scope.test = Math.random() + " " + result;

      });

  }, false);
 })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, ProfileService) {
  $scope.saveProfile = function(){
    ProfileService.saveProfile($scope.profile);
  }
});

angular.module('starter.controllers', ['profile.service'])

.controller('DashCtrl', function($scope) {

  })

.controller('FastCtrl', function($scope, ProfileService) {
    $scope.sentence = 'Destroker is one hell of an app';

    $scope.send = function(){
      if ($scope.answer && $scope.sentence === $scope.answer)
      {

      }
      else
      {
        document.location.href = 'tel:' + ProfileService.getProfile().emergencyNumber;
      }
    }

  })

.controller('CountdownCtrl', function($scope,$state,$timeout) {

  $timeout(function () {
    $state.go('tab.fast');
  }, 1000 * 10);

  //$scope.countdown = 10;s
  //$timeout(function () {
  //
  //
  //
  //}, 1000);
  //$scope.countdown = 9;
  //
  //$scope.countdownPickerObject = {
  //  useSeconds: false,
  //  value: $scope.countdown,
  //  callback: function (val) {
  //    countdownPickerCallback(val);
  //  }
  //};
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

.controller('SignupCtrl', function($scope, $stateParams) {

})

.controller('AccountCtrl', function($scope, ProfileService, MotionService) {


    $scope.profile = ProfileService.getProfile();
    MotionService.init(10);
});

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("mainCtrl", function($scope,mainServ){

  $scope.logs = ["I explored the Andes. So much fun!", "I snorkeled in Punta Cana. I saw so many colorful fish", "I drove the coast of California on Route 1", "I went to Olympus National Park"];

  // $scope.getLogs = function() {
  //   mainServ.getLogs()
  //   .then(function(response){
  //     $scope.logs = response;
  //   });
  // };
  // $scope.getLogs();

  $scope.addLog = function (log) {
    $scope.logs.push(log);
    $scope.myLog = "";
    // mainServ.addLog(log)
    // .then(function(response){
    //   mainServ.getLogs()
    //   .then(function(response){
    //     $scope.logs = response;
    //   });
    // });
  };

})
.service("mainServ",function($http){

  this.getLogs = function(){
    return $http({
      method: "GET",
      url: '/logs'
    }).then(function(response){
      return response.data;
    });
  };
  this.addLog = function(){
    return $http({
      method: "POST",
      url: '/logs'
    }).then(function(response){
      return response.data;
    });
  };
});

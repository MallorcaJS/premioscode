'strict'

angular.module('app.controllers')
.controller('MapController', 
  ['$scope', '$stateParams', '$ionicLoading',  
  function ($scope, $stateParams, $ionicLoading) {
  
  var id = $stateParams.weddingId;

  $scope.info_position = {
    lat: 39.56754,
    lng: 2.64820
  };

  $scope.center_position = {
    lat: 39.56754,
    lng: 2.64820
  };

  $scope.my_location = "";

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

  $scope.centerOnMe= function(){
    $scope.positions = [];

    $ionicLoading.show({
      template: 'Loading...'
    });

    // with this function you can get the user’s current position
    // we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.current_position = {lat: pos.k,lng: pos.D};
      $scope.my_location = pos.k+", "+pos.D;
      $scope.map.setCenter(pos);
      $ionicLoading.hide();
    });
  };


}]);
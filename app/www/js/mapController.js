//https://www.google.es/search?q=Angularjs-Google-Maps+marker+info&oq=Angularjs-Google-Maps+marker+info&aqs=chrome..69i57.4685j0j7&sourceid=chrome&es_sm=119&ie=UTF-8
//http://jsfiddle.net/pc7Uu/854/
'strict'

angular.module('app.controllers')
.controller('MapController', 
  ['$scope', '$stateParams', '$ionicLoading',  
  function ($scope, $stateParams, $ionicLoading) {

  var id = $stateParams.weddingId;
  var hotspots = [
    {
        type: 'ceremony',
        lat: 39.56754,
        long: 2.64820,
        title: 'Title',
        name: 'La iglesia (La Seu)',
        desc: 'La ceremonia tendra lugar a las 10h del sabado',
    },
    {
        type: 'lunch',
        lat: 39.571453,
        long: 2.648965,
        title: 'Title',
        name: 'Chringuito Alaska',
        desc: 'Hamburguesas en el Alaska',
    },
    {
        type: 'party',
        lat: 39.570944,
        long: 2.650869,
        title: 'Title',
        name: 'Bar España',
        desc: 'Bailoteo del bueno',
    },


  ];


/*
  $scope.info_position = {
    lat: 39.56754,
    lng: 2.64820
  };
*/
  $scope.center_position = {
    lat: 39.56754,
    lng: 2.64820
  };


  $scope.my_location = "";

  //

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



  //// DIEGO
  var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(39.569608, 2.649903),
        //mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){

        var ceremonyIcon = new google.maps.MarkerImage("ico/ceremony.svg", null, null, null, new google.maps.Size(40,40));
        var lunchIcon = new google.maps.MarkerImage("ico/lunch.svg", null, null, null, new google.maps.Size(40,40));
        var partyIcon = new google.maps.MarkerImage("ico/party.svg", null, null, null, new google.maps.Size(40,40));

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

        switch(info.type){
          case 'ceremony': icon = ceremonyIcon; break;
          case 'lunch': icon = lunchIcon; break;
          case 'party': icon = partyIcon; break;
        }
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.name,
            //icon: iconBase + 'schools_maps.png'
            icon: icon
        });

        marker.content = '<div class="infoWindowContent abcd">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
            $scope.center_position = marker.position;
            $scope.map.setCenter($scope.center_position);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < hotspots.length; i++){
        createMarker(hotspots[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }


}]);
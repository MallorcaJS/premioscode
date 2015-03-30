angular.module('app.controllers', [])

//Login controller
.controller('LoginCtrl', function($scope, $state, $http, $ionicPlatform, $cordovaFacebook) {

   $ionicPlatform.ready(function() {

     $cordovaFacebook.getLoginStatus().then(function(response){
      if (response.status === 'connected') {
         alert('Connected');
         $state.go('app.detail');
     };
 }, function (error){
     console.log(error);    
 });

     $scope.facebookLogin1 = function() {
       alert('FB LOgin1!');


       $cordovaFacebook.login(["public_profile"])
       .then(function(success) {
         alert('FB LOgin2!');
         var user = success;
           // console.log(user.email);
           alert("authResponse: "+user.authResponse);
           alert("authResponse.accessToken: "+user.authResponse.accessToken);
           alert("authResponse.userID "+user.authResponse.userID);
           
           apiFb(user);


       }, function (error) {
           console.log("Error!!!!");
       });

       var apiFb = function (user){
           alert('$cordovaFacebook.api');
           $cordovaFacebook.api("me",["public_profile"])
           .then(function(success){
             alert("Result: " + success);
             alert("Name: " + success.name);
             alert("Id: " + success.id);

         },function(error){
             alert('Error!');
         });
       };

   };
});


})

//Profile controller (ejemplo)
.controller("ProfileCtrl", function($scope, $http, $window, $location) {

    $scope.init = function() {
        if($window.localStorage.hasOwnProperty["accessToken"] === true) {
            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $window.localStorage.accessToken, fields: "id,name,gender,location,website,picture,relationship_status", format: "json" }}).then(function(result) {
                $scope.profileData = result.data;
            }, function(error) {
                alert("There was a problem getting your profile.  Check the logs for details.");
                console.log(error);
            });
        } else {
            alert("Not signed in");
            $location.path("/login");
        }
    };

});
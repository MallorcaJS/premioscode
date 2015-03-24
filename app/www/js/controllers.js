angular.module('app.controllers', [])

//Login controller
.controller('LoginCtrl', function($scope, $cordovaOauth, $window, $location){

	//Login de Facebook
	$scope.facebookLogin = function() {
        $cordovaOauth.facebook("889540234418654", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
            $window.localStorage['accessToken'] = result.access_token;
            $location.path("/profile");
        }, function(error) {
            alert("There was a problem signing in!  See the console for logs");
            console.log(error);
        });

    }
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
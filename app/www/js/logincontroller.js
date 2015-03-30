angular.module('logincontroller', ['LoginService'])
//Profile controller (ejemplo)
.controller("loginCtrl", function($scope, $http, $window, $location) {
	//LoginService.getLogin
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

    $scope.second

});
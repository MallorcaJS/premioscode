angular.module('app.controllers').controller('loginController', ['$scope','loginService', function ($scope, loginService) {

	openFB.init({appId: '889540234418654'});

	$scope.sayhi = function(){
		openFB.login(
		function(response) {
			if(response.status === 'connected') {
				alert('Facebook login succeeded, got access token: ' + response.authResponse.token);
			} else {
				alert('Facebook login failed: ' + response.error);
			}
		}, {scope: 'email,read_stream,publish_stream'});
	}

}]);
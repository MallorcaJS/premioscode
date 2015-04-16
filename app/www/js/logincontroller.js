/*
angular.module('app.controllers').controller('loginController', ['$scope','loginService', function ($scope, loginService) {
    
    $scope.sayhi = function(){
        console.log(loginService.getLogin());
    }

}]);
*/

angular.module('app.controllers').controller("loginController", ['$scope','$state','loginService',

	function($scope,$state,loginService) {
	
		$scope.sayhi = function(){
	        console.log(loginService.getLogin());
	        $state.go("layout.photos");
	    }

	}

]);
'use strict';

angular.module('app.controllers')
.controller('LoginController', 
	['$scope','$state', 'LoginService',
	function($scope, $state, LoginService) {
	
		$scope.login = function() {
	        //console.log(LoginService.getLogin());
	        $state.go('weddings'); // TODO (remove on prod)
	    };
}]);
angular.module('app.controllers').controller('attendeesController', ['$scope', 'bbddServices', function ($scope, bbddServices) {
    
	var boda = bbddServices.query({bodaId: "a"});
	boda.$promise.then(function(boda){
   		$scope.attendees = boda.attendees;
	})
	

}]);
'use strict';

angular.module('app.controllers')
.controller('AttendeesController', 
	['$scope', '$stateParams', 'AttendeeService', 
	function ($scope, $stateParams, AttendeeService) {
   
   var id = $stateParams.weddingId;
   var attendees = [];

   AttendeeService.getAll( function(results) {
   	 $scope.attendees = results;
   });

}])
.controller('AttendeeDetailController', 
	['$scope', '$stateParams', 'AttendeeService', 
	function($scope, $stateParams, AttendeeService) {
  console.log($stateParams);
  AttendeeService.get($stateParams.attendeeId, function(result) {
  	$scope.attendee = result;
  });
}]);
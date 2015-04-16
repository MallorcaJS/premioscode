'use strict';

angular.module('app.controllers')
.controller('AttendeesController', 
	['$scope', '$stateParams', 'AttendeeService', 
	function ($scope, $stateParams, AttendeeService) {
   
   var id = $stateParams.weddingId;
   
   $scope.attendees = AttendeeService.getList();

}]);
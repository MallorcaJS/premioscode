'use strict';

angular.module('app.controllers')
.controller('LayoutController', 
  ['$scope', 'WeddingService', 
  	function ($scope, WeddingService) {    
    
	    $scope.$on('wedding:updated', function(event, data) {
	       WeddingService.getCurrentId(function (currentId) {
	          $scope.weddingId = currentId;
	       });
	    });  
	}
]);
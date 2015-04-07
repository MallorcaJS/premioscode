angular.module('app.controllers')
.controller("photosController", ['$scope','photosService', function($scope,photosService) {

	$scope.list = photosService.getList();

}]);
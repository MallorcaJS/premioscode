angular.module('app.controllers')
.controller("menuController", ['$scope','menuService', function($scope,menuService) {

	$scope.menuList = menuService.getList();

}]);

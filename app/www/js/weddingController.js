angular.module('app.controllers').controller('weddingController', ['$scope', 'weddingService', function ($scope, weddingService) {
    
    $scope.wedding = weddingService.getWedding();

}]);
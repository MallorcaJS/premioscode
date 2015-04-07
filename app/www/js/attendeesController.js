angular.module('app.controllers').controller('attendeesController', ['$scope', 'attendeesService', function ($scope, attendeesService) {
    
    $scope.name1 = "name1";

    $scope.attendees = attendeesService.getList();

}]);
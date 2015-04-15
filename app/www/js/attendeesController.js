angular.module('app.controllers').controller('attendeesController', ['$scope', 'attendeesService', function ($scope, attendeesService) {
    
   // $scope.shouldShowDelete = false;
   // $scope.shouldShowReorder = false;
   // $scope.listCanSwipe = true;

   $scope.attendees = attendeesService.getList();
   

}]);
angular.module('app.controllers').controller('attendeesController', ['$scope', 'bbddServices', function ($scope, bbddServices) {
    
   // $scope.shouldShowDelete = false;
   // $scope.shouldShowReorder = false;
   // $scope.listCanSwipe = true;

   $scope.attendees = attendeesService.getList();
   

}]);
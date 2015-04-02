angular.module('app.controllers').controller('commentsController', ['$scope', 'commentsService', function ($scope, commentsService) {
    
   $scope.shouldShowDelete = false;
   $scope.shouldShowReorder = false;
   $scope.listCanSwipe = true;
   
    $scope.sayhi = function(){
        alert('super comments');
    }

    $scope.comments = commentsService.getList();

}]);
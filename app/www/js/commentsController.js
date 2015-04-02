angular.module('app.controllers').controller('commentsController', ['$scope', function ($scope) {
    
   $scope.shouldShowDelete = false;
   $scope.shouldShowReorder = false;
   $scope.listCanSwipe = true
   
    $scope.sayhi = function(){
        alert('super comments');
    }

}]);
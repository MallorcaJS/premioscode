angular.module('app.controllers').controller('commentsController', ['$scope', 'commentsService', function ($scope, commentsService) {
    
   // $scope.shouldShowDelete = false;
   // $scope.shouldShowReorder = false;
   // $scope.listCanSwipe = true;
   
    $scope.comments = commentsService.getList();

    $scope.addCommentHandler = function(){
      comment= document.querySelector('#commentText').value
      document.querySelector('#commentText').value = ''
      return commentsService.addComment(comment);
    }

}]);
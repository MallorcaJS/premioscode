'use strict';

angular.module('app.controllers')
.controller('CommentsController', 
	['$scope', '$stateParams', 'CommentService', 
	function ($scope, $stateParams, CommentService) {
    
   // $scope.shouldShowDelete = false;
   // $scope.shouldShowReorder = false;
   // $scope.listCanSwipe = true;
   var id = $stateParams.weddingId;

   $scope.comments = CommentService.getList();

    $scope.addCommentHandler = function(){
      comment= document.querySelector('#commentText').value
      document.querySelector('#commentText').value = ''
      return CommentService.addComment(comment);
    }

}]);
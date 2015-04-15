angular.module('app.controllers').controller('attController', ['$scope', 'attService', function ($scope, attService) {
    
   // $scope.shouldShowDelete = false;
   // $scope.shouldShowReorder = false;
   // $scope.listCanSwipe = true;
   
    $scope.sayhi = function(){
        alert('super comments');
    }

    $scope.comments = attendeesService.getList();

    $scope.addCommentHandler = function(){
      comment= document.querySelector('#commentText').value
      return commentsService.addComment(comment);
    }

}]);
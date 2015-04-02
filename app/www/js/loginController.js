angular.module('app.controllers').controller('loginController', ['$scope','loginService', function ($scope, loginService) {
    
    $scope.sayhi = function(){
        console.log(loginService.getLogin());
    }

}]);
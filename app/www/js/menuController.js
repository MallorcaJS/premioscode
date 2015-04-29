'strict'

angular.module('app.controllers')
.controller("MenuController", 
  ['$scope', '$stateParams', '$ionicModal','MenuService', 
  function($scope, $stateParams, $ionicModal, MenuService) {
  
    $scope.menus = [];
    console.log("hola");
    MenuService.getMenus(function(results) {
    	console.log("enter menus");
        $scope.menus = results;
    });


	// /* Copy paste http://ionicframework.com/docs/api/service/$ionicModal/ */
	// $ionicModal.fromTemplateUrl('menuEdit.html', {
 //    scope: $scope,
 //    animation: 'slide-in-up'
 //  }).then(function(modal) {
 //    $scope.modal = modal;
 //  });
 //  $scope.openModal = function() {
 //    $scope.modal.show();
 //  };
 //  $scope.closeModal = function() {
 //    $scope.modal.hide();
 //  };
 //  //Cleanup the modal when we're done with it!
 //  $scope.$on('$destroy', function() {
 //    $scope.modal.remove();
 //  });
 //  // Execute action on hide modal
 //  $scope.$on('modal.hidden', function() {
 //    // Execute action
 //  });
 //  // Execute action on remove modal
 //  $scope.$on('modal.removed', function() {
 //    // Execute action
 //  });

	// /* Fin copy&paste */

	// $scope.edit = function(option){
	// 	$scope.openModal();

	// 	console.log(option);
	// 	$scope.option = option;
	// }

}]);

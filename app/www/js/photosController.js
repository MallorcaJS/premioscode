angular.module('app.controllers',['ionic']).controller("photosController", ['$scope','$ionicModal','$ionicSlideBoxDelegate','photosService',

	function($scope,$ionicModal,$ionicSlideBoxDelegate, photosService) {
	
		$scope.list = photosService.getList();

		/*
		$ionicModal.fromTemplateUrl('image-modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});
		*/

		$scope.openModal = function() {
	      $scope.modal.show();
	      $ionicSlideBoxDelegate.update();
	    };

	    $scope.closeModal = function() {
	      $scope.modal.hide();
	    };

	    //Cleanup the modal when we're done with it!
	    $scope.$on('$destroy', function() {
	      $scope.modal.remove();
	    });
	    // Execute action on hide modal
	    $scope.$on('modal.hide', function() {
	      // Execute action
	    });
	    // Execute action on remove modal
	    $scope.$on('modal.removed', function() {
	      // Execute action
	    });
	    $scope.$on('modal.shown', function() {
	      console.log('Modal is shown!' + this);
	    });

	    $scope.showImages = function(index) {
			updatePhotoInfo(index);
			$scope.showModal('templates/photos-popover.html');
		}
	 
		$scope.showModal = function(templateUrl) {
			$ionicModal.fromTemplateUrl(templateUrl, {
				scope: $scope,
				animation: 'fade-in'

			}).then(function(modal) {
				$scope.modal = modal;
				$scope.modal.show();
			});
		}
	 
		// Close the modal
		$scope.closeModal = function() {
			$scope.modal.hide();
			$scope.modal.remove()
		};

		$scope.slideChanged = function(index) {
			updatePhotoInfo(index);
			//jQuery("#likes number").html($scope.likes)
			console.log('PHOTO [' + index + "]: from: " + $scope.user + " - " + $scope.likes + " likes");
		};

		$scope.shown = "false"

		$scope.likeImage = function(index){

			console.log("likeImagelikeImage")
			
			if ($scope.liked == 'false'){
				console.log("Debería LIKEAR la " + index)
				console.log("LIKE - OK");
				
				$scope.liked = 'true'

				$scope.shown = "true"
				$scope.likes++
				photosService.getList()[index].likes = $scope.likes

			} else {
				console.log("Debería DESLIKEAR la " + index)
				$scope.liked = 'false'
				$scope.shown = 'false'
				$scope.likes--
				photosService.getList()[index].likes = $scope.likes
			}

		};

		function updatePhotoInfo(index){
			//$scope.shown = ""
			$scope.shown = "false"
			$scope.activeSlide = index;
			$scope.likes = photosService.getList()[index].likes
			$scope.user = photosService.getList()[index].user
			$scope.liked = photosService.getList()[index].liked
			/*
			if (photosService.getList()[index].liked == "true"){
				$scope.liked = "ion-android-favorite";
			} else {
				$scope.liked = "ion-android-favorite-outline";
			}
			*/
		}

	}

]);
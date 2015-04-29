'use strict';

angular.module('app.controllers')
.controller('WeddingsController', 
	['$scope', 
    '$cordovaCamera',
    '$ionicModal', 
    '$ionicPopup',
    '$ionicActionSheet',
    'WeddingService', 
    function ($scope,
        $cordovaCamera,
        $ionicModal,
        $ionicPopup, 
        $ionicActionSheet,
        WeddingService) {    
        
        $scope.addWeddingData = {};
        $scope.weddings = [];
        var i = 2;

        $scope.init = function() {
            // fetch weddings from service            
            WeddingService.getAll(function(results) {
              $scope.weddings = results;
            });
        };

        // add modal
        $ionicModal.fromTemplateUrl('app/weddings/weddingAdd.html', {
            scope: $scope
        }).then(function(resultModal) {
            $scope.weddingAddModal = resultModal;
        });

        $scope.closeAddWeddingModal = function() {
            $scope.weddingAddModal.hide();
        };

        $scope.showAddWeddingModal = function() {
            $scope.weddingAddModal.show();
            i = i + 1;
            $scope.addWeddingData.id = i;
        };

        $scope.takePicture = function() {
            $ionicActionSheet.show({
              buttons: [{
                text: 'Camera'
              },
              {
                text: 'Library'
              }],
              // titleText: 'Take a...',
              cancelText: 'Cancel',
              buttonClicked: function(index) {
                ionic.Platform.isWebView() ? takeARealPicture(index) : takeAFakePicture();
                return true;
              }
            });

            function takeARealPicture(cameraIndex) {
              var options = {
                quality: 50,
                sourceType: cameraIndex === 2 ? 2 : 1,
                cameraDirection: cameraIndex,
                destinationType: Camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 500,
                targetHeight: 600,
                saveToPhotoAlbum: false
              };
              $cordovaCamera.getPicture(options).then(function(imageData) {
                var photo = "data:image/jpeg;base64," + imageData;
                addWeddingPicture(photo);
              }, function(err) {
                // error
                console.error(err);
                takeAFakePicture();
              });
            }

            function takeAFakePicture() {
               addWeddingPicture($cordovaCamera.getPlaceholder());
            } 
        };

        function addWeddingPicture(photo) {
                //$scope.addWeddingData.imgUrl = photo;
        }

        $scope.submitAddWedding = function() {
            console.log('Doing Add', $scope.addWeddingData);

            $scope.closeAddWeddingModal();
            $scope.addWeddingItem($scope.addWeddingData);
            $scope.addWeddingData = {};
        };

        $scope.addWeddingItem = function(weddingToAdd) {
            $scope.weddings.push(weddingToAdd);
        };

        // $scope.$on('$ionicView.beforeEnter', function(){
        //     console.log('BEFORE ENTER');
        //     $scope.init();
        // });
    }
])
.controller('WeddingDetailController', 
	['$scope', '$stateParams', 'WeddingService', 
    function ($scope, $stateParams, WeddingService) {   

        var id = $stateParams.weddingId;
        $scope.weddingId = id;

        WeddingService.get(id, function(result) {
          $scope.wedding = result;
        });
    }
]);
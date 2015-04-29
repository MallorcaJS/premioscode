'use strict';

angular.module('app.controllers')
.controller('WeddingsController', 
	['$scope', 'WeddingService', 
    function ($scope, WeddingService) {    
    
        $scope.weddings = [];
        // fetch weddings from service
        WeddingService.getWeddings(function(results) {
          $scope.weddings = results;
        });
    }
])
.controller('WeddingDetailController', 
	['$scope', '$stateParams', 'WeddingService', 
    function ($scope, $stateParams, WeddingService) {   

        var id = $stateParams.weddingId;
        $scope.weddingId = id;

        WeddingService.getWedding(id, function(result) {
          $scope.name = result.name;
        });
    }
]);
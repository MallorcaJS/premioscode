'use strict';

angular.module('app.services')
.factory('WeddingService', ['$rootScope', '$http', function ($rootScope, $http) {
  var weddings = [
        {
          "id": "0",
          "name": "Jorge & Miriam",
          "imgUrl": "http://api.randomuser.me/portraits/thumb/men/1.jpg",
          "description" : "Pablo and Miriam wedding",
          "date": new Date()
        },
        {
          "id": "1",
          "name": "Kevin & Love",
          "imgUrl": "http://api.randomuser.me/portraits/thumb/men/1.jpg",
          "description" : "Xisco and Miriam wedding",
          "date": new Date()
        },
        {
          "id": "2",
          "name": "Jordi & Johana",
          "imgUrl": "http://api.randomuser.me/portraits/thumb/men/1.jpg",
          "description" : "Jorge and Miriam wedding",
          "date": new Date()
        }
  ];
  var currentId;
  return {
    getWeddings: function(callback) {
      callback(weddings);
    },
    getWedding: function(id, callback) {
      currentId = id;
      $rootScope.$broadcast('wedding:updated', currentId);
      var index = parseInt(currentId);
      callback(weddings[index]);
    },
    getCurrentId: function(callback) {
      callback(currentId);
    }
  }

}]);
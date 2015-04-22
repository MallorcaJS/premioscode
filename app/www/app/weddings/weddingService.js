'use strict';

angular.module('app.services')
.factory('WeddingService', ['$rootScope', '$http', function ($rootScope, $http) {
  var weddings = [
        {
          "id": 0,
          "firstName": "Jorge",
          "secondName": "Miriam",
          "imgUrl": "http://api.randomuser.me/portraits/thumb/men/1.jpg",
          "date": new Date(2015, 1, 20),
          "description": "Dear friends and family."
        },
        {
          "id": 1,
          "firstName": "Kevin",
          "secondName": "Love",
          "imgUrl": "http://api.randomuser.me/portraits/thumb/men/1.jpg",
          "date": new Date(2015, 2, 20),
          "description": "Dear friends and family. Vamos a darle candela"
        }
  ];
  var currentId;
  return {
    findAll: function(callback) {
      callback(weddings);
    },
    findById: function(id, callback) {
      currentId = id;
      $rootScope.$broadcast('wedding:updated', currentId);
      // var index = parseInt(currentId);
      var index = currentId;
      callback(weddings[index]);
    },
    getCurrentId: function(callback) {
      callback(currentId);
    },
    add: function(wedding) {
      weddings.push(wedding);
    }
  }

}]);
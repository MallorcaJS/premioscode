'use strict';

angular.module('app.services')
.factory('TaskService', ['$http', function ($http) {
 
  var tasks = [
        {
          "id": 0,
          "name": "Research photographs",
          "type": "Photographer",
          "date": new Date(2015, 2, 20),
          "isCompleted": false
        },
        {
          "id": 1,
          "name": "Research djs",
          "type": "Djs",
          "date": new Date(2015, 2, 20),
          "isCompleted": true
        },
        {
          "id": 2,
          "name": "Research music band",
          "type": "Music",
          "date": new Date(2015, 2, 20),
          "isCompleted": false
        },
        {
          "id": 3,
          "name": "Research catering",
          "type": "Catering",
          "date": new Date(2015, 3, 15),
          "isCompleted": false
        }
      ];
  return {
    findAll: function(weddingId, callback){
      callback(tasks);
    },
    findById: function(id, callback) {
      return callback(tasks[id]);
    }
  }
}]);

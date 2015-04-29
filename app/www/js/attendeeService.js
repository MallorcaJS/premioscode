'use strict';
  // return {
  //   getList: function(){
  //     return [
  //       {
  //         "fbId": "",
  //         "email": "@kevin",
  //         "name": "Kevin O'Hagan",          
  //         "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/5.jpg",
  //         "created_at": new Date(),
  //         "token": "0",
  //       },
  //       {
  //         "fbId": "",
  //         "email": "@xisco",
  //         "name": "Xisco Llado",
  //         "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/6.jpg",
  //         "created_at": new Date(),
  //         "token": "1",
  //       }
  //     ]
  //   }

angular.module('app.services')
.factory('AttendeeService', ['$resource', function ($resource) {
  // return $resource("https://bodappserver.herokuapp.com/api/bodas/:bodaId", null,
  //   {
  //     'query':   { method: 'GET', isArray: false },
  //     'get':    { method: 'GET', isArray: false},
  //     'save':  { method: 'POST' },
  //     'update':  { method: 'PUT' },
  //     'remove': { method: 'DELETE' }
  //   }
  //);
  var attendees = [
        {
          "id": 0,
          "fbId": "",
          "email": "@kevin",
          "name": "Kevin O'Hagan",          
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/5.jpg",
          "created_at": new Date(),
          "token": "0",
        },
        {
          "id": 1,
          "fbId": "",
          "email": "@xisco",
          "name": "Xisco Llado",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/6.jpg",
          "created_at": new Date(),
          "token": "1",
        }
      ];
  return {
    getAll: function(callback){
      callback(attendees);
    },
    get: function(id, callback) {
      return callback(attendees[id]);
    }
  }
}]);

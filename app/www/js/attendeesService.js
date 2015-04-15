angular.module('app.services').factory('attendeesService', ['$http', function ($http) {

  return {
    getList: function(){
      return [
        {
          "fbId": "",
          "email": "@kevin",
          "name": "Kevin O'Hagan",          
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/5.jpg",
          "created_at": new Date(),
          "token": "0",
        },
        {
          "fbId": "",
          "email": "@xisco",
          "name": "Xisco Llado",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/6.jpg",
          "created_at": new Date(),
          "token": "1",
        }
      ]
    }
  }

}]);


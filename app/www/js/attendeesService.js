angular.module('app.services').factory('attendeesService', ['$http', function ($http) {


  attendees = [
        {
          "fbId": "",
          "email": "@kevin",
          "name": "Kevin O'Hagan",          
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/5.jpg",
          "created_at": new Date(),
          "token": "0"
        },
        {
          "fbId": "",
          "email": "@xisco",
          "name": "Xisco Llado",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/6.jpg",
          "created_at": new Date(),
          "token": "1"
        },
        {
          "fbId": "",
          "email": "@diego",
          "name": "Diego Carrask",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/7.jpg",
          "created_at": new Date(),
          "token": "2"
        },
        {
          "fbId": "",
          "email": "@jordi",
          "name": "Jordi Rolli",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/8.jpg",
          "created_at": new Date(),
          "token": "3"
        },
        {
          "fbId": "",
          "email": "@aleix",
          "name": "Aleix",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/9.jpg",
          "created_at": new Date(),
          "token": "4"
        },
        {
          "fbId": "",
          "email": "@diego",
          "name": "Diego LaFuente",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/1.jpg",
          "created_at": new Date(),
          "token": "5"
        }
  ]
    
  return {
    getList: function(){
      return attendees
    },

  addAttendee: function(attendee){

    object = {
          "fbId": "",
          "email": "@nuevo",
          "name": "Nuevo attendee",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/2.jpg",
          "created_at": new Date(),
          "token": "6"
        }

    attendees.push(object);

  }
  }

}]);
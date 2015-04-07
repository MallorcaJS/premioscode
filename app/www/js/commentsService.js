angular.module('app.services').factory('commentsService', ['$http', function ($http) {
    
  return {
    getList: function(){
      return [
        {
          "name": "Kevin O'Hagan",
          "text": "This is the first comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/5.jpg",
          "likes": "32"
        },
        {
          "name": "Xisco Llado",
          "text": "This is the second comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/6.jpg",
          "likes": "2"
        },
        {
          "name": "Diego Carrask",
          "text": "This is the third comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/7.jpg",
          "likes": "0"
        },
        {
          "name": "Jordi Rolli",
          "text": "This is the fourth comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/8.jpg",
          "likes": "32"
        },
        {
          "name": "Aleix Nose",
          "text": "This is the fifth comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/9.jpg",
          "likes": "32"
        },
        {
          "name": "Diego LaFuente",
          "text": "This is the first comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/10.jpg",
          "likes": "32"
        }
      ]
    },

  addComment: function(){
    
  }
  }

}]);
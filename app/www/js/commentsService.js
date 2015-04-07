angular.module('app.services').factory('commentsService', ['$http', function ($http) {

  comments = [
        {
          "name": "Kevin O'Hagan",
          "text": "This is the first comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/5.jpg",
          "created_at": new Date(),
          "likes": "32"
        },
        {
          "name": "Xisco Llado",
          "text": "This is the second comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/6.jpg",
          "created_at": new Date(),
          "likes": "2"
        },
        {
          "name": "Diego Carrask",
          "text": "This is the third comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/7.jpg",
          "created_at": new Date(),
          "likes": "0"
        },
        {
          "name": "Jordi Rolli",
          "text": "This is the fourth comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/8.jpg",
          "created_at": new Date(),
          "likes": "32"
        },
        {
          "name": "Aleix Nose",
          "text": "This is the fifth comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/9.jpg",
          "created_at": new Date(),
          "likes": "32"
        },
        {
          "name": "Diego LaFuente",
          "text": "This is the first comment",
          "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/10.jpg",
          "created_at": new Date(),
          "likes": "32"
        }
  ]
    
  return {
    getList: function(){
      return comments
    },

  addComment: function(comment){

    object = {
      "name": "Wedding app",
      "text": comment,
      "pictureUrl": "http://api.randomuser.me/portraits/thumb/men/9.jpg",
      "created_at": new Date(),
      "likes": "32"
    }

    comments.push(object);

  }
  }

}]);
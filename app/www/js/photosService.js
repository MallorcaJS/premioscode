angular.module('app.services').factory('photosService', ['$http', function ($http) {

  return {
    getList: function(){
      return [
        {
          "id": "1",
          "user":"martina",
          "src": "http://placehold.it/400x600&text=PHOTO 1",
          "likes": "15",
          "liked": "true",
        },
        {
          "id": "2",
          "user":"julio",
          "src": "http://placehold.it/400x400&text=PHOTO 2",
          "likes": "21",
          "liked": "false",
        },
        {
          "id": "3",
          "user":"martina",
          "src": "http://placehold.it/600x400&text=PHOTO 3",
          "likes": "4",
          "liked": "true",
        },
        {
          "id": "4",
          "user":"ines",
          "src": "http://placehold.it/400x400&text=PHOTO 4",
          "likes": "19",
          "liked": "false",
        },
        {
          "id": "5",
          "user":"julio",
          "src": "http://placehold.it/400x600&text=PHOTO 5",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "6",
          "user":"marcos",
          "src": "http://placehold.it/400x400&text=PHOTO 6",
          "likes": "9",
          "liked": "true",
        }
      ]
    }
  }

}]);
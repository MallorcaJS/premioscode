//PHOTOS SOURCE
//https://www.flickr.com/photos/impactsounds/sets/72157640563410853

angular.module('app.services')
.factory('PhotoService', ['$http', function ($http) {
  return {
    getList: function(){
      return [
        {
          "id": "1",
          "user":"martina",
          "img_src_thumb": "001.jpg",
          "img_src": "001.jpg",
          "likes": "15",
          "liked": "true",
        },
        {
          "id": "2",
          "user":"julio",
          "img_src_thumb": "002.jpg",
          "img_src": "002.jpg",
          "likes": "21",
          "liked": "false",
        },
        {
          "id": "3",
          "user":"martina",
          "img_src_thumb": "003.jpg",
          "img_src": "003.jpg",
          "likes": "4",
          "liked": "true",
        },
        {
          "id": "4",
          "user":"ines",
          "img_src_thumb": "004.jpg",
          "img_src": "004.jpg",   
          "likes": "19",
          "liked": "false",
        },
        {
          "id": "5",
          "user":"julio",
          "img_src_thumb": "005.jpg",
          "img_src": "005.jpg",   
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "6",
          "user":"marcos",
          "img_src_thumb": "006.jpg",
          "img_src": "006.jpg",
          "likes": "9",
          "liked": "true",
        },
        {
          "id": "7",
          "user":"julio",
          "img_src_thumb": "007.jpg",
          "img_src": "007.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "8",
          "user":"julio",
          "img_src_thumb": "008.jpg",          
          "img_src": "008.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "9",
          "user":"julio",
          "img_src_thumb": "009.jpg",          
          "img_src": "009.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "10",
          "user":"julio",
          "img_src_thumb": "010.jpg",          
          "img_src": "010.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "11",
          "user":"julio",
          "img_src_thumb": "011.jpg",          
          "img_src": "011.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "12",
          "user":"julio",
          "img_src_thumb": "012.jpg",          
          "img_src": "012.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "13",
          "user":"julio",
          "img_src_thumb": "013.jpg",          
          "img_src": "013.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "14",
          "user":"julio",
          "img_src_thumb": "014.jpg",          
          "img_src": "014.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "15",
          "user":"julio",
          "img_src_thumb": "015.jpg",          
          "img_src": "015.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "16",
          "user":"julio",
          "img_src_thumb": "016.jpg",          
          "img_src": "016.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "17",
          "user":"julio",
          "img_src_thumb": "017.jpg",          
          "img_src": "017.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "18",
          "user":"julio",
          "img_src_thumb": "018.jpg",          
          "img_src": "018.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "19",
          "user":"julio",
          "img_src_thumb": "019.jpg",          
          "img_src": "019.jpg",
          "likes": "7",
          "liked": "false",
        },
        {
          "id": "20",
          "user":"julio",
          "img_src_thumb": "020.jpg",          
          "img_src": "020.jpg",
          "likes": "7",
          "liked": "false",
        },
        
      ]
    }
  }

}]);
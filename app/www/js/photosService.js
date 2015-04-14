angular.module('app.services').factory('photosService', ['$http', function ($http) {

  return {
    getList: function(){
      return [
        {
          "id": "1",
          "user":"martina",
          "src": "http://i.imgur.com/UbVIl1e.jpg",
          "likes": "15"
        },
        {
          "id": "2",
          "user":"julio",
          "src": "http://somethingbluenj.com/wp-content/uploads/2013/04/nj-wedding-reception-laying-down-dance-floor-crazy-party-drunk-1024x681.jpg",
          "likes": "21"
        },
        {
          "id": "3",
          "user":"martina",
          "src": "https://jessicakwells.files.wordpress.com/2012/02/linds-party.jpg",
          "likes": "4"
        },
        {
          "id": "4",
          "user":"ines",
          "src": "http://blog.timesunion.com/amanda/files/2011/07/dancing-wedding.jpg",
          "likes": "19"
        },
        {
          "id": "5",
          "user":"julio",
          "src": "http://tanclaz.hu/kepgaleria/eskuvoitanc/tanccsoporteskuvosfelkeszites.jpg",
          "likes": "7"
        },
        {
          "id": "6",
          "user":"marcos",
          "src": "http://scottmacdonaldweddings.com/wordpress/wp-content/uploads/2012/01/backyard-wedding-dancing.jpg",
          "likes": "9"
        }
      ]
    }
  }

}]);
'use strict';

angular.module('app.services')
.factory('MenuService', 
  ['$resource', 
  function ($resource) {
  // var Menu = $resource(
  //   'http://127.0.0.1:8080/wedding/:weddingId/menu/:menuId',
  //   {
  //       weddingId:12345,
  //       menuId:'@id'
  //   },
  //   {
  //       charge: {method:'POST', params:{charge:true}}
  //   }
  // );

  // return {
  //   getList: function(){
  //     // https://docs.angularjs.org/api/ngResource/service/$resource
  //     return Menu.query();
  //   }
  // }
  var menus = [
          {
            "category" : "Starter",
            "options" :
            [
              {
                "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7Ap8AJT8KDpyLjVgBPyl7HowYywG0OhX53l7Evqa1ZBm4Gxok",
                "name": "Garden salad vinagrette dressing",
                "description": "Grilled Chicken, Fresh Avocado, Mixed Greens, Crisp Tortilla Strips, Carrots, Cilantro and Cashews Tossed in a Citrus-Honey-Peanut Vinaigrette."
              },
              {
                "img": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTQ4L8kB3kT8ERAtleMOAB1c5vWjsgX1HY2NiKAjMrWH1aT2a5Oxg",
                "name": "Coconut curry butternut squash sup",
                "description": "Butternut Soup with Coconut Milk as a first course, or as a smooth vegetable stew over rice with a side of cooked greens."
              }
            ]
          },
          {
            "category" : "Main",
            "options" :
            [
              {
                "img": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnaOD-YkNT_u4xl4I5QTK4xTg4ajZWOiRnqACrwlw-elWoVemS",
                "name": "Steak",
                "description": "High quality Irish Steak"
              },
              {
                "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTC-1CU4_mTVZMfcdMRS3eZnRa4hB_0jzMAagvPUnwaGU1jKvmv",
                "name": "Fish",
                "description": "Fresh fish captured in the same morning"
              }
            ]
          }
        ];
    return {
      getMenus: function(callback) {
        callback(menus); 
      }
    }
}]);

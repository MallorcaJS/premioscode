angular.module('app.services').factory('menuService', ['$http', function ($http) {

  return {
    getList: function(){
      return [
  			{
  				"category" : "Salad",
  				"options" :
  				[
            {
              "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7Ap8AJT8KDpyLjVgBPyl7HowYywG0OhX53l7Evqa1ZBm4Gxok",
              "name": "Garden salad vinagrette dressing",
              "description": "bla bla bla"
            }
  				]
  			}
  		];
    }
  }

}]);

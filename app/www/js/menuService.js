angular.module('app.services').factory('menuService', ['$http', function ($http) {

  return {
    getList: function(){
      return [
  			{
  				"order" : 1,
  				"category" : "Salad",
  				"options" :
  				[
  					"Garden salad vinagrette dressing",
  					"Balsamic vinagrette dressing"
  				]
  			},
  			{
  				"order" : 2,
  				"category" : "Main course",
  				"options" :
  				[
  					"Main course 1",
  					"Main course 2"
  				]
  			}
  		];
    }
  }

}]);

angular.module('app.services').factory('weddingService', ['$http', function ($http) {

	wedding = {
		'title': 'Xisco y Xisca',
	}

	return {
		getWedding: function(){
			return wedding
		}
	}

}]);
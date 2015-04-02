angular.module('app.services').factory('loginService', ['$http', function ($http) {
    
	return {
		getLogin : function(req,res){
			var login = {
				userID: 'ladsjflañkdsjfk',
				name : 'Xisco'
			};
			return login;
		}
	}

}]);
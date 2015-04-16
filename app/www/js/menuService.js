'use strict';

angular.module('app.services')
.factory('MenuService', ['$resource', function ($resource) {
  var Menu = $resource(
    'http://127.0.0.1:8080/wedding/:weddingId/menu/:menuId',
    {
        weddingId:12345,
        menuId:'@id'
    },
    {
        charge: {method:'POST', params:{charge:true}}
    }
  );

  return {
    getList: function(){
      // https://docs.angularjs.org/api/ngResource/service/$resource
      return Menu.query();
    }
  }

}]);

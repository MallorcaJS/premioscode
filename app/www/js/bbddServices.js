angular.module('app.services').factory("bbddServices",['$resource', function($resource) {
  return $resource("https://bodappserver.herokuapp.com/api/bodas/:bodaId", null,
    {
      'query':   { method: 'GET', isArray: false },
      'get':    { method: 'GET', isArray: false},
      'save':  { method: 'POST' },
      'update':  { method: 'PUT' },
      'remove': { method: 'DELETE' }
    }
  );
}]);
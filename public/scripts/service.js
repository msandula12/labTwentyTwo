angular.module('randomApp', [])
.factory('randomService', ['$http', function($http) {
	return $http.get('/api/whatev');
}]);
angular.module('randomApp')
.controller('randomController', ['$scope', 'randomService', function($scope, randomService) {
	randomService.then(function (response){
		$scope.what = response.data;
	})
	// $scope.randomArray = randomService.randomArray;
}]);
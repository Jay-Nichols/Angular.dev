"use strict";
(function (){
	var app = angular.module("dependencyTest", []);
	app.controller("dependencyController", ['$scope', function($scope){
		$scope.showElement = true;
		$scope.toggleElement = function() {
			$scope.showElement = !$scope.showElement
		}
	}]);
})();
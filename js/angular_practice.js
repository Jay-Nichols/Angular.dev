"use strict";

(function() {
    var app = angular.module("myApp", []);
    app.controller('appController', function($scope) {
    	$scope.firstName = "Jay";
    	$scope.lastName = "Nichols";
    	$scope.fullName = function() {
    		return $scope.firstName + " " + $scope.lastName;
    	};
    });
})();
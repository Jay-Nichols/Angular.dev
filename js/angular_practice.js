"use strict";

(function() {
    var app = angular.module("myApp", []);
    app.controller('appController', function($scope, $location) {
    	$scope.firstName = "Jay";
    	$scope.lastName = "Nichols";
    	$scope.count = 0;
    	$scope.thisUrl = $location.absUrl();
    	$scope.fullName = function() {
    		return $scope.firstName + " " + $scope.lastName;
    	};
    });
})();
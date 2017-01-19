"use strict";

(function() {
    var app = angular.module("myApp", []);
    app.controller('appController', function($scope, $location) {
    	$scope.firstName = "Jay";
    	$scope.lastName = "Nichols";
    	$scope.thisUrl = $location.absUrl();
    	$scope.fullName = function() {
    		return $scope.firstName + " " + $scope.lastName;
    	};
    });
})();
"use strict";

(function() {
    var app = angular.module("myApp", []);
    app.controller('appController', function($scope, $location) {
    	$scope.firstName = "Jay";
    	$scope.lastName = "Nichols";
    	$scope.count = 0;
        $scope.x1 = "Jay";
        $scope.x2 = angular.lowercase($scope.x1);
        $scope.x3 = angular.uppercase($scope.x1);
    	$scope.thisUrl = $location.absUrl();
    	$scope.fullName = function() {
    		return $scope.firstName + " " + $scope.lastName;
    	};
    });
})();
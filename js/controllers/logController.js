"use strict";
(function() {
	var app = angular.module("logTest", []);
	app.controller("logController", ["$log", function($log){
		$log.log("Standard log message");
		$log.info("An informative message");
		$log.warn("Warning message");
		$log.error("An error occurred");
		$log.debug("Debugging message");
	}]);
})();
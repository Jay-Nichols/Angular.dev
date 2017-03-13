"use strict";
(function() {
	var app = angular.module("controllerTest", []);
	app.controller("CartController", function() {
		var items = [];
		var newItem = {
			item: "",
			quantity: 1,
			price: ""
		};
		function addItem() {
			items.push(newItem.item);
			newItem.item = "";
		};
	});

})();
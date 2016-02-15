angular.module('MyApp', [])
.controller('MainController', function() {
	var self = this; 
	self.classObject = {
		default: true,
		yellow: false,
		green: false,
		red: false
	}
});
angular.module('MyApp', [])
	.controller('MainController', function() {
		var self = this; 
		self.theme = "default";
		self.classObject = {
			default: true,
			yellow: false,
			green: false,
			red: false,
			blue: false
		};
		self.updateTheme = function() {
			for (var key in self.classObject) {
				if (self.theme === key) {
					self.classObject[key] = true;
				} else {
					self.classObject[key] = false;
				}
			}
		};
	});
angular.module('MyApp', [])
.controller('MainController', function() {
	var self = this; 
	self.folders = [
	  {name: 'Folder 1', files: ['File 1.1', 'File 1.2', 'File 1.3']},
	  {name: 'Folder 2', files: ['File 2.1', 'File 2.2', 'File 2.3']},
	  {name: 'Folder 3', files: ['File 3.1', 'File 3.2', 'File 3.3']}
	];
	self.expanded = true;
	self.onButtonClick = function() {
		//alert('clicked');
		self.folders[self.selectedFolderIndex].files.push(self.toAdd);
		console.log('test');
	};
});
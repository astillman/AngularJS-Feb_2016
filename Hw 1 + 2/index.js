angular.module('MyApp', [])
.controller('Controller1', function() {
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
})

.controller('Controller2', function() {
	var self = this; 
	self.folders = [
	{name: 'Folder 1', files: [{name: 'File 1.1'},{name: 'File 1.2'}, {name: 'File 1.3'}]},
	{name: 'Folder 2', files: [{name: 'File 2.1'},{name: 'File 2.2'}, {name: 'File 2.3'}]},
	{name: 'Folder 3', files: [{name: 'File 3.1'},{name: 'File 3.2'}, {name: 'File 3.3'}]}
	];
	self.expanded = true;
	self.selectedFolderIndex = 0;
	self.onButtonClick = function() {
		//alert('clicked');
		self.folders[self.selectedFolderIndex].files.push({name: self.toAdd});
		self.toAdd = '';
	};
})

.controller('Controller3', function() {

	var self = this;

	self.savedContact = {
		fName: "Andrew",
		lName: "Stillman"
	}
	self.email = "astillman@gmail.com";

	self.onEdit = function() {
		self.edit = true;
		self.tempContact = angular.copy(self.savedContact);
	};

	self.onSave = function() {
		self.edit = false;
		self.savedContact = angular.copy(self.tempContact);
	};

	self.onCancel = function() {
		self.edit = false;
	};
})

.controller('Controller4', function() {
	var self = this;

	self.taskList = [
		{name: "Feed cats", description: "Lots of kibble!", priority: "low"},
		{name: "Make pizza", description: "Pepperoni", priority: "med"},
		{name: "Move forward with Vegas trip", description: "Plane tickets and hotel", priority: "high"}
	];

	self.onSaveClicked = function() {
		self.taskList.push({name: self.newTask.name, description: self.newTask.description, priority: self.newTask.priority});
	};

	self.onDeleteClicked = function(index) {
		self.taskList.splice(index, 1);
	}

});

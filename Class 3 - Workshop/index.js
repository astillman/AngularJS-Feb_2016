angular.module('MyApp', [])
//chaining is better style
.controller('MainController', function($scope) {

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

 

});
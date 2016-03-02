
angular.module('MyApp', ['MyServices']) //second argument [] causes angular to 
//make a new container, holds names of dependencies -- e.g. modules you need to run


//pass value services in by name
.controller('MainController', function(Student) {

   var self = this;
   self.student = new Student();
  
});
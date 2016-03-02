  angular.module('MyApp', ['MyServices']) //second argument [] causes angular to 
//make a new container, holds names of dependencies -- e.g. modules you need to run


//pass value services in by name
.controller('MainController', function(Car, MathCalculator) {

   var self = this;

   self.car1 = new Car('Ford');
   self.car1.setYear(1976);

   console.log(MathCalculator.calculateSum(20, 5));
})

.controller('Controller2', function(Car) {

   var self = this;
   self.car1 = new Car('Ford');
   self.car1.setYear(1976);
});
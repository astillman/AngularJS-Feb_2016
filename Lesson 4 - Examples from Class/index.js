angular.module('MyApp', ['MyServices']) //second argument [] causes angular to 
//make a new container, holds names of dependencies -- e.g. modules you need to run


//pass value services in by name
.controller('MainController', function(MY_CARS, Car) {

   var self = this;

   //important difference in behavior btwn these...
   //self.myCars = MY_CARS;
   //self.myCars = angular.copy(MY_CARS);

   self.myCar = new Car('Ford');
   self.date = new Date().getTime();

   // self.addCar = function() {
   // 	self.myCars.push({
   // 		make: "BMW",
   // 		model: "Roadster"
   // 	});
   // }

   // self.greeting = "Hello world";
   // self.count = 10;

   // $timeout(function() {
   // 	console.log('timeout occurred')
   // 	self.greeting = "This is my new greeting";
   // }, 2000);
   
   // $interval(function() {
   // 	 self.count--;
   // }, 1000, self.count)

   // $log.log('this is log.log');
   // $log.info('this is log.info');
   // $log.warn('this is log.warn');
   // $log.debug('this is log.debug');
   // $log.error('this is log.error');

})

.controller('Controller2', function(MY_CARS, $timeout, $interval, $log) {

   var self = this;
   self.secondCars = MY_CARS;
});
angular.module('MyServices', []) 

//services are good for making a singleton with a bunch of methods on it
.service('MathCalculator', function() { //this function is the service
	var self = this; //very similar to constructor format

	//Private values and functions here
	var privateArray = [1, 2, 3, 4];
	function privateFunction() {
		//do some stuff
	}

	//Publicly exposed API for the service
	self.publicValue = 10;

	self.calculateSum = function (a,b) {
		return a + b;
	}

})


//factories are good for generating lots of instances of something 
//that don't interfere with each other...
.factory('Car', function() {
	//example only
	//function Car(params) {
	//	angular.extend(this, params);
	//}

	function Car(name) {
		this.name = name;
	}

	Car.prototype.setMake = function(make) {
		this.make = make;
	};

	Car.prototype.setYear = function(year) {
		this.year = year;
		this.age = 2016 - this.year;
	};

	Car.buildGenericCar = function() {
		return new Car('BMW');
	};

	return Car; //return the constructor function (aka blueprint) itself
})

//use all caps for value service
//re-usable in multiple controllers
.value('MY_CARS', [{
	make: 'Ford',
	model: 'Mustang'
},
{
	make: 'Honda',
	model: 'Accord'
},
{
	make: 'Toyota',
	model: 'Corolla'
}])

.value('api_key', '123456');
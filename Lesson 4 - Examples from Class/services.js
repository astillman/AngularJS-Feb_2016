angular.module('MyServices', []) 

.factory('Car', function() {
	function Car(name) {
		this.name = name;
	}

	Car.prototype.setMake = function(make) {
		this.make = make;
	};

	Car.prototype.setYear = function(year) {
		this.year = year;
	}

	Car.buildGenericCar = function() {
		return new Car('BMW');
	}

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
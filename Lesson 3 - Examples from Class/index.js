angular.module('MyApp', [])
//chaining is better style
.controller('MainController', function($scope) {

   var self = this;

   //Some examples will show the use of
   //scope watch to determine when changes
   //have happened
   //bad - don't do this
   //$scope.$watch('ctrl.myDog.name', //function(newValue, oldValue){
   //	console.log("NewVal:" + newValue);
   //	console.log("OldVal:" + oldValue);
	//});
   //watches all properties in object
   //$scope.$watch('ctrl.myDog', //function(newValue, oldValue){
   //	console.log("NewVal:" + newValue);
   //	console.log("OldVal:" + oldValue);
	//}, true);


	//Alternate/better method is to use ng-change
	//with method on controller
   	self.onDogsNameChange = function() {
   		console.log(self.myDog.name);
    }
   















	//////////from last class//////////

	//$scope.greeting = 'Hello world';  
	//$scope now considered bad practice.  
	//Use "controller-as" syntax instead...

	//var self = this; //useful for capturing the state 
	//of the controller -- helps avoid closure problems...

	self.classObject = {
		red: false,
		green: false,
		yellow: false
	}

	self.onButtonClick = function() {
		alert('you clicked the button');
	};

	self.greeting = 'Hello World!!!'; 
	//define properties on the controller itself

	//self.username = 'tommy' //don't need to define this, necessarily... used to initialize the value

	self.myDog = {
		name: 'Max'
	}

	self.myCat = {
		name: 'Sally'
	}

	self.myCow = {
		name: 'Harry'
	}

	//self.select = true

	self.simpleArray = ['Item1','Item2','Item3'];

	self.interArray = [{
		name: 'george'
	},{
		name: 'harry'
	},{
		name: 'sally'
	}];

	self.states = {
		CA: 'California',
		NY: 'New York',
		FL: 'Florida'
	}
});
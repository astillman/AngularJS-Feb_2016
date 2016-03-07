angular.module('MyServices', []) 

//services are good for making a singleton with a bunch of methods on it
.service('Utilities', function(COLORS, $timeout) { //this function is the service
	var self = this;
	self.generateRandomColor = function() {
		var num = Math.floor(Math.random() * 4);
		return COLORS[num];
	}
	self.evaluateUserInput = function(userSequence, simonSequence) {
		//console.log(userSequence);
		//console.log(simonSequence.colors);
		for (var i = 0; i < userSequence.length; i++) {
			if ((simonSequence.colors[i])&&(simonSequence.colors[i] !== userSequence[i])) {
				return "Wrong!";
			}
		}
		if (i >= (simonSequence.colors.length)) {
		  return "Correct!";
	    } else {
	      return "incomplete"
	    }
	}
})

.factory('Sequence', function(Utilities) {
	function Sequence() {
		this.colors = [];
	}

	Sequence.prototype.extendByOne = function() {
		var randColor = Utilities.generateRandomColor();
		this.colors.push(randColor);
		return this;
	}
	
	return Sequence; //return the constructor function (aka blueprint) itself
})

.value('COLORS', {
	'0': "red",
	'1': "green",
	'2': "yellow",
	'3': "blue"
});
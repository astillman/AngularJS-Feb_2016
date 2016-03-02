angular.module('MyServices', []) 

//services are good for making a singleton with a bunch of methods on it
.service('GradeCalculator', function() { //this function is the service
	var self = this; //very similar to constructor format

	self.averageGrades = function(assignments) {
		var sum = 0;
		for (var i=0; i<assignments.length; i++) {
			sum += +assignments[i].grade;
		}
		console.log(i);
		var avg = Math.round(sum/i, 2);
		return avg;
	}

	self.convertToGrade = function(average) {
		if (average >= 90) {
			return 'A';
		} else if (average >= 80) {
			return 'B';
		} else if (average >= 70) {
			return 'C';
		} else if (average >= 65) {
			return 'D';
		} else {
			return 'F';
		}
	}

	self.convertToPassFail = function(average) {
		if (average > 65) {
			return "Pass";
		} else {
			return "Fail";
		}
	}

})


//factories are good for generating lots of instances of something 
//that don't interfere with each other...
.factory('Student', function(GradeCalculator) {
	function Student() {
		this.assignments = [];
	}

	Student.prototype.setName = function(name) {
		this.name = name;
	};

	Student.prototype.addAssignment = function(assignment) {
		this.assignments.push(angular.copy(assignment));
		this.recalculateGrades();
		assignment.name = '';
		assignment.grade = '';
	};

	Student.prototype.recalculateGrades = function() {
		this.average = GradeCalculator.averageGrades(this.assignments);
		this.grade = GradeCalculator.convertToGrade(this.average);
		this.passFail = GradeCalculator.convertToPassFail(this.average);
	}

	return Student; //return the constructor function (aka blueprint) itself
});
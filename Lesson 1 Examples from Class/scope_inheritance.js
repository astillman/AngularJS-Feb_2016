function a() {
	var myObj = {
	  name: "George"
	};
	var myDog = {
	  name: "Max"
	};

	function b() {
		var myObj = {
		  year: 1999;
		}

		myObj.name = 'harry';
		myDog.age = 12;
		console.log(myObj);
	}

	b();
	console.log(myObj);
	console.log(myDog);
}
 
// { name: "harry", year: 1999 }
// { name: "George"}
// { name : "Max", age: 12}

a();
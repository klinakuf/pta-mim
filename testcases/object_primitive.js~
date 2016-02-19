// this testcase demonstrates that objects are not taken care of in our implementation
// the value of the threshold is 0.65

function getFullname(person){
	if(!person)
		throw "invalid person";
	return person.lastname + ", " +  person.firstname;
}

function getRating(n){	
	return n*100;
}

function printDetails(person){
	var rating = 0;
	var fullname = "";
	if(person.hasOwnProperty("rating"))
		rating = getRating(person.rating);
	fullname = getFullname(person);

	console.log(fullname + ": " + rating);
}

printDetails({firstname: "Mas", lastname: "Al", rating: 0.8});
printDetails({firstname: "Elmi", lastname: "Ali", rating: 0.8});
printDetails({firstname: "Floriment", lastname: "Klinaku", rating: 0.8});
printDetails({firstname: "Mas", lastname: "Al", rating: 0.8});
printDetails({firstname: "Mas", lastname: "Al", rating: 0.8});
printDetails({firstname: "Mas", lastname: "Al", rating: 0.8});
printDetails({firstname: "Mas", lastname: "Al", rating: 0.8});
printDetails({firstname: "Mas", lastname: "Al", rating: 0.8});
printDetails({firstname: "Elmi", lastname: "Ali", rating: 0.8});
printDetails({firstname: "Floriment", lastname: "Klinaku", rating: 0.8});
printDetails({firstname: "Mas", lastname: "Al", rating: 0.8});
printDetails({firstname: "Mas", lastname: "Al", rating: 0.8});
printDetails({firstname: "Shalnark", lastname: "Shal", rating: 0.8});
printDetails({firstname: "Phinks", lastname: "Chrollo", rating: 0.9});

/* below are the results obtained from running the instrumentation on this test case

Al, Mas: 80
Ali, Elmi: 80
Klinaku, Floriment: 80
Al, Mas: 80
Al, Mas: 80
Al, Mas: 80
Al, Mas: 80
Al, Mas: 80
Ali, Elmi: 80
Klinaku, Floriment: 80
Al, Mas: 80
Al, Mas: 80
Shal, Shalnark: 80
Chrollo, Phinks: 90
171774660 ---> 0.9285714285714286 Hit Ratio
1806584764 ---> 0.8571428571428571 Hit Ratio
1343318377 ---> 0 Hit Ratio
Memoize candidate found at location: (/home/student/Projects/pta-mim/testcases/object_primitive.js:iidNaN)
Memoize candidate found at location: (/home/student/Projects/pta-mim/testcases/object_primitive.js:10:1:12:2)
Total methods : 5
methods instrumented without objects: 3
Total methods that can benefit from memoization: 2
Total methods that were using objects: 2
Percentage of candidates memoizable: 0.6666666666666666
[{"methodId":171774660,"name":"","location":"(/home/student/Projects/pta-mim/testcases/object_primitive.js:iidNaN)","tuples":[{"input":{"0":"rating"},"output":true,"count":14}]},{"methodId":1806584764,"name":"","location":"(/home/student/Projects/pta-mim/testcases/object_primitive.js:10:1:12:2)","tuples":[{"input":{"0":0.8},"output":80,"count":13},{"input":{"0":0.9},"output":90,"count":1}]}]


*/


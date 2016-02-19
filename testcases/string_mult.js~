// this test case demonstrates the use of mulitple primitive inputs of type String and returns a primitive value of type Boolean

function hasBothProperties(prop1, prop2){
	var obj = {
		"city": "Darmstadt",
		"country": "Germany",
		"continent": "Europe",
		"language": "German"
	};

	return obj.hasOwnProperty(prop1) && obj.hasOwnProperty(prop2);
}

hasBothProperties("city", "country");
hasBothProperties("city", "continent");
hasBothProperties("city", "country");
hasBothProperties("continent", "country");
hasBothProperties("city", "country");
hasBothProperties("city", "country");
hasBothProperties("language", "country");
hasBothProperties("city", "country");
hasBothProperties("city", "language");
hasBothProperties("country", "continent");
hasBothProperties("city", "country");
hasBothProperties("city", "country");
hasBothProperties("city", "country");
hasBothProperties("city", "country");

/* below are the results of the instrumentation on this test case

171774660 ---> 0.8571428571428571 Hit Ratio
1538021130 ---> 0.5714285714285714 Hit Ratio
Memoize candidate found at location: (/home/student/Projects/pta-mim/testcases/string_mult.js:iidNaN)
Total methods : 2
methods instrumented without objects: 2
Total methods that can benefit from memoization: 1
Total methods that were using objects: 0
Percentage of candidates memoizable: 0.5
[{"methodId":171774660,"name":"","location":"(/home/student/Projects/pta-mim/testcases/string_mult.js:iidNaN)","tuples":[{"input":{"0":"city"},"output":true,"count":11},{"input":{"0":"country"},"output":true,"count":12},{"input":{"0":"continent"},"output":true,"count":3},{"input":{"0":"language"},"output":true,"count":2}]}]

*/

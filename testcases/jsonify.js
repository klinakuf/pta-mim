// this test case demonstrates the use of multiple primitive arguments as well as an array. it further shows the inability of our implementation to cater for objects
// and returns an object

function jsonify(properties, values){
	var obj = {};
	for(var i=0;i<properties.length;i++){
		obj[properties[i]] = values[i]; 
	}
	return obj;
}
jsonify(["name", "rating", "age"], ["Ment", 85, 28]);
jsonify(["name", "rating", "age"], ["Ment", 85, 28]);
jsonify(["name", "rating", "age"], ["Ment", 85, 28]);
jsonify(["name", "rating", "age"], ["Ment", 85, 28]);
jsonify(["name", "rating", "age"], ["Elmi", 85, 27]);
jsonify(["name", "rating", "age"], ["Elmi", 85, 27]);
jsonify(["name", "rating", "age"], ["Ment", 85, 28]);
jsonify(["name", "rating", "age"], ["Ment", 85, 28]);
jsonify(["name", "rating", "age"], ["Elmi", 85, 27]);
jsonify(["name", "rating", "age"], ["Mas", 85, 16]);


/* below are the results of the instrumentation on this test case

Total methods : 1
methods instrumented without objects: 0
Total methods that can benefit from memoization: 0
Total methods that were using objects: 1
Percentage of candidates memoizable: 0

*/

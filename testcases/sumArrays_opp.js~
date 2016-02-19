// this test case demontrates the use of multiple arguments with array. The output here is of type Array
// the value of the threshold here is 0.65

function sumArrays(arr1, arr2) {
		var sum = [];
		// if not same length, return
		if (arr1.length != arr2.length)
			throw "arrays are not of the same length";
		for (var i = 0; i < arr1.length; i++) {
			sum[i] = arr1[i] + arr2[i];
		}
		return sum;
}

sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,2,3], [4,4,4]);
sumArrays([3,3,3], [5,5,5]);
sumArrays([63,3,34], [42,4,4]);
sumArrays([3,9,9], [2,2,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([1,3,3], [4,3,4]);
sumArrays([1,3,3], [4,3,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);
sumArrays([3,3,3], [4,4,4]);

/* below is the result obtained from running the analysis

1217648062 ---> 0.6842105263157895 Hit Ratio
Memoize candidate found at location: (/home/student/Projects/pta-mim/testcases/sumArrays_opp.js:4:1:13:2)
Total methods : 1
methods instrumented without objects: 1
Total methods that can benefit from memoization: 1
Total methods that were using objects: 0
Percentage of candidates memoizable: 1
[{"methodId":1217648062,"name":"","location":"(/home/student/Projects/pta-mim/testcases/sumArrays_opp.js:4:1:13:2)","tuples":[{"input":{"0":[3,3,3],"1":[4,4,4]},"output":[7,7,7],"count":13},{"input":{"0":[3,2,3],"1":[4,4,4]},"output":[7,6,7],"count":1},{"input":{"0":[3,3,3],"1":[5,5,5]},"output":[8,8,8],"count":1},{"input":{"0":[63,3,34],"1":[42,4,4]},"output":[105,7,38],"count":1},{"input":{"0":[3,9,9],"1":[2,2,4]},"output":[5,11,13],"count":1},{"input":{"0":[1,3,3],"1":[4,3,4]},"output":[5,6,7],"count":2}]}]

*/

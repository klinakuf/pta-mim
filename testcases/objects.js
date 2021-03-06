// this test case demonstrates the use of objects with single properties. the output of the function is of type Number

function fibonacciObj(object) {
	var n = object.value;
	fibonacci1(n);

}

function fibonacci1(n) {
	if (n == 0 || n == 1)
		return n;
	else
		return fibonacci1(n - 1) + fibonacci1(n - 2);

}

fibonacciObj({value:4});
fibonacciObj({value:4});
fibonacciObj({value:4});
fibonacciObj({value:4});
fibonacciObj({value:4});
fibonacciObj({value:2});
fibonacciObj({value:5});
fibonacciObj({value:4});
fibonacciObj({value:4});

/* below are the results obtained from running the instrumentation on this testcase

1649857922 ---> 0.9259259259259259 Hit Ratio
Memoize candidate found at location: (/home/student/Projects/pta-mim/testcases/objects.js:9:1:15:2)
Total methods : 2
methods instrumented without objects: 1
Total methods that can benefit from memoization: 1
Total methods that were using objects: 1
Percentage of candidates memoizable: 1
[{"methodId":1649857922,"name":"","location":"(/home/student/Projects/pta-mim/testcases/objects.js:9:1:15:2)","tuples":[{"input":{"0":1},"output":1,"count":27},{"input":{"0":0},"output":0,"count":18},{"input":{"0":2},"output":1,"count":18},{"input":{"0":3},"output":2,"count":9},{"input":{"0":4},"output":3,"count":8},{"input":{"0":5},"output":5,"count":1}]}]

*/

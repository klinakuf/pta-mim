// this test case demonstrates the use of single primitive argument of type Number and returns a single primitive of type Number.

function factorial(n) {
		if (n <= 1)
			return 1;
		else
			return n * factorial(n - 1);
}
factorial(9);
factorial(9);
factorial(2);
factorial(9);
factorial(9);
factorial(3);

/* below is the result obtained from running the instrumentation

1937273030 ---> 0.7804878048780488 Hit Ratio
Memoize candidate found at location: (/home/student/Projects/pta-mim/testcases/factorial.js:3:1:8:2)
Total methods : 1
methods instrumented without objects: 1
Total methods that can benefit from memoization: 1
Total methods that were using objects: 0
Percentage of candidates memoizable: 1
[{"methodId":1937273030,"name":"","location":"(/home/student/Projects/pta-mim/testcases/factorial.js:3:1:8:2)","tuples":[{"input":{"0":1},"output":1,"count":6},{"input":{"0":2},"output":2,"count":6},{"input":{"0":3},"output":6,"count":5},{"input":{"0":4},"output":24,"count":4},{"input":{"0":5},"output":120,"count":4},{"input":{"0":6},"output":720,"count":4},{"input":{"0":7},"output":5040,"count":4},{"input":{"0":8},"output":40320,"count":4},{"input":{"0":9},"output":362880,"count":4}]}]

*/

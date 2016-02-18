// this test case demonstrates the use of multiple primitive arguments. In this case, of type Number
// the value of the threshold here is 0.65

function quadraticSolver(a, b, c) {
		var solution = {};
		//we solve the equation
		var a_ = 2 * a;
		var a__ = 4 * a * c;
		var dis = b * b - a__;
		if (dis < 0) {
			throw "invalid roots";
		} else {
			var dis_sqrt = Math.sqrt(dis);
			solution.x1 = (b + dis_sqrt) / a_;
			solution.x2 = (b - dis_sqrt) / a_;
		}
		return [solution.x1, solution.x2];
}

quadraticSolver(1,2,1);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(1, 4, 1);
quadraticSolver(3, 9, 1);


// there are two hit ratios here because for every function call to quadraticSolver, there is a call to Math.sqrt()
/*1127438365 ---> 0.6666666666666666 Hit Ratio
  1524930438 ---> 0.6666666666666666 Hit Ratio
Memoize candidate found at location: (/home/student/Projects/pta-mim/testcases/quadratic.js:iidNaN)
Memoize candidate found at location: (/home/student/Projects/pta-mim/testcases/quadratic.js:3:1:17:2)
Total methods instrumented: 2
Total methods that can benefit from memoization: 2
Percentage of candidates memoizable:1
[{"methodId":1127438365,"name":"","location":"(/home/student/Projects/pta-mim/testcases/quadratic.js:iidNaN)","tuples":[{"input":{"0":0},"output":0,"count":1},{"input":{"0":9},"output":3,"count":9},{"input":{"0":12},"output":3.4641016151377544,"count":1},{"input":{"0":69},"output":8.306623862918075,"count":1}]},{"methodId":1524930438,"name":"","location":"(/home/student/Projects/pta-mim/testcases/quadratic.js:3:1:17:2)","tuples":[{"input":{"0":1,"1":2,"2":1},"output":[1,1],"count":1},{"input":{"0":2,"1":5,"2":2},"output":[2,0.5],"count":9},{"input":{"0":1,"1":4,"2":1},"output":[3.732050807568877,0.2679491924311228],"count":1},{"input":{"0":3,"1":9,"2":1},"output":[2.8844373104863457,0.11556268951365418],"count":1}]}]
*/

// this test case demonstrates the use of multiple primitive arguments. In this case, of type Number
// the motivation here is to call the function with very minimal similarity in arguments. That is, variable arguments.
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
quadraticSolver(1, 12, 2);
quadraticSolver(2, 13, 4);
quadraticSolver(2, 24, 5);
quadraticSolver(2, 15, 5);
quadraticSolver(3, 5, 2);
quadraticSolver(2, 5, 2);
quadraticSolver(2, 22, 4);
quadraticSolver(1, 11, 2);
quadraticSolver(5, 15, 2);
quadraticSolver(6, 14, 2);
quadraticSolver(1, 9, 1);


// there are two hit ratios here because for every function call to quadraticSolver, there is a call to Math.sqrt()
/*
1127438365 ---> 0.08333333333333333 Hit Ratio
1524930438 ---> 0 Hit Ratio
Total methods : 2
methods instrumented without objects: 2
Total methods that can benefit from memoization: 0
Total methods that were using objects: 0
Percentage of candidates memoizable: 0


*/

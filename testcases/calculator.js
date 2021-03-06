var Calculator = function () {


}

Calculator.prototype = {
	factorial: function (n) {
		if (n <= 1)
			return 1;
		else
			return n * this.factorial(n - 1);
	},

	fibonacci: function (n) {
		if (n == 0 || n == 1)
			return n;
		else
			return this.fibonacci(n - 1) + this.fibonacci(n - 2);

	},
	
	sum : function () {
		var i;
		var sum = 0;
		for (i = 0; i < arguments.length; i++) {
			sum = sum + arguments[i];
		}
		return sum;
	},

	quadratic_solver: function (a, b, c) {
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
		return solution;
	},

	determinant: function (matrix) {
		var result = 0;
		//calculate the determinant
		//TODO by Ilmi Ali 88
		return result;
	},

	dotProduct: function (row, col) {
		var dotp = 0;
		// ensure col and row of M1 & M2 resp., are same
		if (row.length != col.length) {
			throw "invalid arguments";
		}
		for (var i = 0; i < row.length; i++) {
			dotp += row[i] * col[i];
		}
		return dotp;
	},

	matrixMultiply: function (matrix_a, matrix_b) {
		var result = [];
		//use dotProduct to implement this function
		//TODO by Ilmi Ali 14
		return result;
	},
	sumArrays: function (arr1, arr2) {
		var sum = [];
		// if not same length, return
		if (arr1.length != arr2.length)
			throw "arrays are not of the same length";
		for (var i = 0; i < arr1.length; i++) {
			sum[i] = arr1[i] + arr2[i];
		}
		return sum;
	}
}

var calc = new Calculator();
var result;
var stringTest = function (string1, string2) {
	return string1 + string2;
}
// result = calc.sum(2,3);
// result = calc.sum(2,4);
// result = calc.sum(2,3,3);
// result = calc.sum(2,4,5,6)
// result = calc.sum(2,3,3);
// result = calc.sum(2,4);
// result = calc.sum(2,3,3);
// result = calc.sum(2,4,4)
// result = calc.sum(2,3);
// result = calc.sum(2,4);
// result = calc.sum(2,3,3);
// result = calc.sum(2,4);
// result = calc.sum(2,3,3);
// result = calc.sum(2,4,4)
// result = calc.sum(2,3);
// result = calc.sum(2,4);
// result = calc.sum(2,4,3);
// result = calc.sum(4,4);
// result = calc.sum(2,3,3);
// result = calc.sum(2,4,4)
// result = calc.sum(2,3);
// result = calc.sum(2);


result = calc.fibonacci(2);
result = calc.fibonacci(5);
result = calc.fibonacci(5);
result = calc.fibonacci(5);
result = calc.fibonacci(5);
// result = calc.fibonacci(10);
// result = calc.fibonacci(20);
// result = calc.fibonacci(10);
// result = calc.fibonacci(5);
// result = calc.fibonacci(10);
// result = calc.fibonacci(5);
// result = calc.fibonacci(40);
// result = calc.fibonacci(40);
// result = calc.fibonacci(40);
// result = calc.fibonacci(40);
// result = calc.fibonacci(10);
// result = calc.fibonacci(5);
// result = calc.fibonacci(10);
// result = calc.fibonacci(5);
// result = calc.fibonacci(40);
// result = calc.fibonacci(40);
// result = calc.fibonacci(40);
// 
// result = calc.factorial(9);
// result = calc.factorial(9);
// result = calc.factorial(9);
// result = calc.factorial(9);
// result = calc.factorial(9);
// result = calc.factorial(3);
// result = calc.factorial(9);
// result = calc.factorial(4);
// result = calc.factorial(2);
// result = calc.factorial(2)
// result = calc.factorial(1);
// result = calc.factorial(1);
// result = calc.factorial(7);
// result = calc.factorial(23);
// result = calc.factorial(22);
// result = calc.factorial(10);
// result = calc.factorial(23);
// result = calc.factorial(10);
// result = calc.factorial(2);
// result = calc.factorial(5);

// result = calc.sumArrays([3,4,4], [3,4,4]);
// result = calc.sumArrays([3,4,4], [3,4,4]);
// result = calc.sumArrays([23,4,4], [2,4,4]);
// result = calc.sumArrays([3,4,4], [3,3,4]);
// result = calc.sumArrays([3,4,4], [3,3,4]);
// result = calc.sumArrays([3,4,4], [3,3,4]);
// result = calc.sumArrays([3,4,4], [3,3,4]);
// result = calc.sumArrays([3,4,4], [3,3,4]);
// result = calc.sumArrays([3,4,4], [3,3,4]);

// result = calc.dotProduct([2,3,4], [2,3,4]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);

// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([2,3,4], [2,3,4]);
// result = calc.dotProduct([5,3,5], [5,3,5]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([2,3,4], [11,3,4]);
// result = calc.dotProduct([5,3,5], [35,3,5]);
// result = calc.dotProduct([5,3,35], [5,3,2]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([2,32,4], [2,3,4]);
// result = calc.dotProduct([5,13,5], [5,3,5]);
// result = calc.dotProduct([5,3,5], [5,3,2]);
// result = calc.dotProduct([5,223,5], [5,3,2]);
// result = calc.dotProduct([2,323,43], [2,3,4]);
// result = calc.dotProduct([5,56,5], [5,31,5]);
// result = calc.dotProduct([5,34,5], [5,3,22]);
// result = calc.dotProduct([5,35,5], [5,13,2]);
try {
	// result = calc.quadratic_solver(1,2,3);
	// result = calc.quadratic_solver(4,2,16);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(5,1,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(1,2,3);
	// result = calc.quadratic_solver(4,2,16);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(5,1,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(1,2,3);
	// result = calc.quadratic_solver(4,2,16);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(5,9,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(1,2,3);
	// result = calc.quadratic_solver(4,2,16);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(2,1,9);
	// result = calc.quadratic_solver(3,4,9);
	// result = calc.quadratic_solver(5,8,9);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(1,2,3);
	// result = calc.quadratic_solver(4,2,16);
	// result = calc.quadratic_solver(3,1,29);
	// result = calc.quadratic_solver(3,1,9);
	// result = calc.quadratic_solver(3,1,29);
	// result = calc.quadratic_solver(51,1,29);
	// result = calc.quadratic_solver(3,1,94);
} catch (e) {
	//do nothing
}


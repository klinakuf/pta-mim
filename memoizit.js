(function () {

	// C is the set of memoizeit method candidates
	var C = [];
	// k is the depth of comparison
	var k = 1; 

	//Maybe in the future to replace this code with something that works better.
	//Used for hashing a unique ID for functions
	String.prototype.hashCode = function () {
		var hash = 0, i, chr, len;
		if (this.length == 0) return hash;
		for (i = 0, len = this.length; i < len; i++) {
			chr = this.charCodeAt(i);
			hash = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return Math.abs(hash);
	};

	
	// Array of set of IO tuples of all candidates
	var MethodContainer = function () {
		this.candidates = [];
	}
	MethodContainer.prototype = {
		getMethodById: function (id) {
			var foundMethod;
			this.candidates.forEach(function (val, ind, temp) {
				if (val.methodId === id) {
					foundMethod = temp[ind];
					return;
				}
			});
			return foundMethod;
		}
	}

	// An object that contains a method and an array of all it's IO pairs
	var MethodDesc = function (id) {
		this.methodId = id;
		this.tuples = [];
	}

	MethodDesc.prototype = {
		// checks if input/output pair exists, increments count if so, else creates new input/ouput pair
		addIOPair: function (input, output) {
			var foundIOPair = false;
			this.tuples.forEach(function (value, index, temp) {
				if (value.input['0'] === input['0'] && output === value.output) {
					value.count++;
					foundIOPair = true;
				}
			});

			if (!foundIOPair) {
				this.tuples.push({
					input: input,
					output: output,
					count: 1
				});
			}
		},

		getTuples: function () {
			return this.tuples;
		}
	};
	// An object that contains an array of method candidates for memoization
	var methodContainer = new MethodContainer();
	
	J$.analysis = {
		// generate input output pair for method
		invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid) {
			var id = f.toString().hashCode();
			var currentMethod = methodContainer.getMethodById(id);

			if (!currentMethod) {
				var t = new MethodDesc(id);
				console.log(JSON.stringify(t));
				t.addIOPair(args, result);
				methodContainer.candidates.push(t);
			}
			else {
				currentMethod.addIOPair(args, result);
				console.log(JSON.stringify(currentMethod));
			}
		}
	};
} ());
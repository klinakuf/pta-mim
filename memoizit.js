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
		this.minimumHitRatio = 0.65;
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
		this.name = "";
		this.location = "";
		this.tuples = [];
	}


	MethodDesc.prototype = {

		testForArrays: function (var1, var2) {
			if (var1 === undefined || var2 === undefined || var1 === null || var2 === null)
				return false;
			return var1.constructor === Array && var2.constructor === Array;
			// return false;
		},

		compareArrays: function (arr1, arr2) {
			if (arr1.length === arr2.length) {
				return arr1.every(function (element, index) {
					return element === arr2[index];
				});
			}
			return false;
		},
		// checks if input/output pair exists, increments count if so, else creates new input/ouput pair
		addIOPair: function (input, output) {
			var sameOutput = false;
			var foundIOPair = false;
			// Handling methods dont return any value

			if (typeof output === 'undefined') {
				return;
			}
			this.tuples.forEach(function (object, index, temp) {

				if(!foundIOPair){
				sameOutput = false;
				// check for output first before input
				if (MethodDesc.prototype.testForArrays(output, object.output)) {
					if (MethodDesc.prototype.compareArrays(output, object.output)) {
						//an output is an array and it is the same ...
						sameOutput = true;
					}
				} else if (output === object.output) {
					//the output is a primitive and it is the same ...
					sameOutput = true;
				}

				if (sameOutput) {
					for (var i in object.input) {
						// check if argument is an array
						if (MethodDesc.prototype.testForArrays(input[i], object.input[i])) {
							foundIOPair = MethodDesc.prototype.compareArrays(input[i], object.input[i]);
						} else {
							//primitive checking
							foundIOPair = object.input[i] === input[i];
						}
						// break out of loop if not found
						if (!foundIOPair)
							break;
					}
					// 
					if (foundIOPair) {
						// also checking the case of empty tuples
						temp[index].count++;
					}
				}
				}
			});
			// push new object if different IO pair
			if (!foundIOPair) {
				this.tuples.push({
					input: input,
					output: output,
					count: 1
				});

			}
		},

		computeHitRatio: function () {
			var numerator = 0;
			var tupleMult = 0;
			this.tuples.forEach(function (val, ind, temp) {
				tupleMult += val.count;
				numerator += val.count - 1;
			});
			return numerator / tupleMult;
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

			var giid = J$.getGlobalIID(functionIid);
			var location = J$.iidToLocation(giid);
			var id = f.toString().hashCode();
			var currentMethod = methodContainer.getMethodById(id);
			if (!currentMethod) {
				var t = new MethodDesc(id);
				t.addIOPair(args, result);
				t.location = location;
				methodContainer.candidates.push(t);
			}
			else {
				currentMethod.addIOPair(args, result);
				currentMethod.location = location;
			}
		},

		//Called at the end of javascript file execution
		//Computes the hit ratio of each method, annd if it exceeds
		//the minimumHitRatio, save it to the nextCandidates
		scriptExit: function (iid, wrappedExceptionVal) {
			var nextCandidates = [];
			var totalNumberInstrumented = 0;
			methodContainer.candidates.forEach(function (val, key) {
				var hitRatio = val.computeHitRatio();
				totalNumberInstrumented++;
				console.log(val.methodId + " ---> " + hitRatio + " Hit Ratio");
				if (hitRatio > methodContainer.minimumHitRatio
					) {
					nextCandidates.push(val);
				}

			});

			// 			var fs = require('fs');
			// 			fs.writeFile("tmp/test", JSON.stringify(nextCandidates), function (err) {
			// 				if (err) {
			// 					return console.log(err);
			// 				}
			// 
			// 				console.log("The file was saved!");
			// 			});
			var noNext = 0;
			nextCandidates.forEach(function (candidate, key) {
				console.log('Memoize candidate found at location: ' + candidate.location);
				noNext++;
			});
			console.log("Total methods instrumented: " + totalNumberInstrumented);
			console.log("Total methods that can benefit from memoization: " + noNext);
			console.log("Percentage of candidates memoizable:" + noNext / totalNumberInstrumented);
			console.log(JSON.stringify(nextCandidates));
		}
	};
} ());

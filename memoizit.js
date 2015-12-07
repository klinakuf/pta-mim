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
		this.minimumHitRatio = 0.2,
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
			this.tuples.forEach(function (object, index, temp){
				// check for output first before input
				if(output == object.output){
					for(i in object.input){
						foundIOPair = object.input[i] === input[i];
						// break out of loop if not found
						if(!foundIOPair) 
							break;
					}
					// 
					if(foundIOPair){
						// also checking the case of empty tuples
						temp[index].count++;			
					}	
				}
			});
			// push new object if different IO pair
			if(!foundIOPair){
				this.tuples.push({
					input: input,
					output: output,
					count: 1
				});
			}
		},

		computeHitRatio: function(){
			var numerator = 0;
			var tupleMult = 0;
			this.tuples.forEach(function(val, ind, temp){
				tupleMult += val.count;
				numerator += val.count - 1;	
			});
			return numerator/tupleMult;
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
				//t.addIOPair(args, result);
				t.addIOPair(args, result);
				methodContainer.candidates.push(t);
			}
			else {
				currentMethod.addIOPair(args, result);
				console.log(JSON.stringify(currentMethod));
			}

			//console.log(currentMethod.computeHitRatio());
		},

		//Called at the end of javascript file execution
		//Computes the hit ratio of each method, annd if it exceeds
		//the minimumHitRatio, save it to the nextCandidates
		scriptExit: function (iid, wrappedExceptionVal) {
			var nextCandidates = [];
			methodContainer.candidates.forEach( function(val, key) {
				var hitRatio = val.computeHitRatio();
				console.log(hitRatio);
				if(hitRatio > methodContainer.minimumHitRatio
					) {
					nextCandidates.push(val);
				}

			});
			console.log(JSON.stringify(nextCandidates));	
		}
	};
} ());
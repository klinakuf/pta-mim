(function () {
	// initial list of function
	var Cinit = [
		'simple',
		'fibonacci',
		'addition',
		'isBiggerThanTen'
	];
	
	// C is the set of memoizeit method candidates
	var C = [];
	// k is the depth of comparison
	var k = 1; 
	// Global variable to hold the current input;
	var currentInput;
	

	
	// Array of set of IO tuples of all methods
	
	var TClass = function () {
		this.methods = [];
	}
	TClass.prototype = {
		getMethodById: function (id) {
			// console.log('Retrieving method by id: '+ id);
			var foundMethod = {};
			this.methods.forEach(function (val, ind, temp) {
				// console.log('Comparing id '+val.methodId+' with the id '+ id);
				if (val.methodId === id) {
					// console.log('Found matching id');
					foundMethod = temp[ind];
					return;
				}

			});
			return foundMethod;
		}
	}



	var functionCallStack = new Array();

	var Tmethod = function (id) {
		this.methodId = id;
		this.tuples = [];
		// this keeps track of current tuple being processed
		this.currentTupleIndex;
	}

	Tmethod.prototype = {
		
		// associateOutput: function(i)
		
		addInput: function (input) {
			console.log('Checking of input:');
			console.log(JSON.stringify(input));
			var foundInput = false;
			this.tuples.forEach(function (value, index, temp) {
				if (value.input['0'] === input['0']) {	
					currentInput = input;
					// value.count++;
					// console.log('Input exist, incrementing the count');
					// this.currentTupleIndex = index;
					foundInput = true;
				}
				else {
					console.log('input does not exist create new input');
					
					this.currentTupleIndex = temp.length - 1;
				}
			});

			if (!foundInput) {
				// this.tuples.push({
				// 	input: input,
				// 	output: null,
				// 	count: 1
				// });
			}
		},
		// checks if input/output pair exists, increments count if so, else creates new input/ouput pair
		addIOpair: function(output){
			var foundIOPair = false;
			this.tuples.forEach(function (value, index, temp) {
				if (value.input['0'] === currentInput['0'] && output === value.output) {	
					value.count++;
					console.log('same input/output pair exist, incrementing the count');
					this.currentTupleIndex = index;
					foundIOPair = true;
				}
				else {
					console.log('output does not exist create new input');
					
					this.currentTupleIndex = temp.length - 1;
				}
			});

			if (!foundIOPair) {
				this.tuples.push({
					input: currentInput,
					output: output,
					count: 1
				});
			}		
		},

		getTuples: function () {
			return this.tuples;
		}
	};

	var T = new TClass();
	J$.analysis = {

		declare: function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
			if (!isArgument) {
				var method = name;
				console.log(method);
			}
		},

		functionEnter: function (iid, f, dis, args) {
			var id = J$.getGlobalIID(iid);
			console.log('The function ENTER iid is:' + iid);
			// functionCallStack.push(iid);
			// Input Output structure of the tuple
			// check if Tmethod already exists
			// if not create a new one
			var methodExist = true;
			T.methods.forEach(function (val, ind, tmp) {
				if (val.methodId === id) {
					// console.log('Adding Input to existing method');
					console.log(JSON.stringify(tmp[ind]));
					// tmp[ind].addInput(args);
					currentInput = args;
					console.log('Method consist of the following inputs');
					console.log(tmp[ind]);
					methodExist = false;
				}
			});

			if (methodExist) {
				// console.log('Creating new method');
				var t = new Tmethod(id);
				currentInput = args;
				// t.addInput(args);
				console.log(JSON.stringify(t));
				// if method exists then add input to args
				T.methods.push(t);
			}
			functionCallStack.push(id);
		},

		functionExit: function (iid, returnVal
			, exp) {
			var funcEnteredId = functionCallStack.pop();
			var currentMethod = T.getMethodById(funcEnteredId);
			console.log('Return val is: ');
			console.log(JSON.stringify(returnVal));
			console.log("The current method is:");
			
			currentMethod.addIOpair(returnVal);
			console.log(JSON.stringify(currentMethod));
			
			//currentMethod.addOutput(returnVal);

			
			
			// console.log('The function EXIT iid is:' + iid);
			console.log('The id is:' + funcEnteredId);
			// console.log('The array method consists of:');
			// console.log(JSON.stringify(T.methods));
		}


	};


} ());
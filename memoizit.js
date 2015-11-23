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
	

	
	// Array of set of IO tuples of all methods
	
	var TClass = function(){
		this.methods = [];
	}
	TClass.prototype = {
		getMethodById: function(id){
			this.methods.forEach(function(val, ind, temp){
				if(val.methodId === id){
					return temp[ind];
				}	
			});
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
			this.tuples.forEach(function (value, index, temp) {
				if (value.input === input) {	
					//temp[index].count++;
					this.currentTupleIndex = index; 
				}
				else {
					temp.push({
						input: input,
						output: null,
						count: 1
					});
					this.currentTupleIndex = temp.length - 1;
				}
			});
		},

		getTuples: function () {
			return this.tuples;
		}
	};

	var c = new Tmethod(234234);
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
			T.methods.forEach(function (val,ind,tmp) {
				if(val.methodId === id) {
					tmp[ind].addInput(args);
				}else{
					var t = new Tmethod(id);
					t.addInput(args);
					// if method exists then add input to args
					tmp.push(t);
				}
			});
			functionCallStack.push(iid);
		},

		functionExit: function (iid, returnVal
		, exp) {
		    var funcEnteredId = functionCallStack.pop();
			var currentMethod= T.getMethodById(funcEnteredId);
			
			console.log("The current method is:");
			console.log(JSON.stringify(currentMethod));
			
			//currentMethod.addOutput(returnVal);

			
			
			console.log('The function EXIT iid is:' + iid);
			console.log('The id is:' +  funcEnteredId);
		}


	};


} ());
var fs = require("fs");

var FileSystem = function(){
	// private variables
}

FileSystem.prototype = {
	fileExists: function(filePath){
		return fs.existsSync(filePath);
	},
	constructPath: function(root,filename){
		//check if filename exists
		//concat with root or something like that
	},
	fileSize: function(filePath){
		//return the size of specified file 
		// first chek if it exists with FileExist ...
	},
	calculateChunks : function(filePath,chunkSize){
		//it tells you how many chunks of the particular chunkSize the file contains
		// getting the size in bytes, and dividing it.
	},
	
	
	//other methods
}

var FS = new FileSystem();

var result = FS.fileExists('memoizit.js');
console.log(result);
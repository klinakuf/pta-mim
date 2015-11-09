(function(){
  var branches = {};
  var count = 0;
  var functions = {};
  J$.analysis = {
    /**
     * This callback is called after a condition check before branching.
     * Branching can happen in various statements
     * including if-then-else, switch-case, while, for, ||, &&, ?:.
     *
     * @param {number} iid - Static unique instruction identifier of this callback
     * @param {*} result - The value of the conditional expression
     * @returns {{result: *}|undefined} - If an object is returned, the result of
     * the conditional expression is replaced with the value stored in the
     * <tt>result</tt> property of the object.
    //  */
    // conditional : function (iid, result) {
    //         var id = J$.getGlobalIID(iid);
    //         var branchInfo = branches[id];
    //         if (!branchInfo) {
    //             branchInfo = branches[id] = {trueCount: 0, falseCount: 0};
    //         }
    //         if (result) {
    //             branchInfo.trueCount++;
    //         } else {
    //             branchInfo.falseCount++;
    //         }
    //     },
    
    functionEnter : function(iid, f, dis, args) {
        // console.log(iid);
        // console.log(args);
        var id = J$.getGlobalIID(iid)
        var functionsInfo = functions[id];
        if(!functionsInfo) {
          functions[id] = {
            input: [{
              args: args,
              count: 1
            }]
          }
        }else{
          
          var inputs = functions[id]["input"];
          var flag = false;
          var elemIndex;
          inputs.forEach(function(element,index,inputs) {
            if(JSON.stringify(inputs[index].args) === JSON.stringify(args))
            {
              flag = true;
              elemIndex = index;
              // inputs[index].count++;
            } 
            // else {
            //   inputs.push({
            //     args: args,
            //     count: 1
            //   })
            // }
          }, this);
          if(flag){
            inputs[elemIndex].count++;
          }else{
            inputs.push({
              args: args,
              count: 1
            });
          }
        }
    },
    
    _return : function(iid, value) {
      // console.log(value);  
    },
    
    functionExit : function(iid, returnVal, wrappedExceptionVal){
        // console.log(iid);
        // console.log(returnVal);
    },
    
    conditional : function (iid, result) {
      // console.log(iid);
      // console.log(result);
    },
    
    endExecution : function() {
      console.log(JSON.stringify(functions));
    }
};

}());

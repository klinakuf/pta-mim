# pta-mim
Memoization dynamic analysis with Jalangi 

Execution command to run the analysis on a Program.js file
node src_to_jalangi.js --inlineIID --inlineSource --analysis memoizit.js program.js


14.12.2015 - So today we wrote the calculator.js test case that has different methods and we test it out our analysis
The results observed were that the sum method is memoizable but the quadraticSolver and the dotProduct which have inputs/outputs
not primitive values returned a 0 hit ratio.

To run the analysis on a offline website locally

node jalangi2/src/js/commands/instrument.js --inlineIID --inlineSource -i --inlineJalangi --analysis pta-mim/memoizit.js --outputDir tmp/ zergnet


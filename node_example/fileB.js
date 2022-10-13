// brings in whatever fileA specified for export, in this case the "subtract" function

var functionFromFileA = require('./fileA.js');  // we can assign a variable to it

// we just gained the "subtract" function from fileA.js!
var result = functionFromFileA(4, 2);

console.log(result);

// var functionFromFileA
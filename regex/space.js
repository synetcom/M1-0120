let sample = " Check what the Regular Expression is ";

// This is the rule to search some patterns inside String
// finding space shows multiple time, not only once ig you use g = general(flag)
let countRegex = /\s/g;

let result = sample.match(countRegex);
console.log(result);

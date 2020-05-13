let quoteSample = "5 brave people";

// to negate, we use caret

let myRegex = /[^0-9aeiou]/gi;

let result = quoteSample.match(myRegex);

console.log(result);

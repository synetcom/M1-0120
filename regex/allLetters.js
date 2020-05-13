let quoteSample = "Hold12 Tight My Love"; //HTML
// checking all alphabets
let alphabetRegex = /[a-z]/gi;

let alphabetNumberRegex = /[2-6b-m]/gi;
let result = quoteSample.match(alphabetRegex);
let result1 = quoteSample.match(alphabetNumberRegex);
console.log(result);
console.log(result1);

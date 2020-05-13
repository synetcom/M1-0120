// let bgRegex =/b[aiu]g/;  can be big, bug, bag

let quoteSample = "Please tolerate to the last!";
let vowelRegex = /[aeiou]/gi;

let result = quoteSample.match(vowelRegex);

console.log(result);

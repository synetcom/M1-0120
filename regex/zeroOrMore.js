let longWord = "Aaaaaaaaaaaaaaargh!";

// zero or more occurence, we use *

let longRegex = /Aa*/;
let result = longWord.match(longRegex);

let result1 = longWord.replace(longRegex, "");

console.log(result);
console.log(result1);

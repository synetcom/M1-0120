let string = "titatnitc";
// greedy match will be 'titani'
// This one goes to the end and working hard to the end
let regex = /t[a-z]*t/;

// lazy match ? will be 'ti'
// zero to many occurence
// let regex = /t[a-z]*?a/;
// This one stops when it finds the first occurence

// let result = string.match(regex);
// console.log(result);

let text = "<h1>Covid-19 will end in June.</h1>";

// greedy match
// let myRegex = /<.*>/;

// lazy match
let myRegex = /<.*?>/;
let result = text.match(myRegex);
console.log(result);

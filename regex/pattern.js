let people = "P05PFF998CCCCPPP9ccc7Y7";

// search the pattern of CCC

let pattern = /C+/gi;
let result = people.match(pattern);

console.log(result);

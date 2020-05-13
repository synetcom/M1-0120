/*
1. If there are numbers, they must be at the ebd
2. Letter can be lowercase or uppcase
3. At least two characters long, two leeter means can't have numbers
*/

let userName = "RoseMaryKingdom128";

// starts from any characters with minimum 2 to unlimited and numbers at the end from zero to unlimited

let userCheck = /^[a-z]{2,}\d*$/i;

let result = userCheck.test(userName);

console.log(result);

let billAndMelinda =
  "Bill and  Melinda created the Bill and Meloinda Foundation";

//   caret means starting occurence of letter
let billRegex = /^Bill/;

let result = billRegex.test(billAndMelinda);

let result1 = billAndMelinda.match(billRegex);
console.log(result);
console.log(result1);

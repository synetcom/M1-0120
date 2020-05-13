let sampleString =
  "Long time years, there lived a man, his wife, his father man, and his little woman. kid live happily together for man years.";

// check multiple wors at the same time
// | (pipe or vertical bar) or

let manRegex = /man|woman|kid/g;
let result = sampleString.match(manRegex);
let result1 = sampleString.replace(manRegex, "***");

console.log(result1);

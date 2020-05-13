let timberString = "Tremeeeendously";

// exact number of characters match

let regex = /Treme{4}ndously/;

let result = regex.test(timberString);

console.log(result);

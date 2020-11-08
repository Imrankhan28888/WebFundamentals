var funStr = "Emma shreds on her electric cello";
console.log(funStr); // Emma shreds on her electric cello
console.log(typeof funStr); // "string"
var oneChar = funStr[26]; // "c"
console.log(typeof oneChar); // "string"

// String.length method
console.log(funStr.length); // 33
console.log("".length); // 0

//String.split (converts string to array, splitting on the provided parameter)

wordArray = funStr.split(" "); 
// Note: " " never appears in result: 
// [ "Emma", "shreds", "on", "her", "electric", "cello" ]
console.log(wordArray); 
console.log(wordArray [5].split("")); 
// Split on every letter:
// [ "c", "e", "l", "l", "o" ]  


//Array.join (converts array to string, using provided parameter as separator)

console.log(wordArray.join()); 
// Note: "," is used by default:
// "Emma,shreds,on,her,electric,cello"
console.log(wordArray.join("-")); 
// Param "-" inserted between words:
// "Emma-shreds-on-her-electric-cello"
console.log(wordArray.join("")); 
// "Emmashredsonherelectriccello"

console.log(1 + 2 + "3" + "4" + 5 + 6);
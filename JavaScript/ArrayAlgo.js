var testArr = [6,3,5,1,2,4];
var sum = 0;

for (var i=0; i < testArr.length; i++) {

console.log("Num: " +  testArr[i]);
sum = sum + testArr[i];
console.log("Sum" + sum);
testArr[i] = testArr[i] * i;

}

console.log(testArr);

// Num: 6
// Sum6
// Num: 3
// Sum9
// Num: 5
// Sum14
// Num: 1
// Sum15
// Num: 2
// Sum17
// Num: 4
// Sum21
// [ 0, 3, 10, 3, 8, 20 ]
function oneTotwotwentlyfiveArray() {

  var arr = [];
  

  for (var i = 1; i<=225; i++) {
        arr.push(i);
  }
  
  return arr;
    
}

var results = oneTotwotwentlyfiveArray();
console.log(results);


function Geteventhousand(){

    var sum = 0;

    for (var i = 0; i<=1000; i++) {
        if(i % 2 == 0) {
            sum = sum + i;
        }
    }
return sum;
}

var results = Geteventhousand();
console.log (results);


function Sumoddfivethousand() {

var sum = 0;

for(i=0; i<=5000; i++) {

    if(i % 2 == 1) {
        sum = sum + i;
    }

    }

    console.log(sum);

}

Sumoddfivethousand();


function IterateArray(arr) {

    var sum = 0;

    for (i=0; i<arr.length; i++) {
     
      sum = sum +  arr[i]; 

    }

    console.log(sum);

}


var arr = [1,2,5];
IterateArray(arr);


function Findmax(arr) {

    var result = arr[0];

for (i=0; i<arr.length; i++) {

    
  
    if (arr[i] > result) {

        result = arr[i];

    }

 }

 console.log(result);

}

var arr2 = [-3,3,5,7];
Findmax(arr2);


function findAvg(arr) {

    var sum = 0;

    for (var i=0; i<arr.length; i++) {
     
        sum = sum + arr[i];

    }
    
    return sum/arr.length;
}

var arr2 = [1,3,5,7,20];
var avg = findAvg(arr2);
console.log (avg);


function oddNumbers() {
    
    var arr = [];
    for (var i = 0; i <=50 ; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }

    }

    return arr;
}


function greaterY(arr, Y) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > Y) {
            sum = sum + 1
        }
    }

    return sum;
}


function squarevalue(arr) {

    var arr2 = [];

    for (let index = 0; index < array.length; index++) {
        
        
          arr2.push(arr[i] * arr[i]);
        
    }

    return arr2;
} 


function noNeg(arr) {

    for (let index = 0; index < array.length; index++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
        
    }
    
}


function maxMinAvg(arr) {

    var arr2 = [];
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    
for (let index = 0; index < array.length; index++) {
    if (arr[i] > max) {
        max = arr[i];
    }

    if (arr[i] < min) {
        min = arr[i];
    }

    sum = sum + arr[i];
}

arr2.push(max);
arr2.push(min);
arr2.push(sum/arr.length);

return arr2;

}


function swap(arr) {
    
  [arr[0], arr[arr.length -1]]  = [arr[arr.length -1], arr[0]];

  return arr;

}


function numToStr(arr) {

    for (let index = 0; index < array.length; index++) {
        if (arr[i] < 0);

        arr[i] = "Dojo"
        
    }

    return arr;
    
}



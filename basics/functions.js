// Write Reusable JavaScript with Functions

function functionName() {
    console.log("Hello World");
}

reusableFunction();


//   Passing Values to Functions with Arguments

function functionWithArgs(one, two) {
    var total = one + two;
    console.log(total);
}

functionWithArgs(1, 2);



//   Global Scope and Functions
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}



// Return a Value from a Function with Return
function timesFive(num){
    return num * 5;
  }
  
  timesFive();


//   Understanding Undefined Value returned from a Function

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);





// Stand in Line


function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift();
    return item;
    // Only change code above this line
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));



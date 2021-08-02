// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...arr] = [...source]; // Change this line

  console.log(arr);
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

// Create Strings using Template Literals

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    // Only change code below this line
    const failureItems = [];
    for(let i=0; i<arr.length;i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
      }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
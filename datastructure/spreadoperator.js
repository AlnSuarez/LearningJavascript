// Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

//   Combine Arrays with the Spread Operator

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence =[...fragment,'is','fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());



//   Check For The Presence of an Element With indexOf()

function quickCheck(arr, elem) {
    // Only change code below this line
    let check = arr.indexOf(elem);
    if(check === -1){
      return false;
    }else{
      return true;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
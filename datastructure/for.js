// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    let myRegex = /\d{0,}/;
    for(let i=0; i<arr.length;i++){
      if(arr[i].indexOf(elem)==-1){
        newArr.push(arr[i]);
      }else{
      }
    }
  
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



//   Create complex multi-dimensional arrays

let myNestedArray = [
    // Only change code below this line
    ['secondlevel'],
    [
      ['deep']
    ],
    [
      [
        ['deeper']
      ]
    ],
    [
      [
        [
          ['deepest']
        ]
      ]
    ]
    // Only change code above this line
  ];
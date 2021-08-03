// como hacer una promesa en js
const makeServerRequest = new Promise((resolve, reject) =>{

});



// Complete a Promise with resolve and reject


const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
      // Change this line
    } else {  
      reject("Data not received");
      // Change this line
    }
  });



//   result en una promesa
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  
  makeServerRequest.then(result =>{
    console.log(result);
  });

  makeServerRequest.catch(error =>{
    console.log(error);
  });
// Use export to Share a Code Block
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export {lowercaseString, uppercaseString};

//   Reuse JavaScript Code Using import

import { add } from './math_functions.js';


// como importar funciones o objetos de otra libreria
import as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");



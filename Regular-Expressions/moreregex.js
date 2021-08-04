// Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);



// Find Characters with Lazy Matching
/t[a-z]*i/

let reCriminals = /C+/; // Change this line

let patern = "P1P5P4CCCcP2P6P3";

let result = patern.match(reCriminals);
console.log(result);


// Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result);

// Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

// Match All Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);

// Match Everything But Letters and Numbers  \w

// You can search for the opposite of the \w with \W

// Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

// Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;


// Specify Upper and Lower Number of Matches
et ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);




// Using Objects for Lookups

// Setup
function phoneticLookup(val) {
    var result = "";
  
  
    var lookup ={
      alpha : "Adams",
      bravo : "Boston",
      charlie : "Chicago",
      delta : "Denver",
      echo : "Easy",
      foxtrot : "Frank"
    };
    
  
    result = lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");


//   Testing Objects for Properties

var myObj = {
    top: "hat",
    bottom: "pants"
  };
  myObj.hasOwnProperty("top");
  myObj.hasOwnProperty("middle");


//   Manipulating Complex Objects

var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
  

//   How to add new objects to an Array
  myMusic.push(
   {  artist: "Gorillaz",
      title: "Feel Good Inc",
      release_year: 2003,
      "formats": [
        "CD",
        "MP3",
        "MP4"
      ]
   }
  );
  
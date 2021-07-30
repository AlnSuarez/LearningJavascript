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



//   modifying objects in an array
// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(prop != "tracks" && value != ''){
      records[id][prop] = value;
    }else if(prop == "tracks" && records.id.hasOwnProperty(track) == false){
      records[id][prop] = [value];
    }else if(prop == "tracks" && value != ""){
      records[id][prop].push(value);
    }else if(value === ""){
      delete record[id][prop];
    }
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  
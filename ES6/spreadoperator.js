// Use the Spread Operator to Evaluate Arrays In-Place
// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

// The ES5 code below uses apply() to compute the maximum value in an array:

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
  
  // const today = HIGH_TEMPERATURES.today;
  // const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line

  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  
    
  
  
  // Only change code above this line
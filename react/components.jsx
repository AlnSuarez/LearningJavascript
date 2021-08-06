class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
            <NonCitrus />
            <Citrus />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
            <Fruits />
          { /* Change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };





  //Render a Class Component to the DOM
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
            <Fruits />
            <Vegetables />
          {/* Change code above this line */}
        </div>
      );
    }
  };
  
  // Change code below this line
  const node =document.getElementById('challenge-node');
  ReactDOM.render(<TypesOfFood/>,node);




//   Write a React Component from Scratch

// Change code below this line

class MyComponent extends React.Component{
    constructor(props){
      super(props)
    }
    
    render(){
      return(
        <div>
        <h1>My First React Component!</h1>
        </div>
      );   
    }
  }
  
  const node = document.getElementById('challenge-node');
  
  ReactDOM.render(<MyComponent/>,node);
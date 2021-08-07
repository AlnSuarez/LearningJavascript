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

//   Pass Props to a Stateless Functional Component

const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };




//   Pass an Array as Props
  const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(', ')}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks={["hacer la tarea","estudiar programacion"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["hola","hola2","hola3"]}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

//   Use Default Props

  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  
  ShoppingCart.defaultProps = {items: 0};


//   Override Default Props

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10}/>
      { /* Change code above this line */ }
    }
  };



//   Use PropTypes to Define the Props You Expect

  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = { quantity : PropTypes.number.isRequired}
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };




//   Access Props Using this.props

  class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            { /* Change code below this line */ }
            <ReturnTempPassword tempPassword={"reactJSX"}/>
            { /* Change code above this line */ }
          </div>
      );
    }
  };



//Set State with this.setState
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
      this.setState({
        name: "React Rocks!"
      });
  
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
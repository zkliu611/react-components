// var Cucumber = () => (
//   <li>
//     Cucumber
//   </li>
// );

// var Kale = () => (
//   <li>
//     Kale
//   </li>
// );


// var GroceryList = () => (
//   <ul>
//     <h2> My Grocery List </h2>
//     <Cucumber />
//     <Kale />
//   </ul>
// );

// var GroceryList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

//handle user event
// var GroceryListItems = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList todos={['Cucumber', 'Kale', 'Milk']}/> 
//   </div>
// );

// var GroceryList = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }

class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  };

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    <h2> My Grocery List </h2>
    {props.todo.map(todo => (
      <GroceryListItems todo ={todo} />
    ))}
  </ul>
);


ReactDOM.render(<GroceryList todo = {['Milk', 'Cucumber', 'Kale']}/>, document.getElementById('app'));






















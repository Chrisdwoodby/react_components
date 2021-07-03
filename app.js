class GroceryList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };

  }

  onClicked() {

    this.setState({
      done: !this.state.done
    });

  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through wavy blue' : 'none'
    };

    return (
      <li style={style} onClick={this.onClicked.bind(this)}>{this.props.food}</li>
    );

  }
}

var List = () => (
  <div>
    <h2>My Grocery List</h2>
    <FoodList items = {['bread', 'carrots', 'salmon']}/>
  </div>
);

var FoodList = (props) => (

  <ul>
    {props.items.map(food =>
      <GroceryList food={food} />
    )}
  </ul>

);


ReactDOM.render(<List />, document.getElementById("app"));
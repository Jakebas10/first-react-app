import React, { Fragment, Component } from "react";  
import ListItems from "./ListItems";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listItems: []
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    let newItem = document.getElementById("itemText").value;
    let newList = this.state.listItems;
    newList.push(newItem);
    this.setState({
      listItems: newList
    })
  }

  render() {
    return (
      <Fragment>
        <input id="itemText" type="text"/>
        <button onClick={this.addItem}>
          Add
        </button>
        <ListItems list={this.state.listItems}/>
      </Fragment>
    );
  }
}

export default App;
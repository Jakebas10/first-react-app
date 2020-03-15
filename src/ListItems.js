import React, { Component } from "react";

class ListItems extends Component {

    constructor(props) {
      super(props);
      this.state = {
          items: this.props.list
      };
    }

    render() {
      return(
        <ul>
          {this.state.items.map(item => (
            <li>{item}</li>  
          ))}
        </ul>
      );
    }

}

export default ListItems;
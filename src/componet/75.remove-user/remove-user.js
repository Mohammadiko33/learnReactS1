import React, { Component } from "react";
import "./remove-user.css";

export default class Remove_user extends Component {
  clickHandler(id) {
    this.props.onRemove(id);
  }

  render() {
    return (
      <li>
        {this.props.name}
        <button onClick={this.clickHandler.bind(this, this.props.id)}>
          remove
        </button>
      </li>
    );
  }
}

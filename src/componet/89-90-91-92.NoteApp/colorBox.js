import React, { Component } from "react";

export default class colorBox extends Component {
  clickHandler(color) {
    this.props.onColor(color);
   }
   
   render() {
    return (
      <div className="color" onClick={this.clickHandler.bind(this, this.props.color)} style={{ backgroundColor: this.props.color }}></div>
    );
  }
}
import React, { Component } from "react";

export default class Product extends Component {

constructor(props) {
 super(props);


}

addTocartHandler(id){
 this.props.onAdd(id)
}

  render() {
    return (
      <div className="album">
        <h3 className="produckt_name">{this.props.name}</h3>
        {/* <img className="main_image" src="./film82-83-84/225image1.png" /> */}
        <img className="main_image" src={this.props.image} />
        <div className="btns_prices">
          <p className="price">{this.props.price}</p>
          <button className="btn" onClick={this.addTocartHandler.bind(this, this.props.id)}> add to cart </button>
        </div>
      </div>
    );
  }
}

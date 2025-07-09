import React, { Component } from 'react'

export default class CartProduct extends Component {

  constructor(props){
    super(props)

    this.state = {}
  }

  clickHandler(id , e){
    this.props.onRemove(id , e)
  }

  changeQuantityHandler(id, e){
    const quantity = parseInt(e.target.value, 10);
    this.props.onUpdate(id, quantity);
  }

  render() {
    return (
      <div className="buyed_produckt">
        <div className="item_buy">
          <img src={this.props.image} alt={this.props.name} />
          <p>{this.props.name}</p>
        </div>
        <div className="price_buy">
          <p className="price">{(this.props.price * this.props.quantity).toFixed(2)}</p>
        </div>
        <div className="quantity_buy">
          <input 
            type="number" 
            value={this.props.quantity} 
            min="1" 
            max="99" 
            onChange={this.changeQuantityHandler.bind(this, this.props.id)} 
          />
          <button className="remove_btn" onClick={this.clickHandler.bind(this , this.props.id)}>REMOVE</button>
        </div>
      </div>
    )
  }
}

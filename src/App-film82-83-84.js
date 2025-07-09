import React, { Component } from "react";
import "./componet/82-83-84.ShopingCart/App.css";
import Header from "./componet/82-83-84.ShopingCart/ShopingCart-header";
import Footer from "./componet/82-83-84.ShopingCart/ShopingCart-footer";
import Product from "./componet/82-83-84.ShopingCart/Product";
import CartProduct from "./componet/82-83-84.ShopingCart/CartProduct";

export default class App__film82_83_84 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          name: "Album 1",
          image: "./film82-83-84/225image1.png",
          price: 12.99,
        },
        {
          id: 2,
          name: "Album 2",
          image: "./film82-83-84/225image2.png",
          price: 14.99,
        },
        {
          id: 3,
          name: "Album 3",
          image: "./film82-83-84/225image3.png",
          price: 9.99,
        },
        {
          id: 4,
          name: "Album 4",
          image: "./film82-83-84/225image4.png",
          price: 19.99,
        },
        {
          id: 5,
          name: "T-shirt",
          image: "./film82-83-84/225image5.png",
          price: 24.99,
        },
        {
          id: 6,
          name: "Coffee",
          image: "./film82-83-84/225image6.png",
          price: 6.99,
        },
      ],
      cart: [],
      tatol: 0
    };
    this.removableHandler = this.removableHandler.bind(this);
    this.updateQuantityHandler = this.updateQuantityHandler.bind(this);
  }

  addToProductHandler(id) {
    const product = this.state.products.find((product) => product.id === id);
    const cartProduct = this.state.cart.find((product) => product.id === id);
    
    if (cartProduct) {
      this.updateQuantityHandler(id, cartProduct.quantity + 1);
    } else {
      this.setState((prevState) => ({
        cart: [...prevState.cart, { ...product, quantity: 1 }],
        tatol: prevState.tatol + product.price
      }));
    }
  }

  removableHandler(userID , e) {
    const product = this.state.cart.find((product) => product.id === userID);

    this.setState(prevState => ({
      cart: prevState.cart.filter(product => product.id !== userID),
      tatol: prevState.tatol - (product.price * product.quantity)
    }));
  }

  updateQuantityHandler(id, quantity) {
    if (quantity < 1 || quantity > 99) return;

    this.setState(prevState => {
      const cart = prevState.cart.map(product => {
        if (product.id === id) {
          return { ...product, quantity };
        }
        return product;
      });

      const tatol = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);

      return { cart, tatol };
    });
  }

  removeAllProductHandler(){
    this.setState({
      cart: [],
      tatol: 0
    });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          {this.state.products.map((product) => (
            <Product
              {...product}
              key={product.id}
              onAdd={this.addToProductHandler.bind(this)}
            />
          ))}
          <img
            src="./film82-83-84/225Cart.png"
            alt="cart"
            className="cartIcon"
          />
          <div className="cart">
            <div className="soratHasab__header">
              <h3 className="item_title">ITEM</h3>
              <h3 className="item__price">PRICE</h3>
              <h3 className="item__quantity">QUANTITY</h3>
            </div>
            <div className="soratHasab">
              {this.state.cart.length > 0 &&
                this.state.cart.map((cartt) => (
                  <CartProduct {...cartt} key={cartt.id} onRemove={this.removableHandler} onUpdate={this.updateQuantityHandler} />
                ))}
            </div>

            <div className="tatols_price">
              <h3 className="tatol">TOTAL</h3>
              <p className="price result">{this.state.tatol.toFixed(2)}</p>
            </div>

            <button className="purch" onClick={() => this.removeAllProductHandler()}>PURCHASE</button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

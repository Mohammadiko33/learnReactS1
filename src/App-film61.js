import React, { Component } from 'react'
import './App.css'

export default class Film61 extends Component {

 constructor(props) {
  super(props)


  
 }

clickHandler(n1 , n2 , event){
console.log("Number1:" , n1 , "Number2:", n2 , "|| Number1 + Number2 =" , n1 + n2)
console.log(event)
console.log(event.target)
console.log(event.target.innerHTML)
console.log(event.pageY)
console.log(event.pageX)
}

  render() {
    return (
      <div>
        <h1>this is react componet</h1>
        <button onClick={this.clickHandler.bind(this , Math.floor(Math.random() * 10),Math.floor(Math.random() * 10))}>Click Me</button>
        <button onClick={(event) => this.clickHandler(Math.floor(Math.random() * 100)  ,  Math.floor(Math.random() * 100) , event)}>Click Me</button>
      </div>
    )
  }
}

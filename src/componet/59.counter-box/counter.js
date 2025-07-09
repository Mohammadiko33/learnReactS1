import './couner.css'

import React, { Component } from 'react'

export default class counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 1,
    }

    this.addHandler = this.addHandler.bind(this) 
    this.minsHandler = this.minsHandler.bind(this) 
    document.body.addEventListener("keydown" , (event) => {
      if (event.keyCode === 107){
        this.addHandler()
      }
    })
document.body.addEventListener("keydown" , (event) => {
  if (event.keyCode === 109){
    this.minsHandler()
  } 
})
    
  }
  addHandler(){
    if (this.state)
    
    
this.setState(prevstate => {

  if (prevstate.counter > 98){
    prevstate.counter = 0
  }
  return {counter: prevstate.counter + 1}
})
  }
minsHandler(){

this.setState(prevstate => {

  if (prevstate.counter < 2){
    prevstate.counter = 100
  }
  return {counter: prevstate.counter - 1}
})
}

  render() {
    return (
      <section className='counter_section'>
       <h3 className="counter_name">counter</h3>
       <h1 className="counter">{this.state.counter}</h1>
       <div className="counter_btns">
        <button id='addBTNCount' className="counter_btn" onClick={this.addHandler}>added</button>
        <button id='mineBTNCount' className="counter_btn" onClick={this.minsHandler}>mines</button>
       </div>
      </section>
    )
  }

}
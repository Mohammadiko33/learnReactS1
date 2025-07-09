import './deg.css'
import React, { Component } from 'react'
export default class deg extends Component {

 constructor(props) {
  super(props)

this.addDegHandler = this.addDegHandler.bind(this)
  this.minusDegHandler = this.minusDegHandler.bind(this)
  document.body.addEventListener("keydown" , (event) => {
   if (event.keyCode === 107){
     this.addDegHandler()
   }
  })
  document.body.addEventListener("keydown" , (event) => {
  if (event.keyCode === 109){
  this.minusDegHandler()
  } 
  })

this.state = {
 degWeather: 15,
 degContinerClassName: "normalWeather"
}


 }

 
 addDegHandler(){
  if (this.state.degWeather > 39){
   return false
  }
  
  this.setState(prevState => {
   return {degWeather : prevState.degWeather + 1}
  })
  this.checkDegNum()
 }
 
minusDegHandler(){
 if (this.state.degWeather < -9){
  return false
   }
  
   this.setState(prevState => {
    return {degWeather : prevState.degWeather - 1}
   })
   this.checkDegNum()

}

checkDegNum(){
 if (this.state.degWeather <= -5){
  this.state.degContinerClassName = "varyColdWeather"
 }
 if (this.state.degWeather > -4  && this.state.degWeather <= 10){
  this.state.degContinerClassName = "coldWeather"
 }
 if (this.state.degWeather > 11  && this.state.degWeather <= 25){
  this.state.degContinerClassName = "normalWeather"
 }
 if ( this.state.degWeather > 26 && this.state.degWeather <= 35){
  this.state.degContinerClassName = "hotWeather"
 }
 if (this.state.degWeather > 36){
  this.state.degContinerClassName = "varyHotWeather"
 }
}


  render() {
    return (
     <div className='degCounter'>
     <div className={`circleMain ${this.state.degContinerClassName}`}>
      <span id="deg">{this.state.degWeather}</span><span className="typeDeg">^C</span>
     </div>
     <div className="degBtns">
      <button className="degAddBTN degbtn" onClick={this.addDegHandler}>+</button>
      <button className="degMinsBTN degbtn" onClick={this.minusDegHandler}>-</button>
     </div>
  </div>
    )
  }
}

// کاربرد استیت ذخیره سازی اطلاعات و جزعیات اون کامپونت داخل خودش هستش
/* deg <= -5 */
/* deg <= 10 */
/* 11 > deg <= 25 */
/* 26 > deg <= 35 */
/* 36 > deg */

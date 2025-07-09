import React, { Component } from 'react'
import './App.css'
import './componet/App63.css'

export default class Film63 extends Component {

 constructor(props) {
  super(props)

    this.state = [
566,4665,54,3,4,5
    ]
 }

  render() {

    let massage = null 

    if (this.state.length){
      massage = <li className="headerListItem">Notification<span className="NotificationCount">{this.state.length} {this.state.length > 9}</span></li>
    } else {
      massage = ""
    }

    return (
      <nav>
         <h3 className="headerUser">MohammadIko</h3>
         <ul className="headerList">
            {massage}
         </ul>
      </nav>
    )
  }
}

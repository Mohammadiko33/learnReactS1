import React, { Component } from 'react'
import './App.css'
import Users from './componet/64.User/user'

export default class Film63 extends Component {

 

   state = {
    users: [
      {id: 1, name: "mohammad" , age: 18},
      {id: 2, name: "reza" , age: 16},
      {id: 3, name: "amir" , age: 19},
      {id: 4, name: "ali" , age: 22},

    ]
   }
 

  render() {
    // return (
    //   <div>
    //      <Users {...this.state.users[0]}/>
    //      <Users {...this.state.users[1]}/>
    //      <Users {...this.state.users[2]}/>
    //      <Users {...this.state.users[3]}/>
    //   </div>
    // )


    return (
     <div>
       {this.state.users.map(user => (
        <Users {...user}/>
       ))}
     </div>
    )
  }
}

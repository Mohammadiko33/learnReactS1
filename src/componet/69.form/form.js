import React, { Component } from "react";
import "./form.css";

export default class form extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      allValid: false,
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      submitted: false
    }


  }

  dontSubmitHandler(e){
      e.preventDefault()

      
      if (this.state.userFirstName && this.state.userLastName && this.state.userEmail){
        this.setState({
          submitted: true
        })
        if (this.state.userFirstName.length > 2 && this.state.userLastName.length > 3 && this.state.userEmail.length > 12){
            this.setState({
              allValid: true
            })
          }
      } else {
        // console.log("please enter a user first last name and email")
      }

      



  }

  

  setStateFirstNameHandler(e){
    this.setState({
      userFirstName: e.nativeEvent.target.value
    })
  }
  setStateLastNameHandler(e){
    this.setState({
      userLastName: e.nativeEvent.target.value
    })
  }
  setStateEmailHandler(e){
    this.setState({
      userEmail: e.nativeEvent.target.value
    })
  }



  render() {

    if (this.state.allValid){
      setTimeout(() => {
        this.setState({
          allValid: false,
          userFirstName: "",
          userLastName: "",
          userEmail: "",
          submitted: false
        })
      }, 3000);
    }
    
    let massageFL = null
    if (this.state.submitted){
        if (this.state.userFirstName.length < 2){
            massageFL = <p className="visibledMassage">please enter a First name</p>
           } else {
            massageFL = null
           }
        }
    let massageLN = null
    if (this.state.submitted){
        if (this.state.userLastName.length < 3){
          massageLN = <p className="visibledMassage">please enter a Last name</p>
           } else {
            massageLN = null
           }
        }
    let massageEL = null
    if (this.state.submitted){
        if (this.state.userEmail.length < 12){
          massageEL = <p className="visibledMassage">please enter a Email</p>
           } else {
            massageEL = null
           }
        }
    return ( 
      <form action="#" onSubmit={e => this.dontSubmitHandler(e)}>
          {/* //   {this.state.age > 18 && (
   //    <h1>شما مجاز به ورود هستید</h1>
   //   )} */}
        {this.state.allValid && (<div className="accpet_Sign_up"><p className="accpet_Sign_up__massage">sucsess ! you are loged in</p></div>)}
        <input
          id="firstName"
          type="text"
          onChange={e => this.setStateFirstNameHandler(e)}
          value={this.state.userFirstName}
          placeholder="First Name"
          // minLength={3}
          maxLength={35}
          autoFocus
          // required
          />

          {massageFL}
        <input
          id="lastName"
          type="text"
          onChange={e => this.setStateLastNameHandler(e)}
          value={this.state.userLastName}
          placeholder="Last Name"
          // minLength={4}
          maxLength={35}
          // required
          />
          {massageLN}
        <input
          id="userEmail"
          type="userEmail"
          onChange={e => this.setStateEmailHandler(e)}
          value={this.state.userEmail}
          placeholder="Email"
          // minLength={5}
          maxLength={40}
          // required
        />
        {massageEL}
        <button type="submit" placeholder="Register">
          Register
        </button>
      </form>
    );
  }
}
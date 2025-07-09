import React, { Component } from "react";
import "./App.css";
import "./componet/App-film68.css";
import Option from "./componet/68.option-select/option-select"

export default class film68 extends Component {

    constructor(props) {

    super(props)


      this.state = {
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        userPassword: '',
        userProtocol: false,
        userCaption: '',
        userJob: ''
      }

      this.state = {
        programingJob : [
          {id: 1 , job: "frontEnd"},
          {id: 2 , job: "BackEnd"},
          {id: 3 , job: "application developer"},
          {id: 4 , job: "windows application developer"},
          {id: 5 , job: "fullStack developmer"},
          {id: 6 , job: "ai developer"},
          {id: 7 , job: "game developer"}
        ]
      }

    }

dontCopyCutPasteHandler(e){
  e.preventDefault()
}


clickHandler(event){
 event.target.type = "text"
 
 setTimeout(() => {
  event.target.type = "password"
 }, 2500);
}

userFirstName(e){
  this.setState({
    userFirstName: e.nativeEvent.target.value
  })
}
userLastName(e){
  this.setState( {
    userLastName: e.nativeEvent.target.value
  })
}
userEmail(e){
  this.setState({
    userEmail: e.nativeEvent.target.value
  })
}
userPassword(e){
  this.setState( {
    userPassword: e.nativeEvent.target.value
  })
}
userCaption(e){
  this.setState({
    userCaption: e.nativeEvent.target.value
  })
}
userProtocol(e){
console.log(e)
this.setState({
  userProtocol: e.target.checked
})
}
userJobChoiceHandler(e){
  console.log(e)
  // this.setState({
  //   userJob: e.target.
  // })
}



  render() {
    return (
      <form onSubmit={e => this.dontCopyCutPasteHandler(e)}>
        <input type="text" placeholder="Enter your FirstName" value={this.state.userFirstName} onChange={e => this.userFirstName(e)}  minLength={3} maxLength={35} autoFocus />
        <input type="text" placeholder="Enter your LastName" value={this.state.userLastName} onChange={e => this.userLastName(e)}  minLength={4} maxLength={35}  />
         <input type="email" placeholder="Enter your Email" value={this.state.userEmail} onChange={e => this.userEmail(e)} minLength={13} maxLength={50}/>
        <input type="password" placeholder="Enter Your Password" value={this.state.userPassword} onChange={e => this.userPassword(e)} onPaste={e => this.dontCopyCutPasteHandler(e)} onCut={e => this.dontCopyCutPasteHandler(e)} onCopy={e => this.dontCopyCutPasteHandler(e)} onClick={event => this.clickHandler(event)} minLength={4} maxLength={35} />
        <div>
          <label htmlFor="checkBoxInput">تمام قوانین فوق را مطالعه کردم</label>

          <input
            id="checkBoxInput"
            type="checkbox"
            checked={this.state.userProtocol}
            onChange={e => this.userProtocol(e)}
            name="checkBoxInput"
          />
        </div>

        <select id="">
          <option value="">choice your job</option> 
          {this.state.programingJob.map(job => 
            <Option {...job}/>
          )}
          </select>

        <textarea value={this.state.userCaption} onChange={e => this.userCaption(e)} placeholder="Caption" minLength={18} maxLength={300}/>
        <button type="submit" className="submitBTN">submit</button>
      </form>
    );
  }
}
// توضیحات 
// نیتیو ایونت همان ابجکتی هستش که که توی جی اس خام و وانلا جی اس توی بخش ایونت هندلینگ توی ایونت بهش دسترسی داشتیم 
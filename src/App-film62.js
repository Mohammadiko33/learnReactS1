import React, { Component } from 'react'
import './App.css'

export default class film62 extends Component {

    constructor(props){
     super(props)

     this.state = {
      age : 19
     }
    }

  render() {
   // if (this.state.age > 18){
   //  return (
   //   <div>
   //    <h1>شما مجاز به ورود به وبسایت هستید</h1>
   //   </div>
   //  )
   // } else {
   //  return (
   //   <div>
   //         <h1>شما مجاز به ورود به وبسایت نیستید</h1>
   //   </div>
   //  )
   // }

   // let massage;

   // if (this.state.age > 18){
   //  massage = <h1>شما میتوانید وارد پنل کاربری خود شوید</h1>
   // } else {
   //  massage = <h1> شما اجازه ندارید وارد پنل کاربری خود شوید  </h1>
   // }

   // return (
   //  <div>
   //   {massage}
   //  </div>
   // )

   // return (
   //  <div>
   //   {this.state.age > 18 && (
   //    <h1>شما مجاز به ورود هستید</h1>
   //   )}
   //  </div>
   // )

   return (
    <h1>
     شما 
        {this.state.age > 18 ? "میتوانید" : "نمیتوانید"} 
     وارد حساب کاربری خود شوید
    </h1>
   )
  }
}

// توضیخات
// Condition Rendering
// رندر های شرطی و زمانی استفاده میشه که من بخام یم قسمت از کامپونت و حی اس سیکسم بنا به شرایط و شرط هایی که دارم احرا بشه
// یعنی اکر شرطی تورو باشه یک ثسمت از کامپونتم اجرا بشه اما اگر شرط من فالس باشه وتورو نباشه یک چیز دیگه میخام به کاربر نمایش بدم به همین کوضوغ میگن رندر های شذطی
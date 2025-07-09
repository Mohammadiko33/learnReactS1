import React, { Component } from 'react'
import Remove_User from './componet/75.remove-user/remove-user'

export default class Film75 extends Component {
  constructor(props) {
   super(props)

   this.state = {
    users: [
      {id: 1, name: "mohammad"},
      {id: 2, name: "reza"},
      {id: 3, name: "amir"},
      {id: 4, name: "ali"},
    ]
   }

   this.removeHandler = this.removeHandler.bind(this)

  }

  removeHandler(userID){

    let oldUser = [...this.state.users]
    console.log("step1 state saving to user" , oldUser)


    let usersfindingIndex = oldUser.findIndex(user => user.id === userID)
    console.log("step2 finding index" ,usersfindingIndex)

    oldUser.splice(usersfindingIndex , 1)
    console.log("step3 slicing with index" , oldUser)

    this.setState({
      users: oldUser
    })
  }

  restoreUserHandler(){
    this.setState({
      users: [
        {id: 1, name: "mohammad"},
        {id: 2, name: "reza"},
        {id: 3, name: "amir"},
        {id: 4, name: "ali"},
      ]
    })
  }


  render() {
    return (
    
      <ul>
        {!this.state.users.length && (
          <button onClick={() => this.restoreUserHandler()}>restore users</button>
        )}
        {this.state.users.map(user => (
          <Remove_User key={user.id} {...user} onRemove={this.removeHandler}/>
        ))}
      </ul>
    )
  }
}

// من توی این فایل در جایی که روی یوزر مپ زدیم در ریمو یوزر جایی که اسپرت سینتکس یوزر رو ارسال کردیم هم ایدی و هم نیم هر یوزر رو ارسال کریدم داخل کامپونت 75 ریمور یوزر و سپس گفتم که بجز این دیتا های هر ابجکتم که با پراپ براش ارسال کردیم یک دونه برام پراپ هم داشته باش به اسم ان ریمو که مقدارش همین متدد ریمور هندلر باشه و اینجا هم گفتم که اگر روی این دکمه ی از هر یوزرم عمل ان کلیک اتفاق افتاد برای من متدد ریمو هندلر فراخانی بشه اجرا و فراخانی بشه و داخلش چه چیزی اجرا کردم از همین پراپ هاش متدد ان ریور رو ان ریمو ببه چه چیزی رفرنس و ارجاع داده بود به همین ریمو هندلر و سپس براش یک یک ایدی هم  ارسال کردم و اینجا برای ما ایدی داخل ریمو هندلر یک بار لاگ خواهر گرفت
// ما با این روش میتونیم بجز دیتا های نامبر و استرینگ و بولین متدد هم ارسال بکنیم داخل کاپونت و داخل اون کامپونت ااز اونجایی که نیاز داریم استفاده بکنیم 
// دقت داشته باشیم که برای ارسال ورودی کامپونت متدد پرانتز نداره و اجرا هم نمیشه فقط رفرنس میدیم که یک همچین مقدار ان ریمو و پراپی رو داریم که ولیوش متدد ریمو هندلر اما اونجا اجراش نمیشه میره توی کامپونت ریمور یوزر اونجا اونوقت که بهش نیاز داشته باشیم اجرا میکنیم از کجا از پراپز 
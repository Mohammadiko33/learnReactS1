import React, { Component } from "react";
import User from "./componet/54.state/users_film54";
import "./App.css";
export default class App_film54 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: "mohammad" },
        { id: 2, name: "reza" },
        { id: 3, name: "amir" },
        { id: 4, name: "ali" },
      ],
      scores: [15, 30, 45, 60, 75],
      count: 0,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.code = 25;
  }

  clickHandler() {
    this.code = 100;
    console.log(this);
  }

  keyUpHandler() {
    console.log("type Shod");
    console.log(this);

    // this.state = {

    // }
  }

  changeUserHandler() {
    // this.setState({
    //   user: [
    //     {id: 1, name: "amin"},
    //     {id: 2, name: "babak"},
    //     {id: 3, name: "sasan"},
    //     {id: 4, name: "ashkan"},
    //   ]
    // })
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <ul>
        <button
          className="changeUserBTN"
          onClick={this.changeUserHandler.bind(this)}
        >
          click to change user
        </button>
        <User {...this.state.users[0]} />
        <User {...this.state.users[1]} />
        <User {...this.state.users[2]} />
        <User {...this.state.users[3]} />
      </ul>
    );
  }
}

// توضیحات
// خلاصه قسمت قبل : ما نمیتونیم یک استیتی رو طور دستی و خودمون اپدیتش بکنیم به عنوان مثال من اگر در فانکشن کیاپ هندلر بخام بگم که از این کلاس کامپونتم مقدار استیتم برابر با یک ابجکتی باشه این روش اشتباهه و حتی  استیت من نخواهد شد واگر اپدیت بشه به هیچ عنوان بیاد باعث ریرندر بشه یعنی استیتم اگر بخواهد انچنچ بشه و اتفاقی روی استیت بیوفته و محتواش عوض بشن و چنج بشن باز هم رندر مجدد اتفاق نمیافتد و جی اس سیکس و دام من همون اطلاعات قبلی رو دارم و روش استندارد و اصولی برای تغییر استیت چیه استفاده از متددی به نام استیت و چونکه یک متده جلوش پرانتز باز و بستهقرار میدیم و العان برای تغییر استیت با این متدد به طور کلی دوتا روش وجود داره که توی این جلسه به اون دوتا روش میپردازیم
// پس من اگر بخام روی باتن یک عمل کلیک بکنم برای من داخل متدد چنج یوزر هندلر میاد و یک بار ست استیت انجام میده و بجای استیت یوزر هام این هارو قرار میده ولی چونکه العان استیتمون چنج میشه و اپدیت میشه ریاکت میاد خود به خود بخش دامهم برامون اپدیت میکنه و ریاکت میاد خود به خود توی دام هم واسمون اپدیت میکنه و اینجا برای ما بجای یوزر های محمد رضا امیر  و علی مقادیر امین ساسان بابک و اشکان قرار میگیره
// روش بعدی اینکه ست استیت از ما یک ورودی میگیره پس من در فانکشن چنج یوزر هندلر یک ارو فانکشن ارسال میکنم و میگم برای من یک ورودی هم دریافت بکن به اسم پریو استیت همونطور که از اسمشم مشخصه یک پرامت هم توی توی فانکشن دریافت میشه له اسم دلخواه که من توی این قسمت بخاطر خانایی بالای کد اسمشو پریو استیت قرار میدم داخل این فانکشن من به این ورودی دسترسی دارم به اسم پرویو استیت و پریو استیت همان استیت قبلی من هستش به طور کلی یعنی العان توی قسمت دیس ست استیت پریو استیت اگه بخوام بگم برای من لاگ بگیر یک مقدار پروی استیت برای من یک مقدار قبلی رو لاگ خواهد گرفت
// اما ما چرا بهش یک متدد ارسال میکنیم توی این قسمت دیس ست استیت  پریو استیت  چرا بهش یک فانشن پاس میدیم ما داخل فانشکن گاها وقتی که میخایم استیتی رو عوض کنیم به مقدار قبلی استیت هم نیاز داریم
// به ظور کلی داخل کلاس کامپونت ها استیت یک ابجکت هست و برای دسترسی به پروپرتی های اون از دات استفاده میشه و توی این بخش یوزر کامپونت ها گفتم دیس دات استیت دات یوزر یعنی اگه بخام از اسکور ها هم استفاده بکنم دیس دات استیت دات اسکور
// روش بعدی اینکه ست استیت از ما یک دونه فانکشن به عنوان ورودی میگیره پس من توی این قسمت براش یک ارو فانکشن اینجا داخل ست استیت ارسال میکنم و میگم که برای من یک ورودی هم دریافت بکنن به اسم پریو استیت همونطور که از اسمشم مشخصع توی این قسمت داخل فانکشن که برای ست استیت به عنوان ورودی و پرامت ارسال میکنیم یک پرامت هم توی فانکشن دریافت میشه به اسم دلخواه داخل این فانکشن من به این ورودی دسترسی دارم و پریو استیت همان استیت قبلی من هستش به طور کلی یعنی توی این قسمت داخل فانکشن چنج یوزر هندلر دیس دات ست استیت پریو استیت
// اما ما چرا داخل فانکشن دیس ست استیت با ورودی پریو استیت یک فانکشن اسرال میکنیم یک فانکشن پاس میدیم ما داخل فانکشن گاها وقتی که میخایم استیتی رو عوض بکنیم به مقدار قبیلی استیت هم نیاز داریم بع عنوان مقال من توی این قسمت پایین اسکور ها یک مقدار کانت میخام داشته باشم که میگم مقدار دیفالتش باشه صفر و سپس داخل این فانکشن یا مقدار ارو فانکشن که به ست استیت پاس دادن میگم بیا برای من اینجا ریترن بکن یک ابجکتی رو و سپس میگم که از پریو استیتم مقدار کانتش رو به علاوه یک بکن و البته کانت دو نقطه همچین چیزی
// یعنی من توی این قسمت گفتم که یک بار ریترن رو انجام بده و توی این فانکشن هر چیزی که ریترن بشه میره بجای استیت مورد نظر اینجا قرار میگیره یا بجای یوزر یا اسکور یا کانت
// پس من که توی قسمت دیس دات ست استیت گفتم یک چیزی رو برای من ریترن بکن میاد مقدار کانت رو برابر به چه چیزی قرار بده برابر با استیت قبلی مقدار پروپرتی قبلی ما کانتش به علاوه یک میشه مقدار جدید پروپتی کانت و این چیزی که برای ما ریترن میشه میره ست استیت میشه بجای استیت قدیمی ما
// پس ما زمانی به ست استیت عمدتا یک فانکشن ارسال میکنیم که بخایم یک استیت تغییر بدیم و میخایم طوری تغییر بدیم که به مقدار اون استیت که به مقدار قبلیشم مرطبتمون یعنی من میخام کانتم عوض بشه اما میخام مقدار جدید و اپدیت شده کانتم به علاوه یک کانت قبلی بشه یعنی برای اپدیت به کانت قبلی نیاز دارم پس اینجا اصولی برای یک فانکشن ارسال کنی و داخلش یک چیزی رو ریترن بکنیم که میخایم اون پروپرتی از استیت چنج بشه اما میتونیم قبل از اینکه ریترن انجام بدیم کل چیز دیگه مثل شرط حلقه  همه چی میتونیم قبلش انجام بدیم
// اما به طور دیفالت و کلی زمانی که میخاین استیتی رو اپدیت بکنید اما اپدیتش به مقادیر قبلی مرتب نیس و وابسته به اونا نیستش از همین روش ااول استفاده بکنید
// اما زمانی که نیاز دارین اپدیتی رو جوری انجام بدین که مقدار اپدبت و مقدار جدید شما به مقدار قبلی اون استیت هم وابسته است توی همچین حالتی سعی کنید که یک فانکشن به ست استیت پاس بدید و سپس داخل این فانکشن هر کاری که میخاین انجام بدیم رو انجام بدیم و سپس اون ابجکت رو ریترن بکنید و اپدیت انجام بشه
// به اعضای هر ست استیت یک بار دام ما و جی اس سیکس ما و ویرچال دام ما ریرندر میشه

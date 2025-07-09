import React from "react";
import "./film47.css";

export default function film47({ massage }) {
  return (
  <div className="continer">

    <div className="modal_massage">
        <div className="modal_header__content">
          <div className="modal_header">
            <span className="modal_close">x</span>
          </div>
          <div className="modal_content">
            <h3 className="modal_title">{massage}</h3>
          </div>
        </div>
        <div className="modal_btns_footer">
          <button className="modal_btn">تایید</button>
          <button className="modal_btn">بازگشت </button>
        </div>
    </div>
            <h1>mohammadiko</h1>
  </div>
  );
}

// توضیحات
// من هرکجا که هر کامپونت که بخوام استفاده کنم میتونم داخل چیلدرنش هر چیزی که میخام رو قرار بدم اما یکی از کاربرد های خیلی خفن تر
// یک مثال برای کاربرد چیلدرن فرض کنیم که یک مدالی رو داریم که برای دریافت اطلاعات از کاربر استفاده میشه اما اطلاعات ممکنه که توی یک صحفه  اطلاعات یک ساختمان باشه توی یک صحفه ممکنه اطلاعات یک لپ تاپ باشه در کل مدال یکیه اما اینپوت هاش چکباکس هاش کلا متفاوته
// برای همین در این موقیت ها کامپونت بیس جلو میریم و فقط فقط یک دونه مدال یا همون کامپونت میسازیم و ازش توی هر صعفه توی هر قسمت از پروژه مون که میخایم استفاده میکنیم

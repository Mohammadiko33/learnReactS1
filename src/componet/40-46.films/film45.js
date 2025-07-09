import React from "react";
import './film40.css'

export default function film45({title, caption , price , image = "film40/image/28-SaleOff-chickenBarger.png" , count}) {



 return (
  count > -1 && <div class="sale_off_item1">
     <div class="sale_off_item1__LR">
       <div class="sale_off_item1__left">
         <div class="sale_off_item1_left__head">
           <span>fast food</span>
           <span></span>
         </div>
         <div class="sale_off_item1_left__header">
           <h2>{title}</h2>
         </div>
         <div class="sale_off_item1_left__info">
           <p>{caption}</p>
           <div class="off_price_item__1">
             <div>
               <del>${price + 2.5}</del>
               <span>${price}</span>
             </div>
           </div>
         </div>
         <div class="sale_off_item1_left__order">
           <button>
             <img
               src="film40/image/27-SaleOff-ShoppingBasket2.svg"
               alt="basket"
               id="BukestSabad__black"
             />
 
             <span>order now</span>
           </button>
         </div>
       </div>
       <div class="sale_off_item1__right">
         <img
           src={image}
           alt={title}
           id="combo__funny"
         />
       </div>
     </div>
   </div>
 );
 

}

film45.defaultProps = {
  image : "film40/image/28-SaleOff-chickenBarger.png",
  price : 0,
  title : "this product is not have a title"
}

// توضیحات
// اگر ما وقتی میخایم از یک پروداکت استفاده کنیم عکس رو اسمشو اشتباه بنویسیم یا کلا ست نکنیم در خروجی سایت بهم میریزد چینش و بجای عکس الت تصویر نشون داده میشه
// برای جلوگیری از این مشکل باید مقدار دهی دیفالت بدیم
// همیشه مقدار ولیو پراپ ها بدون اسنسنا رید اونلی هستند و به هیچ عنوان نمیتونیم ولیشونو تغییر بدیم  اما میتونیم براشون ولیو دیفالت ست کنیم
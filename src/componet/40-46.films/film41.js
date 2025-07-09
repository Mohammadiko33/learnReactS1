import React from "react";
import './film40.css'

export default function film41(props) {

  console.log(props)

// if (props.count > -1){

 return (
  props.count > -1 && <div class="sale_off_item1">
     <div class="sale_off_item1__LR">
       <div class="sale_off_item1__left">
         <div class="sale_off_item1_left__head">
           <span>fast food</span>
           <span></span>
         </div>
         <div class="sale_off_item1_left__header">
           <h2>{props.title}</h2>
         </div>
         <div class="sale_off_item1_left__info">
           <p>{props.caption}</p>
           <div class="off_price_item__1">
             <div>
               <del>${props.price + 2}</del>
               <span>${props.price}</span>
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
           // src={props.image}
           src={props.image}
           alt={props.title}
           id="combo__funny"
         />
       </div>
     </div>
   </div>
 );
 
// }
// return null

}

//توضیحات
// میتوانیم شرطی بزازیم که  به طور مثال محصولاتی که موجود بودند یا تعدادشون از صفر بیشتر بود نمایش بده 

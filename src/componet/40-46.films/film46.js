import React from "react";
import './film40.css'

export default function film45({title, caption , price , image , count , children}) {



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

{children}

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


// توضیحات
//چیلدرن همون المنت هایی که بین تگ پروداکت ارسال شده با اینجا وقتی ارسال کردیم میتونیم در ورودی بگیریم و هر جای که ساختیم میتونیم از اون استفاده کنیم با استفاده از چیلدرن
import React from "react";



const CartItem = ({id,img,name,price,removeItemInCart}) => {
    return(


        <div className="cart_item">


        <div  style={{backgroundImage : `url(${img})`}} className="cart-item_img"></div>
   <div>
   <p>{name}</p>
   <b>{price} руб.</b>
   </div>
   
   <img onClick={()=>removeItemInCart(id)} className="delete_btn" src="/img/delete.svg"/>
   </div>
   

    )
}



export default CartItem
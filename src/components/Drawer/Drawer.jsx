import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import CartItem from "../CartItem";
import Info from "../Info";
import axios from "axios";
import styles from "./Drawer.module.scss"


const Drawer = ({removeItemInCart}) => {

  const {itemsInCart,setCartItems,closeCart,totalPrice,openCart,cartOpen} =  useContext(AppContext)
  const [isOrder, setIsOrder] = useState(false)
  const [orderId, setOrderId] = useState()

  
  

  const deliveryPrice = Math.floor(totalPrice/ 20)

  const buy = async () => {


    try{
        
     const {data} = await axios.post('https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/orders',{items:itemsInCart})

     for (let i = 0; i < itemsInCart.length; i++) {
       const item = itemsInCart[i]
      await axios.delete('https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/cart/' + item.id)
     }
     
     setOrderId(data.id)
      setIsOrder(true)
      setCartItems([])
   

    } 
    catch(error){
      alert("Похоже что то пошло не так")
    }
  
    
   
  }

  
 
    return (

        <div className={`${styles.overlay} ${cartOpen ? styles.overlayVisible : '' }`}>

        <div className={styles.drawer}>
         
         
          <div style={{display:"flex",justifyContent:'space-between'}}>
          <h2>Корзина </h2>
          <img onClick={closeCart} className="close_cart" src="/img/delete.svg" />
          
          </div>
       

                { itemsInCart.length !== 0 
                ?  <div>
                      <div className="items">


            {itemsInCart.map((el) => (<CartItem 
                id = {el.id}
                img = {el.img}  
                name = {el.name} 
                price = {el.price}
                removeItemInCart={removeItemInCart}

/>
))
} 
</div>

<div className="drawer_footer">
  <ul className="drawer_footer_items">
    <li>
      <span>Итого</span>
      <div></div>
      <b> {totalPrice} руб</b>
    </li>
    <li>
      <span>Доставка</span>
      <div></div>
      <b> {deliveryPrice} руб</b>
    </li>
  </ul>
  <div onClick={buy} className="drawer_footer_btn">
    Оформить заказ
    <img src="/img/arrow.svg"></img>
  </div>
</div>
               </div>
             
            

             : <Info
             title={isOrder ? "Ваш заказ оформлен" : ""}
             img = {isOrder ? "/img/buying.svg" :"/img/emptyCart.jpg"}
             description={isOrder ? `Спасибо за покупку , заказ № ${orderId}` :"В корзине нечего нет"}
          
             
             />
          






                }




           
        
        </div>




        </div>
    )
}





export default Drawer
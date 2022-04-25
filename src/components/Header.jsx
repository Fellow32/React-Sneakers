import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";


const Header = ({openCart}) => {


    const {totalPrice} = useContext(AppContext)
    

   

   return(
     
    <header>
      
          
          <div  className="header_left">
          <Link to= "/">
      <img width={40} height={40} src="/img/logo.png" />
      </Link>
      <div  className="header_left_info">
        <h3>React sneakers</h3>
        <p>Магазин лучших кросовок</p>
      </div>
     
    </div>

          
          
     
     
    

    <div className="header_right">
      <ul style={{cursor:'pointer'}}>
        <li>
          {" "}
          <img  onClick={openCart} width={18} height={18} src="/img/cart.svg" />

          <span>{totalPrice}руб.</span>
        </li>

        <li>
          <Link to ="/favorites">
          <img  width={21} height={19} src="/img/like.svg" />
          </Link>
          
        </li>

        <li>
          <Link to = "/orders">
          <img width={20} height={20} src="/img/profile.svg" />
          </Link>
        </li>
      </ul>
    </div>
  </header>
   )
}



export default Header
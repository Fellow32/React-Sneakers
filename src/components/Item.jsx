import React, { useContext, useEffect } from "react";
import {useState} from 'react'
import { AppContext } from "../App";
import MyLoader from "./styleComponents/MyLoader";


const Item = ({id,name,price,img,onAddToCart,onAddToFavorites,favorite = false,isLoading,isOrder}) => {



  const {isAddedInCart} = useContext(AppContext)

  const [ isFavorite, setIsFavorite] = useState(favorite)


  

  const addItemInCart = () => {
 
    onAddToCart({id,parentId: id,name,price,img})
    
   

  
    
    
  }


  const addInFavorite = () => {
    onAddToFavorites({id,name,price,img})
    setIsFavorite(!isFavorite)
  }



    return (
            
       
   
        <div className="card">
            
       
       { isLoading
       ? <MyLoader/>
         
       : <>
           
       <img width={133} height={112} src={img} />
       <p>{name}</p>
       <div className="card_price_info">
         <div className="card_price">
           <span>Цена:</span>
           <b>{price}руб.</b>
         </div>

         <div  className="card_price_button">

           { isOrder


           ? ""
           :  <div>
           
           <img className="isFavorite"
             onClick={(item) => addInFavorite(item)}
             src = {isFavorite ? "/img/like2.svg" : "/img/like.svg"}
             
             />
           <img
            onClick={(item) => addItemInCart(item)}
             height={32}
             width={32}
             src={isAddedInCart(id) ? "/img/check.svg": "/img/card_add_button.svg"}

             alt="Plus"
           />

            </div>

           

           

           }

         </div>
       </div>
       
       
       </> 
      
      
      
    
      
      }
       
       

      






       
       
       
       
    


      
      </div>

    )
}



export default Item
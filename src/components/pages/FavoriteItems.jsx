import React, { useContext } from "react";
import Item from "../Item";
import { AppContext } from "../../App";





const FavoriteItems = ({onAddToCart,onAddToFavorites}) => {



const {favoritesItems} = useContext(AppContext)



    return (
        
        <div>
           <div style={{display:'flex', alignItems:'center',marginLeft:'30px'}}>
              
           <img width={35} height={35} src="/img/favBack.png"/>
         
            <h2 style={{marginLeft:'25px'}} >Мои Закладки</h2>
            </div> 
       

         <div style={{display:"flex", flexWrap:'wrap'}}>
          {favoritesItems.map((item) => (
              <Item
              {...item}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}

              favorite ={true}
              />
          ))}
         </div>
        </div>
    )
}



export default FavoriteItems
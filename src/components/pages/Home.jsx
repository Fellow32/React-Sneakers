import React, { useContext } from "react";
import { AppContext } from "../../App";
import Item from "../Item";
import MyLoader from "../styleComponents/MyLoader";




const Home = ({inSearchValue,onChangeSearchInput,items,onAddToCart,onAddToFavorites,itemsInCart,loading}) => {
  

    
    const renderItems = () => {
    const filterItems = items.filter((el) => el.name.toLowerCase().includes(inSearchValue.toLowerCase()))
       



     return  (loading ? [...Array(8)] : filterItems ).map((el) => (
      <Item
      onAddToCart = {onAddToCart}
      onAddToFavorites ={onAddToFavorites}
      {...el}
      isLoading={loading}
      itemsInCart={itemsInCart}
      />
      ))



    }
  
  
  
  
  
  
  
  
  
  
  
  
  return (
        <body>
        <div className="body_search">
          <h1>{ inSearchValue ? `Поиск по запросу '${inSearchValue}'`: 'Все кроссовки'}</h1>

          <div className="search">
            <img src="/img/search.svg" />
            <input onChange={onChangeSearchInput} value = {inSearchValue} type="text" placeholder="Поиск..."></input>
          </div>

        </div>

        <div className="content">
           
        { 
        
        renderItems()

        }



          
        </div>
      </body>
    )
}



export default Home
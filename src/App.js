import React from "react";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import {useState} from 'react'
import axios from "axios";
import {useEffect} from 'react'
import FavoriteItems from "./components/pages/FavoriteItems";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Orders from "./components/pages/Orders";



export const AppContext = React.createContext({})



 
function App() {


 const[items,setItems] = useState([])

 const [itemsInCart,setCartItems] = useState([])

 const [favoritesItems, setFavoritesItems] = useState([])

 const [inSearchValue, setInSearchValue] = useState('')

 const [loading, setLoading] = useState(true)

 





 useEffect(() => {

     const fetchData = async () =>{
      try{

        const [cartResponse,favoriteItemsResponse,itemsResponse] = await Promise.all([axios.get('https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/cart'),axios.get('https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/favoritesItems'),axios.get('https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/items')])

       
     
        setLoading(false)

        setFavoritesItems(favoriteItemsResponse.data)
        setItems(itemsResponse.data)
        setCartItems(cartResponse.data)

      }
      catch(error){
        alert('При запросе данных произошла ошибка!')
      }
   

    

       
           
         
            
           
     
           


     }


     fetchData()

  
},[])




const onAddToCart = async (item) => {
  
         try{

          const findItem = itemsInCart.find((el)=> Number(el.parentId) === Number(item.id))
          if(findItem){
            setCartItems(prev => prev.filter((el) => Number(el.parentId) !== Number(item.id)))
            axios.delete(`https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/cart/${findItem.id}`)
           

          } else {
           const {data} = await axios.post('https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/cart', item)
            setCartItems(prev => [...prev,data])
          }


         }  catch(error){
           alert(" Не удалось добавить в корзину")
         }


        

}


const removeItemInCart = (id) => {
try{

  axios.delete(`https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/cart/${id}`)
  setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(id)))


}
catch(error){
  alert('Ошибка при удалении из корзины!')
}
 
}



const onAddToFavorites = async (item) => {
          try{
            if( favoritesItems.find((el) => el.id == item.id)){
             axios.delete(`https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/favoritesItems/${item.id}`)
             setFavoritesItems(prev => prev.filter((el) => Number(el.id) !== Number(item.id)))
  
             }
             else {
             const {data} = await axios.post('https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/favoritesItems/', item)
              setFavoritesItems(prev => [...prev,data])
             }
          }
          catch(error) {
            alert('Не удалось добавить в избранное')
          }
           
           
}



 const [cartOpen,setCartOpen] = useState(false)
 

const openCart = () => {
  setCartOpen(true)
}

const closeCart = () => {
  setCartOpen( false)
}







const onChangeSearchInput = (event) => {
  setInSearchValue(event.target.value)
}



const isAddedInCart = (id) => {
 return itemsInCart.some((e) => Number(e.parentId) === Number(id))

}




const totalPrice = itemsInCart.reduce((sum,el) => {
  return Number(sum) + Number(el.price)
},0)




















  return (

    <AppContext.Provider value={{items,openCart,cartOpen,totalPrice,itemsInCart,favoritesItems,isAddedInCart,closeCart,setCartItems}}>

<div className="wrapper">


     
{<Drawer removeItemInCart={removeItemInCart}  itemsInCart={itemsInCart} />}



 





<Header openCart={openCart} />

<Routes>

<Route path="/"  element ={
 <Home 
  loading ={loading}
  itemsInCart ={itemsInCart}
  inSearchValue={inSearchValue}
  onChangeSearchInput ={onChangeSearchInput}
  items ={items}
  onAddToCart ={onAddToCart}
  onAddToFavorites={onAddToFavorites}/>}/>



<Route path="/favorites" element={<FavoriteItems 

onAddToFavorites={onAddToFavorites}
onAddToCart={onAddToCart}
/>}/>


<Route path="/orders" element = {<Orders/>}/>



</Routes>

</div>



    </AppContext.Provider>
   
  );
}

export default App;

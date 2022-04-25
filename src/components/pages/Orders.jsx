import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Item from '../Item'


const Orders = () => {

  const[itemsInOrder, setItemsInOrder] = useState([])

    useEffect(() => {
     ( async () => {
       const {data} = await axios.get('https://625c6b7cc9e78a8cb9b7b4e3.mockapi.io/orders')
      setItemsInOrder(data.map((el) => el.items).flat())
     }

     )()
      
    },[])








const data = itemsInOrder.flat(Infinity)
const data1 = data.flat(Infinity)

console.log(data1)
    

    return(
       <div >
        
        <div style={{display:'flex', alignItems:'center',marginLeft:'30px'}}>
            <Link to = {'/'}>
            <img width={35} height={35} src="/img/favBack.png"/>
            </Link>
         
         
            <h2 style={{marginLeft:'25px'}} >Мои Покупки</h2>
            </div> 

            <div style={{display:'flex',flexWrap:'wrap'}}>

              {
                  itemsInOrder.map((el) => 
                      <Item 
                      isOrder ={true}
                      name={el.name}
                      price={el.price}
                      img={el.img}/>
                  )
              }

            </div>

             







       </div>



    )
}




export default Orders
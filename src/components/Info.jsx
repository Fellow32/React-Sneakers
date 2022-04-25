import React, { useContext } from 'react'
import { AppContext } from '../App'


const Info = ({title,img,description}) => {

         const {closeCart} = useContext(AppContext)

    return(

     <div>  
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{title}</h3>
       
        
         </div>
        
              <div>
               <img width={300} height={300} src ={img}></img>
                <div>
               <div style={{display:"flex", justifyContent:"center", marginTop:"40px"}}>
                {description}
                 </div>
                 <div onClick={closeCart} className="drawer_footer_btn">
                     К выбору товара
   
                   </div>
                 </div>
             </div>


             </div>

    )
}


export default Info
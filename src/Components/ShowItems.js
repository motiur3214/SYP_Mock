import React from 'react'
import ProductShow from './ProductShow.js'
import ProductShow2 from './ProductShow2.js'
import {totalLinks} from './ImageLinks.js'
function ShowItems() {
    return (
        <div>
       
       {
       
       totalLinks.map((item,i)=>{
           return(
        (i%2!==0) ?<div  key={item.id}> 
               
            <ProductShow link={item.links} pLink={item.priceImg} title={item.title} description={item.description} /> 
             
       </div> : <div key={item.id}>  
               
            <ProductShow2  link={item.links} pLink={item.priceImg} title={item.title} description={item.description}/> 
                 
            </div>
           )
            })
        }     
        </div>
    )
}

export default ShowItems

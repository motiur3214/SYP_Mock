import React from 'react'
import './ProductShow.css';
const ProductShow=({link,pLink,title,description}) =>{
    return (
        <div className='product__container'>
             
          
            <div className="white__space"></div>
          
          <div className="product__items" >
          <div className="buy__card1" >
        <img 
      className="d-block"  height="370px" width="230px"
      src={pLink}
      alt="Third slide"
    />
        </div>
         <div>
          <div className="item__discriptions"> 
          
                <h6>{title}</h6>
              <p>{description}</p></div>
            <img 
      className="d-block"  height="300px" width="580px"
      src={link}
      alt="Third slide"
    />
        </div>
    
        
        </div>
        
        </div>  
    )
}

export default ProductShow

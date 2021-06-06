
import React from 'react'
import {Carousel } from 'react-bootstrap'
import './Banner.css'
function Banner() {
    return (
        <div className="banner_ribana">
   <Carousel  interval={2000}>
  <Carousel.Item>
    <img 
      className="d-block w-100 img__class"  height="220px"
      src="https://www.tbsnews.net/sites/default/files/styles/very_big_3/public/images/2020/10/28/ribana_goats_milk_soap_0.jpg?itok=gPH49-S5"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 >SKIN CARE</h3>
      <p >For Natural Brightness, Spotless & Flowless Skin</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img 
      className="d-block w-100 img__class"  height="220px"
      src="https://www.takely.com.bd/wp-content/uploads/2021/03/58281986_2378753735496315_55177539340992512_n.jpg"
      alt="Second slide"
    />

 </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100 img__class" height="220px"
      src="https://www.tbsnews.net/sites/default/files/styles/very_big_3/public/images/2020/10/28/saffron_goats_milk_soap_1.jpg?itok=UoUdn2up"
      alt="Third slide"
    />

    <Carousel.Caption>
     
      <p ><b>Goat Milk Soap Is Great For Your Skin.</b></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>         
        </div>
    )
}

export default Banner

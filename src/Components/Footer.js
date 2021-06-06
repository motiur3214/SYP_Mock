import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
import {IconButton,Button } from "@material-ui/core";
import Input from '@material-ui/core/Input';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {

  
  return (
    <div>
    
    <MDBFooter color="black" className="font-small pt-4 mt-4 ">
   <div className="search__container">
   <p className="signup__text">
    Signup To Our Newsletter
   </p>
 <div className="input__div">
   
 <Input id="outlined-basic" label="Outlined" variant="outlined" placeholder="Enter Email Address" />

 <div style={{marginLeft:"150px"}}>
 <Button variant="contained"  style={{borderRadius: "0px" }}>Search</Button></div>
 </div>

   </div>
      <MDBContainer fluid className="text-left text-md-left ">
     
        <MDBRow >
          <MDBCol md="2" > </MDBCol>
              <MDBCol md="2"  className="text-md-left text-left custom__style">    
          <ul>
              <h6>Need Help?</h6>
              <p></p>
              <li className="list-unstyled color__change">
                Email us:
               </li>
              <li className="list-unstyled" >
              ribanabangladesh@gmail.com
              </li>
              <p></p>
              <li className="list-unstyled color__change">
                Call Us
              </li>
              <li className="list-unstyled">
               01715-117100
              </li>
              
            </ul>
          </MDBCol>
          <MDBCol md="2" className="text-md-left custom__style" >
         
          <ul>
              <h6>About Us</h6>
               <br/>
              <li className="list-unstyled color__change">
               Terms & Conditions
               </li>
           
              <li className="list-unstyled color__change" >
                FAQ's
              </li>
             
              <li className="list-unstyled color__change">
                Privacy Notice
              </li>
              <li className="list-unstyled color__change">
              Cookie Notice
              </li>
              
            </ul>
          </MDBCol>
          <MDBCol md="2" className="text-md-left custom__style" >
          <ul>
              <h6>Inspiration</h6>
               <br/>
              <li className="list-unstyled color__change">
               Style Magazine
               </li>
           
              <li className="list-unstyled color__change" >
               Fetured In
              </li>
             
              <li className="list-unstyled color__change">
               Fashion Updates
              </li>
              <li className="list-unstyled color__change">
              Cookie Notice
              </li>
              
            </ul>
          </MDBCol>
          <MDBCol md="3" className="text-md-left custom__style color__change">
          
          <ul>
              <h6 style={{color:"white"}}>Find Us</h6>
               <br/>
              <li className="list-unstyled color__change">
               126/A, Kalabagan, Dhaka-1207, Dhaka Division,
               Bangladesh
               </li>
           
              <li className="list-unstyled" >
              
            <IconButton>
            <a href="https://www.facebook.com/ribana.bd/" target="blank"> <FacebookIcon /></a>
            </IconButton>
            
            <IconButton>
            <a href="https://www.youtube.com/watch?v=4SOj991TMHI" target="blank"> <YouTubeIcon/></a>
           </IconButton> 
                 
           
            <IconButton>      
            <a href="https://www.instagram.com/ribanabangladesh/?hl=en" target="blank"> <InstagramIcon /></a>
            </IconButton>   
            
              </li>
              
            </ul>
          </MDBCol>
          </MDBRow>
          
       
       

      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="color__change">
          &copy; {new Date().getFullYear()} Copyright: <span  > RiBana Organic.All rights reserved </span>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;
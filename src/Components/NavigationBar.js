import React from 'react'
import * as ReactNav from 'react-bootstrap'
import {Link} from 'react-router-dom'

import './NavigationBar.css'
function NavigationBar() {
  return (
    <div className=' navbar__container'>
      <ReactNav.Navbar className="shadow-none" activeClassName="underline" collapseOnSelect expand="lg" bg="none" variant="light">

  <ReactNav.Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <ReactNav.Navbar.Collapse id="responsive-navbar-nav">

  <ReactNav.Nav fill   >

     <ReactNav.Nav.Item>
     <ReactNav.Nav.Link as={Link} to="/SYP_Mock"  className="mx-3">Home</ReactNav.Nav.Link>
     </ReactNav.Nav.Item>
     <span style={{ borderRight: "1px dotted grey"}}></span>
     
     <ReactNav.Nav.Item  className='nav__item'>
    <ReactNav.Nav.Link as={Link} to="/skin_care"className="mx-3">Skin Care</ReactNav.Nav.Link>
     </ReactNav.Nav.Item>
     <span style={{ borderRight: "1px dotted grey"}}className="mx-3"></span>
     <ReactNav.Nav.Item>
     <ReactNav.Nav.Link  as={Link} to="/hair_care" className="mx-3">Hair Care</ReactNav.Nav.Link>
     </ReactNav.Nav.Item>
     <span style={{ borderRight: "1px dotted grey"}}></span>
     <ReactNav.Nav.Item>
       <ReactNav.Nav.Link as={Link} to="/video_gallery" className="mx-3">Video Gallery </ReactNav.Nav.Link>
     </ReactNav.Nav.Item>
     <span style={{ borderRight: "1px dotted grey"}}></span>
     <ReactNav.Nav.Item>
      <ReactNav.Nav.Link as={Link} to="/store_locator"className="mx-3">Store Locator</ReactNav.Nav.Link>
     </ReactNav.Nav.Item>
     <span style={{ borderRight: "1px dotted grey"}}></span>
     <ReactNav.Nav.Item>
       <ReactNav.Nav.Link as={Link} to="/makeup_tips" className="mx-3">Makeup Tips</ReactNav.Nav.Link>
     </ReactNav.Nav.Item>
     <span style={{ borderRight: "1px dotted grey"}}></span>
     <ReactNav.Nav.Item>
       <ReactNav.Nav.Link as={Link} to="/style_news" className="mx-3">Style News</ReactNav.Nav.Link>
     </ReactNav.Nav.Item>
     <span style={{ borderRight: "1px dotted grey"}}></span>
     <ReactNav.Nav.Item>
        <ReactNav.Nav.Link as={Link} to="/contact_us" className="ml-3" >Contact Us</ReactNav.Nav.Link>
     </ReactNav.Nav.Item>
   </ReactNav.Nav>

  </ReactNav.Navbar.Collapse>
</ReactNav.Navbar>
    </div>
  )
}

export default NavigationBar



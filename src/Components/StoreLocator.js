import React from 'react'

import {IconButton } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
function StoreLocator() {
    return (
        <div className="container">
          <h3>Go to our facebook page to find out address  <IconButton>
            <a href="https://www.facebook.com/ribana.bd/" target="blank"> <FacebookIcon /></a>
            </IconButton></h3>
         
        </div>
    )
}

export default StoreLocator

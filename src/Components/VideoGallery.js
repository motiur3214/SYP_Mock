import React from 'react'
import {IconButton } from "@material-ui/core";
import YouTubeIcon from '@material-ui/icons/YouTube';
function VideoGallery() {
    return (
      <div className="container">
      <h3>Click on Youtube ICON to find out our Products reviews  <IconButton>
        <a href="https://www.youtube.com/watch?v=4SOj991TMHI" target="blank"> <YouTubeIcon  style={{color:"red"}}/></a>
        </IconButton></h3>
     
    </div>
    )
}

export default VideoGallery

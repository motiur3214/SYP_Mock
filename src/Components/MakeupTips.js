import { purple } from '@material-ui/core/colors'
import React from 'react'
import ShowItems from './ShowItems'

function MakeupTips() {
    return (
        <div className="container" style={{textAlign:"center"}}>
           <a  href="https://www.aarp.org/entertainment/style-trends/info-2018/best-makeup-tricks.html" target="blank" ><h6 style={{color:"red" ,fontFamily:"Times New Roman" }}>Click Me To Check Out This Blog For Tips </h6></a>
        
            <ShowItems/>  
        </div>
    )
}

export default MakeupTips

import React from 'react'
import './Header.css'
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import {IconButton } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Header() {
    return (
        <div className='header'>
        <div className='language__container'>
        <LanguageIcon className='language__icon' />
        <ReactLanguageSelect className='language' defaultLanguage="en" />
        </div>
        
        <div className="img__container">
         <img src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/94fdc4c1e325-ribana-organic.jpg" alt="Ribana" className="ribana__image"/>

        </div>
        <div className="header__nav">
            <div >
            <IconButton>
            <a href="https://www.facebook.com/ribana.bd/" target="blank"> <FacebookIcon className='header__option' /></a>
            </IconButton>
            </div>
            <div >
            <IconButton>
            <a href="https://www.youtube.com/watch?v=4SOj991TMHI" target="blank"> <YouTubeIcon className='header__option'/></a>
           </IconButton> 
                 
            </div>
            <div >
            <IconButton>      
            <a href="https://www.instagram.com/ribanabangladesh/?hl=en" target="blank"> <InstagramIcon className='header__option'/></a>
            </IconButton>   
            </div>

        </div>
        </div>
    )
}

export default Header

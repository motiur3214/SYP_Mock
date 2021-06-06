

import React from "react"
import './App.css';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header'
import NavigationBar from './Components/NavigationBar'
import Home from './Components/Home'
import SkinCare from './Components/SkinCare'
import MakeupTips from './Components/MakeupTips'
import VideoGallery from './Components/VideoGallery'
import StyleNews from './Components/StyleNews'
import StoreLocator from './Components/StoreLocator'
import HairCare from './Components/HairCare'
import ContactUs from './Components/ContactUs'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      
     <Header  />
    <Router>
      <div className="nav__style">
    <NavigationBar />
    </div>
   <Banner />
   <div className="white__space" ></div>
    <Switch>
  
            <Route path="/SYP_Mock" exact>
            <Home/>
            </Route>
            <Route path="/skin_care" >
            <SkinCare />
            </Route>
            <Route path="/makeup_tips" >
            <MakeupTips />
            </Route>
            <Route path="/video_gallery" >
            <VideoGallery />
            </Route>
            <Route path="/style_news" >
            <StyleNews />
            </Route>
            <Route path="/store_locator" >
            <StoreLocator />
            </Route>
            <Route path="/contact_us" >
            <ContactUs />
            </Route>
            <Route path="/hair_care" >
            <HairCare />
            </Route>
            </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;

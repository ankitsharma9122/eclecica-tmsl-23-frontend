
import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from "./components/Headers/Headers.js";
import Blog from './components/Blog/Blog';
import Gallery from './components/Gallery/Gallery';
import UpcomingEvent from './components/upcomings/UpcomingEvent';
import Teams from './components/Teams/Teams';
import Contactus from './components/contactUs/Contactus';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer/Footer';
import Home from  "../src/components/Home/Home"
import Auth from './components/Login/Auth';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(
    sessionStorage.getItem("theme") ?? "dark"
  );
  useEffect(()=>{
    if(sessionStorage.getItem("theme")=="light"){
      document.querySelector('body').className = 'light-mode';
    }
  })
  return (
    <>
    <BrowserRouter>
    <Headers theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route exact path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
        <Route path="/blogs" element={<Blog theme={theme}/>}/>
        <Route path="/sub-club" element={<Registration theme={theme}/>}/>
        <Route path="/gallery" element={<Gallery theme={theme}/>}/>
        <Route path="/eclecticateams" element={<Teams theme={theme}/>}/>
        <Route path="/contact" element={<Contactus theme={theme}/>}/>
        <Route path="/events" element={<UpcomingEvent theme={theme}/>}/>
        <Route path="/auth" element={<Auth theme={theme}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;


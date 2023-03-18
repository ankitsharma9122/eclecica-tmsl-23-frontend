
import './App.css';
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

function App() {
  return (
    <>
    <BrowserRouter>
    <Headers/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/sub-club" element={<Registration/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/eclecticateams" element={<Teams/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/events" element={<UpcomingEvent/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;


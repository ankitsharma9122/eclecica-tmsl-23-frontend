import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers/Headers.js";
import Blog from "./components/Blog/Blog";
import Gallery from "./components/Gallery/Gallery";
import UpcomingEvent from "./components/upcomings/UpcomingEvent";
import Teams from "./components/Teams/Teams";
import Contactus from "./components/contactUs/Contactus";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";
import Home from "../src/components/Home/Home";
import Auth from "./components/Login/Auth";
import { useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import eclectica_23_img from "./components/images/eclectica_23_img.jpg";

function App() {
  const [loading, setloading] = useState(false);
  const [theme, setTheme] = useState(sessionStorage.getItem("theme") ?? "dark");
  const [registerClicked, setRegisterClicked] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("theme") == "light") {
      document.querySelector("body").className = "light-mode";
    }
  });
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-div">
          <div
            style={{
              position: "relative",
              width: "330px",
              height: "330px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={eclectica_23_img}
              style={{ width: "70%", height: "70%", marginBottom: "20px",borderRadius:"50%" }}
            />
            
            <b>Eclectica Loading ...</b>
            <LinearProgress
              style={{ position: "absolute", bottom: 0, width: "70%",color:"white" }}
              value={50}
            />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Headers theme={theme} setTheme={setTheme} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home theme={theme} setTheme={setTheme} registerClicked={registerClicked} setRegisterClicked={setRegisterClicked}/>}
            />
            {/* <Route path="/blogs" element={<Blog theme={theme} />} /> */}
            <Route path="/sub-club" element={<Registration theme={theme}  />} />
            <Route path="/gallery" element={<Gallery theme={theme} />} />
            <Route path="/eclecticateams" element={<Teams theme={theme} />} />
            <Route path="/contact" element={<Contactus theme={theme} />} />
            <Route path="/events" element={<UpcomingEvent theme={theme} registerClicked={registerClicked} setRegisterClicked={setRegisterClicked}/>} />
            {/* <Route path="/auth" element={<Auth theme={theme} />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

import React, { useState,useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useTheme} from "@mui/material/styles";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useMediaQuery, Button, Typography } from "@mui/material";
import Registration from "../upcomings/Registration";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import ReactPlayer from "react-player/lazy";
import trailer from "../images/trailer.mp4";
import OurpastGuest from "./OurpastGuest";
const g_4  = "/images/gallery/g_4.jpg";
const g_5  = "/images/gallery/g_5.jpg";
const g_7  = "/images/gallery/g_7.jpg";
const g_22 =  "/images/gallery/g_22.jpg";
const main =  "/images/main_fest_post.jpg";
const images =[g_7, g_4, g_5];
const Home = (props) => {
  const navigate=useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDotButtonClick = (index) => {
    setActiveIndex(index);
  };

  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
        marginBottom: theme.spacing(2),
        // height: isMobile ? 300 : 450,
        width: "100wv",
      }}
    >
            <>
                  <Carousel
        autoPlay={true}
        animation="slide"
        navButtonsAlwaysVisible={true}
        interval={5000}
        index={activeIndex}
        onChange={handleCarouselChange}
        next={(next, active) => (
          <Button
            style={{ position: "absolute", right: 0 }}
            onClick={next}
            disabled={active === images.length - 1}
          >
            <ChevronLeftIcon />
          </Button>
        )}
        prev={(prev, active) => (
          <Button
            style={{ position: "absolute", left: 0 }}
            onClick={prev}
            disabled={active === 0}
          >
            <ChevronRightIcon />
          </Button>
        )}
      >
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                height: isMobile ? 300 : 500,
                objectFit: "cover",
                width: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                position: "absolute",
                bottom: theme.spacing(2),
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor:
                      activeIndex === index
                        ? theme.palette.primary.main
                        : "rgba(255, 255, 255, 0.5)",
                    margin: theme.spacing(0, 1),
                    cursor: "pointer",
                  }}
                  onClick={() => handleDotButtonClick(index)}
                />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: props?.theme == "light" ? "black" : "white",
                margin: "10px",
                textAlign: "center",
                fontFamily:"monospace",
              }}
              className="div-quates"
            >
              {" "}
              “Only the very weak-minded refuse to be influenced by literature and
              poetry.”
            </h1>
            <div
              className="about-us-div-parent"
            >
              <div
                className="about-us-div-parent-child"
              >
                <h1 style={{ color: props?.theme == "light" ? "black" : "rgb(41 200 255)" , textAlign: "center" }}>About us</h1>
                <div style={{ color: props?.theme == "light" ? "black" : "white", textAlign: "justify",fontSize:"18px",letterSpacing:"0.6px",marginTop:"10px",lineHeight:"1.4", width:isMobile ? "90%" : "100%"}} className="small-font">
                Team Eclectica–the literary committee of Techno Main Salt Lake, is a student-governed committee guided by an experienced group of faculty members, dedicated to building a healthy community receptive to works of literature. Throughout the year Team Eclectica organizes seminars, holds webinars, hosts competitions and grooms students through workshops. The sole purpose behind its inception was to ensure that the spirit of artistry, spoken and written expression, debating, drama and quizzing is sustained in society in general and our members and followers in particular. To accomplish these goals, apart from contests and workshops, we also maintain an online presence through our official blog to encourage students to post their original content for the world to view. Through our year-long activities, members of the community get to discover new avenues of interest and explore their creativity in ways manifold.
                </div>
                <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:isMobile? "center" : "flex-start",marginTop:"10px"}}>
                <Button
                    variant="contained"
                    color="primary"
                    // style={styles.button}
                    className="click-to-know-button"
                    onClick={()=>{
                      navigate("/register")
                    }}
                  >
                   REGISTER FOR THE MAIN EVENT
                  </Button>
              </div>
              </div>
              <div
                className="about-us-div-video"
              >
                <ReactPlayer url={trailer} controls light={g_22} width="100%" height="100%"/>
              </div>
            </div>
            <div style={{          
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                marginTop:"30px",
                }}>
            <h1
              style={{
                color: props?.theme === "light" ? "black" : "rgb(41 200 255)",
                margin: "auto",
                textAlign: "center",
              }}
            >
              Past Event Guests
            </h1>
            <div style={{color: props?.theme === "light" ? "black" : "white",fontSize:"20px", display: "flex",
                justifyContent: "center",
                alignItems: "center", textAlign:isMobile? "justify" :"center",margin:"10px",fontSize:"18px",letterSpacing:"0.6px",lineHeight:"1.4",width:isMobile ? "90%" : "70%"}}  className="small-font">These guests brought their unique perspectives and expertise to our events, and their presence contributed to the success of the events. We are grateful for their support and participation, and we hope to have them as our guests again in the future.</div>
             <OurpastGuest theme={props.theme}/>
            </div>
            <div></div>
            </> 
    </div>
  );
};

export default Home;

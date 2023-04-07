import React, { useState,useEffect } from "react";
import UpcomingEventhelper from "./UpcomingEventhelper";
import Registration from "./Registration";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import blog_1 from "../images/blog_1.jpeg";
import ffd from "../images/POSTERS/ffd.jpg"
import dis from "../images/POSTERS/DISPUTATIO.jpg";
import gq from "../images/POSTERS/general_quiz.jpg";
import tq from "../images/POSTERS/trivia_quiz.png";
import pal from "../images/POSTERS/Palette.png";
import pic from "../images/POSTERS/PICTIONARY.png";
import pos from "../images/POSTERS/PROSIMETRUM (1).png";
import spell from "../images/POSTERS/Spell-Bee .png";
import uno from "../images/POSTERS/UNO.png";
import ffd1 from "../images/WINNER_PAST/FFD_WINNER_2023_INTRA - Sheet1.pdf";
import dis1 from "../images/WINNER_PAST/DISPUTATIO_WINNER_2023_INTRA - Sheet1.pdf";
import gq1 from "../images/WINNER_PAST/GENERAL QUIZ_WINNER_INTRA_2023 - Sheet1.pdf";
import tq1 from "../images/WINNER_PAST/TRIVIA QUIZ_WINNER_2023_INTRA - Sheet1.pdf";
import pa1 from "../images/WINNER_PAST/PALETTE_WINNER_INTRA_2033 - Sheet1.pdf";
import pic1 from "../images/WINNER_PAST/PICTIONARY_INTRA_WINNER_2023 - Sheet1.pdf";
import pos1 from "../images/WINNER_PAST/PROSIMETRUM INTRA 2023 WINNER - Sheet1.pdf";
import spell1 from "../images/WINNER_PAST/SPELLBEE_WINNER_2023_INTRA - Sheet1.pdf";
import uno1 from "../images/WINNER_PAST/UNO_WINNER_INTRA_2023 - Sheet1.pdf";
const events = [
  {
    title: "ECLECTICA'23",
    date: "January 1, 2023",
    description: "FIVE FEET DROP an open mic event where participants will present their original pieces.",
    image: blog_1,
    pdf:ffd1,
    Eventdate: new Date("4/30/2023"),
  },
  {
    title: "FIVE FEET DROP",
    date: "January 1, 2023",
    description: "FIVE FEET DROP : An open mic event where participants will present their original pieces.",
    image: ffd,
    pdf:ffd1,
    Eventdate: new Date("1/06/2023"),
  },
  {
    title: "DISPUTATIO",
    date: "January 1, 2023",
    description: "DISPUTATIO : Express your voice in Disputatio, the ultimate debate competition.",
    image:dis,
    pdf:dis1,
    Eventdate: new Date("1/06/2023"),
  },
  {
    title: "TRIVIA QUIZ",
    date: "January 1, 2023",
    description: "Trivia Quiz : Questions on interesting topics",
    image: tq,
    pdf:tq1,
    Eventdate: new Date("1/06/2023"),
  },
  {
    title: "GENERAL QUIZ",
    date: "January 1, 2023",
    description: "GENERAL QUIZ :Test of knowledge and skill with the General Quiz competition",
    image: gq,
    pdf:gq1,
    Eventdate: new Date("1/06/2023"),
  },
  {
    title: "SPELLBEE",
    date: "January 1, 2023",
    description: "SPELLBEE :Spellbees are a popular and effective tool for promoting literacy and improving spelling skills.",
    image: spell,
    pdf:spell1,
    Eventdate: new Date("1/06/2023"),
  },
  {
    title: "UNO",
    date: "January 1, 2023",
    description: "UNO : Multi-Player card game.",
    image: uno,
    pdf:uno1,
    Eventdate: new Date("1/06/2023"),
  },
  {
    title: "PICTIONARY",
    date: "January 1, 2023",
    description: "A game packed with enthuse and fascination sprinkled with a dash of vying and your favourite- GUESSING.",
    image: pic,
    pdf:pic1,
    Eventdate: new Date("1/06/2023"),
  },
  {
    title: "PALETTE",
    date: "January 1, 2023",
    description: "PALETTE : An event where you can narrate your anecdote with your illustration skills to broad-ranging onlookers.",
    image: pal,
    pdf:pa1,
    Eventdate: new Date("1/06/2023"),
  },
  {
    title: "PROSIMETRUM",
    date: "January 1, 2023",
    description: "PROSIMETRUM :Content writing event, PROSIMETRUM, bringing you ideas to explore and  endless possibilitie",
    image:pos,
    pdf:pos1,
    Eventdate: new Date("1/06/2023"),
  },
];
const UpcomingEvent = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const {registerClicked ,setRegisterClicked }=props;
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!registerClicked ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            marginTop: "80px",
            justifyContent: "center",
          }}
        >
          {/* <Typography variant="h5"style={{ fontFamily: 'Arial, sans-serif',fontWeight: 'bold',fontSize: '30px',color: 'rgb(247, 158, 2)',textAlign: 'center',marginBottom: '24px', float:"left"}}>Register in upcoming Event's</Typography> */}

          <div style={{ margin: "20px" }}>
            <h1
              style={{
                color: props?.theme == "light" ? "black" : "rgb(41 200 255)",
              }}
            >
              {" "}
              Register in upcoming Events
            </h1>
            <div
              style={{
                color: props?.theme == "light" ? "black" : "white",
                letterSpacing: "0.6px",
                lineHeight: "1.4",
                fontSize: "18px",
                textAlign:"justify" ,
              }}
              className="small-font"
            >
              Join Eclectica 2023 for a diverse range of literary events: debates, drama, quizzes, sketching, open mic & more. Showcase your talents, connect with like-minded individuals, and be a part of an unforgettable literary fest. Register now to secure your spot and experience the magic of Eclectica 2023.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {events.map(
              (event) =>
                currentDate < event?.Eventdate && (
                  <UpcomingEventhelper
                    event={event}
                    setRegisterClicked={setRegisterClicked}
                  />
                )
            )}
          </div>

          <div style={{ margin: "20px" }}>
            <h1
              style={{
                color: props?.theme == "light" ? "black" : "rgb(41 200 255)",
              }}
            >
              View Result for Past Events
            </h1>
            <div
              style={{
                color: props?.theme == "light" ? "black" : "white",
                letterSpacing: "0.6px",
                lineHeight: "1.4",
                fontSize: "18px",
                textAlign:"justify",
                fontFamily:"system-ui"
              }}
              className="small-font"
            >
             Relive the magic of Eclectica Intra 2023! Our past results page showcases outstanding performances, creative flair & intellectual prowess. Discover the talents of others or relive your accomplishments. Click now & step into the time machine!
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {events.map(
              (event) =>
                currentDate > event?.Eventdate && (
                  <UpcomingEventhelper event={event} theme={props?.theme} />
                )
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {" "}
          <Registration setRegisterClicked={setRegisterClicked}/>
        </div>
      )}
    </>
  );
};

export default UpcomingEvent;

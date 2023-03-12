import React, { useState } from "react";
import UpcomingEventhelper from "./UpcomingEventhelper";

import { Typography } from "@mui/material";
import blog_1 from "../images/blog_1.jpeg";
const events = [
  {
    title: "Event 1",
    date: "January 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: blog_1,
    Eventdate: new Date("6/01/2022"),
  },
  {
    title: "Event 2",
    date: "February 14, 2023",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: blog_1,
    Eventdate: new Date("6/05/2021"),
  },
  {
    title: "Event 1",
    date: "January 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: blog_1,
    Eventdate: new Date("6/10/2022"),
  },
  {
    title: "Event 1",
    date: "January 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: blog_1,
    Eventdate: new Date("6/10/2022"),
  },
  {
    title: "Event 2",
    date: "February 14, 2023",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: blog_1,
    Eventdate: new Date("6/01/2023"),
  },
  {
    title: "Event 1",
    date: "January 1, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: blog_1,
    Eventdate: new Date("6/01/2024"),
  },
  {
    title: "Event 2",
    date: "February 14, 2023",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: blog_1,
    Eventdate: new Date("1/01/2019"),
  },
];
const UpcomingEvent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: "80px",
        justifyContent: "center",
      }}
    >
      {/* <Typography variant="h5"style={{ fontFamily: 'Arial, sans-serif',fontWeight: 'bold',fontSize: '30px',color: 'rgb(247, 158, 2)',textAlign: 'center',marginBottom: '24px', float:"left"}}>Register in upcoming Event's</Typography>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
      {events.map(event => (
        (currentDate<event?.Eventdate && <UpcomingEventhelper  event={event} />)
       ))}
      </div> */}
      <div style={{ margin: "20px" }}>
        <h1 style={{ color: "rgb(247, 158, 2)" }}>View Result for Past Events</h1>
        <div style={{ color: "white" }}>
          Welcome to our gallery! Here, we proudly showcase the creative talents
          of our club members, as well as other emerging writers and artists in
          the community.Whether you are a seasoned writer, a budding artist, or
          simply someone who appreciates the beauty and power of words, we hope
          that you will find something to love in our gallery. So take your
          time, explore our collection.
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
              <UpcomingEventhelper event={event} />
            )
        )}
      </div>
    </div>
  );
};

export default UpcomingEvent;

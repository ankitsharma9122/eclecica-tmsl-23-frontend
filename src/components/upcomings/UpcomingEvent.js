import React, { useState } from "react";
import UpcomingEventhelper from "./UpcomingEventhelper";

import { Typography} from '@mui/material';
import blog_1 from "../images/blog_1.jpeg"
const events = [
  {
    title: 'Event 1',
    date: 'January 1, 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: blog_1,
    Eventdate : new Date("6/01/2022"),
  },
  {
    title: 'Event 2',
    date: 'February 14, 2023',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: blog_1,
    Eventdate : new Date("6/05/2021"),
  },
  {
    title: 'Event 1',
    date: 'January 1, 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: blog_1,
    Eventdate : new Date("6/10/2022"),
  },
  {
    title: 'Event 2',
    date: 'February 14, 2023',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: blog_1,
    Eventdate : new Date("6/01/2023"),
  },
  {
    title: 'Event 1',
    date: 'January 1, 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: blog_1,
    Eventdate : new Date("6/01/2024"),
  },
  {
    title: 'Event 2',
    date: 'February 14, 2023',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: blog_1,
    Eventdate : new Date("1/01/2019"),
  },
];
const UpcomingEvent = () => {
  const [currentDate,setCurrentDate]=useState(new Date())

  return (
    <div style={{display:"flex",flexDirection:"column",flexWrap:"wrap",marginTop:"80px",justifyContent:"center"}}>
      
      <Typography variant="h5"style={{ fontFamily: 'Arial, sans-serif',fontWeight: 'bold',fontSize: '30px',color: '#333333',textAlign: 'center',marginBottom: '24px',}}><span style={{ textDecoration: 'underline'}}>Register in upcoming Event's</span></Typography>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
      {events.map(event => (
        (currentDate<event?.Eventdate && <UpcomingEventhelper  event={event} />)
       ))}
      </div>
      <Typography variant="h5"style={{ fontFamily: 'Arial, sans-serif',fontWeight: 'bold',fontSize: '30px',color: '#333333',textAlign: 'center', marginBottom: '24px',}}><span style={{ textDecoration: 'underline'}}> View Result of Past Event's</span></Typography>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center" }}>
      {events.map(event => (
        (currentDate>event?.Eventdate && <UpcomingEventhelper  event={event} />)
       ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;

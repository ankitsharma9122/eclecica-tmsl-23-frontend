import React, { useState } from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import { Margin } from '@mui/icons-material';
import "./UpcomingEventhelper.css"
import sample from "../images/sample.pdf";

const UpcomingEventhelper = ({ event,theme }) => {
  const [isHovered, setIsHovered] = useState(false);
  let [currentDate,setCurrentDate]=useState(new Date())
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  console.log("ankit98",theme);
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: isHovered ? 1 : 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.5s',
    
  };

  const mediaStyle = {
    height: 300,
    transition: 'transform 0.5s',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  };

  return (
    <Card
      style={{
        margin:'20px',
       
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
          '& $media': {
            transform: 'scale(1.1)',
            transition: 'transform 0.5s'
          },
          '& $overlay': {
            opacity: 1,
            transition: 'opacity 0.5s'
          }
        }
        
      }}
      className="card-component"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <CardMedia
        component="img"
        style={mediaStyle}
        xs={{height:100,width:200}}
        image={event.image}
        alt={event.title}
      />
      <div style={overlayStyle}>
        <Typography variant="h5" component="h2" style={{ color: "white"}}>
          {event.title}
        </Typography>
      </div>
      <CardContent className="Events-card-div"
      >
        <Typography variant="body2" component="p" style={{ color: "white"}}>
          {event.description}
        </Typography>
 
      {/* <CardActions> */}
        {currentDate>event?.Eventdate && <a href={sample} download="sample" target='_blank' style={{cursor:"pointer",textDecoration:"none"}}><Button variant="contained" color="primary" className="click-to-know-button">
          View Result
        </Button></a> 
        // :<Button variant="contained" color="primary">
        //   Register
        // </Button>
        }
        
      {/* </CardActions> */}
      </CardContent>
    </Card>
  );
};

export default UpcomingEventhelper;

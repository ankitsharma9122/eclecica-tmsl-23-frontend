import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import blog_1 from "../images/blog_1.jpeg"
import ffd from "../images/POSTERS/ffd.jpg"
import dis from "../images/POSTERS/DISPUTATIO.jpg";
import gq from "../images/POSTERS/general_quiz.jpg";
import tq from "../images/POSTERS/trivia_quiz.png";
import pal from "../images/POSTERS/Palette.png";
import pic from "../images/POSTERS/PICTIONARY.png";
import pos from "../images/POSTERS/PROSIMETRUM (1).png";
import spell from "../images/POSTERS/Spell-Bee .png";
import uno from "../images/POSTERS/UNO.png";
import mk from "../images/POSTERS/moksha.jpg"
import qzone from "../images/POSTERS/qzone.jpg"
import "./Registration.css"
const subEventClubs = [
  {
    id: 1,
    name: "OPEN-MIC",
    description:
      "The official open mic club of Eclectica, the literary club of Techno Main Saltlake Kolkata is a platform that provides students with the opportunity to showcase their talents in poetry, storytelling, music, stand-up comedy, and other forms of spoken-word performance. The members of the Open-Mic Club are passionate about expressing themselves through spoken-word performance. They possess excellent communication and stage presence skills and are committed to sharing their talents with an audience. Through regular open mic sessions and workshops, Open-Mic Club aims to help its members develop their performance abilities, build their confidence, and enhance their communication skills.",
    head: "Shalini sinha",
    image: ffd,
  },
  {
    id: 2,
    name: "OPINIONIST",
    description:
      " Opinionist is the official debate club of Eclectica, the literary club of Techno Main Saltlake Kolkata. It is a platform that provides students with the opportunity to express their opinions and engage in lively and intellectually stimulating debates on a variety of topics. The members of Opinionist are passionate about public speaking and argumentation. They possess excellent communication skills and are well-versed in current affairs, politics, philosophy, and other disciplines that are relevant to the debates they engage in. Through regular meetings, workshops, and competitions, Opinionist aims to help its members develop their critical thinking abilities, broaden their perspectives, and enhance their confidence in public speaking.",
    head: "Shekhar Raha",
    image: dis,
  },
  {
    id: 1,
    name: "MOKSHA",
    description:
      "Moksha is the official drama club of Eclectica, the literary club of Techno Main Saltlake Kolkata. It is a platform that provides students with the opportunity to explore and express their creative talents through various forms of theatre. The members of Moksha are passionate about acting, directing, scriptwriting, stage design, and all aspects of drama production. They possess excellent communication and collaboration skills and are committed to bringing their artistic visions to life. Through regular meetings, workshops, and performances, Moksha aims to help its members develop their theatrical abilities, broaden their perspectives, and enhance their confidence in public performance. The club encourages its members to experiment with different forms and styles of theatre, from traditional plays to avant-garde performances. ",
      head: "Ashish Kashyap",
    image:  mk,
  },
  {
    id: 1,
    name: "QZONE",
    description:
      " QZone is the official quiz club of Eclectica, the literary club of Techno Main Saltlake Kolkata. It is a platform that provides students with the opportunity to showcase their knowledge and compete with their peers in various fields of trivia and general knowledge. The members of QZone are passionate about quizzing and possess excellent analytical and problem-solving skills. They are well-versed in a wide range of topics, including history, science, literature, current affairs, and pop culture.",
      head: "Ritam Roy",
    image:  qzone,
  },
  // Add more sub-event clubs here
];

const cardStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  backgroundColor: "#f0f0f0",
  clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)",
};

const closeButtonStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
};
const styles = {
  root: {
    minWidth: 300,
    margin: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    backgroundSize: "cover",
    backgroundRepeat: "none",
  },
  media: {
    height: 250,
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  content: {
    padding: '1rem',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  role: {
    color: '#9B9B9B',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '14px',
  },
};
const Registration = (props) => {

  const [selectedClub, setSelectedClub] = useState(null);

  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const handleDialogClose = () => {
    setSelectedClub(null);
  };

  return (
  <div  style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"80px",justifyContent:"center"}}>
       <div style={{margin:"10px"}}>
    <h1 style={{ color: props?.theme === "light" ? "black" : "rgb(247, 158, 2)"}}>Sub Clubs Under Eclectica</h1>
    <div style={{color: props?.theme === "light" ? "black" : "white",letterSpacing:"0.6px",lineHeight:"1.4",fontSize:"18px"}}> Explore your creativity with Team Eclectica's sub-clubs: Open Mic, QZone, Moksha, and Opinionist. Connect with like-minded individuals and learn from the best in the business. Join now and unleash your full potential.
   </div>
    </div>
     {subEventClubs.map((club) => (
      <Card style={styles.root} onClick={() => handleClubClick(club)}>
        <CardMedia
        style={styles.media}
        image={club.image} 
       />
       <div className="div-card-subclub">
        <CardHeader title={club.name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" style={{color:"white"}}>
            {club.head}
          </Typography>
        </CardContent>
        <Button onClick={() => handleClubClick(club)} className="click-to-know-button">Click to know more</Button>
        </div>
      </Card>
     ))}    
      <Dialog open={!!selectedClub} onClose={handleDialogClose}>
        {selectedClub && (
          <>
            <DialogTitle  className="dialog-content-dev">{selectedClub.name}</DialogTitle>
            <DialogContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#ffffff",
                padding: "16px",
              }}
              className="dialog-content-dev-1"
            >
              <IconButton
                style={closeButtonStyle}
                onClick={handleDialogClose}
              >
                {/* <CloseIcon /> */}
              </IconButton>
              <Typography variant="body1">
                {selectedClub.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{color:"rgb(224, 133, 21)"}}>
                Head : {selectedClub.head}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Registration;

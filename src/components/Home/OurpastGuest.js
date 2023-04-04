import { Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { height } from '@mui/system';
import { useState } from 'react';
import "./OurpastGuest.css";
import guest_1 from "../images/ECLECTICA PAST GUES/MADHURA BANERJEE.jpg"
import guest_2 from "../images/ECLECTICA PAST GUES/MC HEADSHOT.jpg"
import guest_3 from "../images/ECLECTICA PAST GUES/NASIF AKHTAR.jpg"
import guest_4 from "../images/ECLECTICA PAST GUES/RAJDEEP MUKHERJEE.jpg"
import guest_5 from "../images/ECLECTICA PAST GUES/SUPRIYA NEWAR.jpg"
import guest_6 from "../images/ECLECTICA PAST GUES/TAPOJIT MITRA.jpg"

const teamMembers = [
  {
    name: 'MADHURA BANERJEE',
    position: 'CEO',
    photo: guest_1,
    description: 'Madhura Banerjee is an author who released her first book, ‘A Tenant of the World’, at age 21. Her second book.She has been a co-author of Scholastic India’s Yearbooks, for three years in a row.',
  },
  {
    name: 'MC HEADSHOT',
    position: 'CTO',
    photo: guest_2,
    description: 'MC Headshot aka, Tamojit Chatterjee is a talented rapper and entertainer who gained recognition through his appearance  on MTV Hustle, a popular Indian reality show focussing on the rap genre.',
  },
  {
    name: 'NASIF AKHTAR',
    position: 'CFO',
    photo: guest_3,
    description: 'Nasif Akhtar is a comedian from Malda, a small town in West Bengal, India. He started doing comedy in Kolkata in 2016 and later moved to Mumbai. He won the All India Standup Soapbox competition. ',
  },
  {
    name: 'RAJDEEP MUKHERJEE',
    position: 'CEO',
    photo: guest_4,
    description: ' Hailing from the Steel City of India - Jamshedpur, Rajdeep Mukherjee is a multi-dimensional singer, performer, music teacher, and composer who currently lives in Kolkata.',
  },
  {
    name: 'SUPRIYA NEWAR',
    position: 'CTO',
    photo: guest_5,
    description: 'Supriya Newar is a communication professional with 20 years of experience in the industry. Throughout her career, she has visited every nook and corner of her field and has worked with some of the masterminds of the business.',
  },
  {
    name: 'TAPOJIT MITRA',
    position: 'CFO',
    photo: guest_6,
    description: 'Tapojit Mitra,more popularly known as HarryBol, is a Bengali creator from Kolkata. He gained popularity through his content which comprises wit, sarcasm and social commentary.',
  },
];

const OurpastGuest = (props) => {
  const [activeMember, setActiveMember] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleMemberHover = (index) => {
    if (!isFlipping) {
      setActiveMember(index);
      setIsFlipping(true);
    }
  };

  const handleMemberLeave = () => {
    if (isFlipping) {
      setActiveMember(null);
      setIsFlipping(false);
    }
  };

  const handleFlipEnd = () => {
    setIsFlipping(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log("ankit09",props?.theme);
  return (
    <Grid container spacing={2}>
      {teamMembers.map((member, index) => (
        <Grid item xs={12} sm={4} key={index} style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
          <Paper
            onMouseEnter={() => handleMemberHover(index)}
            onMouseLeave={handleMemberLeave}
            sx={{
              cursor: 'pointer',
              border:"solid",
              borderColor:props?.theme=="light" ? "#c9c3c3" : "white",
              height: isMobile ? 200 : 300,
              width: isMobile ? 280 : "100%",
              maxWidth : isMobile ? 280 : 350,
              textAlign: 'center',
              transformStyle: 'preserve-3d',
              transform: activeMember === index ? 'rotateY(180deg)' : 'none',
              transition: 'transform 0.5s',
              borderRadius: 0,
            }}
            onTransitionEnd={handleFlipEnd}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                borderRadius: 0,
              }}
            >
             <div style={{
                width: '100%',
                height:  isMobile ? '80%': '85%',
                backfaceVisibility: 'hidden',
                borderRadius: 0,
              }}
              >
              <img
                src={member.photo}
                alt={member.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
              />
              </div>
              <div style={{ padding: 5,borderTop:"solid",borderBottom:"solid",borderColor:props?.theme=="light" ? "white" : "white"}}  className={props?.theme=="light" ? "typo-desciption-light" : "typo-desciption"}>
                <Typography variant="h5" style={{color:"white",fontFamily:"serif",letterSpacing:"1px"}}>{member.name}</Typography>
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                borderRadius: 0,
                display:"flex",justifyContent:"center",alignItems:"center",
                
              }}
               className={props?.theme=="light" ? "descrption-light" : "descrption"}
            >
              <div style={{ padding: 5, color:props?.theme=="light" ? "black" : "white",letterSpacing:"0.6px",lineHeight:"1.4",fontSize:"18px"}}>
                <Typography variant="body1">{member.description}</Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default OurpastGuest;

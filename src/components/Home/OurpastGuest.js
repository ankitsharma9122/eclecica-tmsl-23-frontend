import { Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { height } from '@mui/system';
import { useState } from 'react';
import "./OurpastGuest.css";

const teamMembers = [
  {
    name: 'Ashish khasyap',
    position: 'CEO',
    photo: 'https://picsum.photos/200/200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Ashish khasyap',
    position: 'CTO',
    photo: 'https://picsum.photos/200/201',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Ashish khasyap',
    position: 'CFO',
    photo: 'https://picsum.photos/201/200',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    name: 'Ashish khasyap',
    position: 'CEO',
    photo: 'https://picsum.photos/200/200',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Ashish khasyap',
    position: 'CTO',
    photo: 'https://picsum.photos/200/201',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Ashish khasyap',
    position: 'CFO',
    photo: 'https://picsum.photos/201/200',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const OurpastGuest = () => {
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
              borderColor:"white",
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
              <div style={{ padding: 5,borderTop:"solid",borderBottom:"solid",borderColor:"white",}} className="typo-desciption">
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
              className="descrption"
            >
              <div style={{ padding: 5,color:"white" }}>
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

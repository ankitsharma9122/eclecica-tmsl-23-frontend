import React from 'react';
import { Grid, Paper, IconButton } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { positions } from '@mui/system';
import "./Footer.css"
function Footer() {
  const iconStyles = {
    color: '#fff',
    fontSize: '2rem',
    margin: '0 1rem',
    transition: 'transform 0.3s ease',
  };

  const linkedInStyles = {
    '&:hover': {
      transform: 'scale(1.2)',
    },
  };

  const instagramStyles = {
    '&:hover': {
      transform: 'scale(1.2)',
    },
  };

  const whatsAppStyles = {
    '&:hover': {
      transform: 'scale(1.2)',
    },
  };

  return (
    <Paper elevation={3} style={{backgroundColor:"rgb(25 25 25)",width:"100%",padding:"20px"}} className="footer-main">
      <Grid container spacing={10} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <h3 style={{color:"white"}}>About Us</h3>
          <p style={{color:"rgb(242, 242, 242)", marginTop: '1rem' }}>Eclectica - The literary committee of Techno Main Salt Lake
            The official Literary Committee of Techno Main Salt lake, Kolkata</p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3 style={{color:"white",display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Follow us on </h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
            <IconButton style={{ ...iconStyles, ...linkedInStyles }}>
              <WhatsAppIcon style={{color:"white"}}/>
            </IconButton>
            <IconButton style={{ ...iconStyles, ...instagramStyles }}>
              < InstagramIcon style={{color:"white"}}/>
            </IconButton>
            <IconButton style={{ ...iconStyles, ...whatsAppStyles }}>
              <LinkedInIcon style={{color:"white"}}/>
            </IconButton>
            <IconButton style={{ ...iconStyles, ...whatsAppStyles }}>
              <TwitterIcon style={{color:"white"}}/>
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3 style={{color:"white"}}>Contact Us</h3>
          <p style={{color:"rgb(242, 242, 242)", marginTop: '1rem' }}>Techno main salt ,Kolkata</p>
          <p style={{color:"rgb(242, 242, 242)"}}>Phone: 8340472660</p>
          <p style={{color:"rgb(242, 242, 242)"}}>Email: Eclecticatmsl@gmail.com</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;

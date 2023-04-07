import React from "react";
import { Grid, Paper, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";
function Footer() {
  const iconStyles = {
    color: "#fff",
    fontSize: "2rem",
    margin: "0 1rem",
    transition: "transform 0.3s ease",
    borderRadius: "50%",
    backgroundColor: "#595858",
  };

  const linkedInStyles = {
    "&:hover": {
      transform: "scale(1.2)",
    },
  };

  const instagramStyles = {
    "&:hover": {
      transform: "scale(1.2)",
    },
  };

  const whatsAppStyles = {
    "&:hover": {
      transform: "scale(1.2)",
    },
  };

  return (
    <Paper
      elevation={3}
      style={{
        backgroundColor: "rgb(25 25 25)",
        width: "100%",
        padding: "20px",
        height:"fit-content",
      }}
      className="footer-main"
    >
      <Grid container spacing={12} justifyContent="space-between" justifyItems="center" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
        <Grid item xs={12} sm={4}>
          <h3 style={{ color: "white" }}>Eclectica</h3>
          <p style={{ color: "rgb(242, 242, 242)", marginTop: "1rem" }}>
            Eclectica - The 
            official Literary Committee of Techno Main Salt lake Kolkata , is a student - governed organization dedicated to building a healthy community receptive to works of literature.
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Follow us on{" "}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <a href="https://api.whatsapp.com/send?phone=7718651718">
            <IconButton style={{ ...iconStyles, ...linkedInStyles }}>
              <WhatsAppIcon style={{ color: "white" }} />
            </IconButton>
            </a>
            <a href="https://www.facebook.com/eclecticaTMSL/">
            <IconButton style={{ ...iconStyles, ...whatsAppStyles }}>
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
            </a>
            <a href="https://www.instagram.com/eclecticatmsl/">
            <IconButton style={{ ...iconStyles, ...instagramStyles }}>
              <InstagramIcon style={{ color: "white" }} />
            </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/eclectica-tmsl-342b31185/">
            <IconButton style={{ ...iconStyles, ...whatsAppStyles }}>
              <LinkedInIcon style={{ color: "white" }} />
            </IconButton>
            </a> 

          </div>
        </Grid>
        <Grid item xs={12} sm={4} style={{right:"0"}}>
          <h3 style={{ color: "white" }}>Contact Us</h3>
          <a href="https://goo.gl/maps/mCyi8Cxfk7Bc8GPr6" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",margin:"10px",marginLeft:"0px"}}>
          <RoomIcon style={{ marginRight: "0.5rem",marginTop:"0px",color:"white" }} />
          <p style={{ color: "rgb(242, 242, 242)" }}>
            Techno Main Salt Lake, Kolkata
          </p>
          </div>
          </a>
          <a href="tel:8809731829" style={{textDecoration:"none"}}>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",margin:"10px",marginLeft:"0px"}}>
            <PhoneIcon style={{ marginRight: "0.5rem",marginTop:"0px",color:"white" }} />
            <p style={{ color: "rgb(242, 242, 242)" }}>
             7718651718
            </p>
          
            </div>
            </a>
            <a href = "mailto: eclecticatmsl@gmail.com" style={{textDecoration:"none"}}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",margin:"10px",marginLeft:"0px"}}>
            <EmailIcon style={{ marginRight: "0.5rem",marginTop:"0px",color:"white" }} />
            <p style={{ color: "rgb(242, 242, 242)" }}>
            eclecticatmsl@gmail.com
          </p> 
          </div>
          </a>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;

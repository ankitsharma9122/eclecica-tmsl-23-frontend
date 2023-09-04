import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Divider, Box, IconButton ,  CircularProgress,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Contactus.css';
import axios from 'axios';
import { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contactus = (props) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [contactus,setcontactUs]=useState({
    name :"",
    email:"",
    contact:"",
    msg:"",
  });
  const [error,setError]=useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading,setLoading]=useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const styles = {
    root: {
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap:'wrap',
      padding: 32,
      marginTop:80,
      gap:"10px",

    },
    form: {
      maxWidth: 600,
      margin: '0 auto',
      padding: 16,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 4,
      backgroundColor: "white",
    },
    button: {
      marginTop: 16,
    },
    getInTouch: {
      maxWidth:600,
      height:"100%",
      padding: 16,
      border: '2px solid #E0E0E0',
      borderRadius: 4,
      backgroundColor: 'rgb(38, 0, 11)',
    },
    phone: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        color: '#fff',
      },
      phoneIcon: {
        marginRight: 10,
        color: '#fff',
      },
      phoneNum: {
        color: '#fff',
      },
  };
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
  useEffect(()=>{
    if ((contactus?.name && contactus?.email && contactus?.contact && contactus?.msg)) {
      setError(false);
    }
  },[contactus])
  const sendContactmsg=async ()=>{
    if ((!contactus?.name || !contactus?.email || !contactus?.contact || !contactus?.msg)) {
      setError(true);
      return ;
    }
    console.log("ankit 90",contactus);
    setLoading(true);
    try {
      await axios({
        method:"POST",
        url:"https://dull-gold-cow-shoe.cyclic.app/contact-us",
        data: {
          name: contactus?.name,
          email:contactus?.email,
          contact: contactus?.contact,
          message : contactus?.msg,
        },
      })
      .then(({data}) => {
        console.log("Message sent:", data);
        // Clear input fields or display success message to user
        setOpen(true);
        setcontactUs({
          name :"",
          email:"",
          contact:"",
          msg:"",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        // Display error message to user or retry request
      });
      
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div style={styles.root}>
      <Grid item xs={12} sm={10} md={8}>
        <Box style={styles.form} >
          <Typography variant="h4" align="center" gutterBottom  
          style={{color: props?.theme === "light" ? "black" : "black"}}>
            Drop a Message
          </Typography>
          <Divider />
          <form>
            <TextField
              value={contactus?.name}
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) =>
                setcontactUs((pre) => ({ ...pre, name: e.target.value }))
              }
            />
            <TextField
              label="Email"
              value={contactus?.email}
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) =>
                setcontactUs((pre) => ({ ...pre, email: e.target.value }))
              }
            />
            <TextField
              label="Phone"
              fullWidth
              value={contactus?.contact}
              margin="normal"
              variant="outlined"
              onChange={(e) =>
                setcontactUs((pre) => ({ ...pre, contact: e.target.value }))
              }
            />
            <TextField
              label="Message"
              fullWidth
              value={contactus?.msg}
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) =>
                setcontactUs((pre) => ({ ...pre, msg: e.target.value }))
              }
            />
            {error && <h5 style={{color:"red"}}>*please fill all the detail.</h5>}
            <Button
              variant="contained"
              color="primary"
              style={styles.button}
              className="click-to-know-button"
              onClick={sendContactmsg}
            >
              {loading ? (
                <CircularProgress size={30} style={{ color: "#ed8b08" }} />
              ) : (
                "submit"
              )}
            </Button>
          </form>
        </Box>
      </Grid>
      <div style={styles.getInTouch} className="contact-us">
        <Typography  variant="h4" align="center" gutterBottom style={{color:"white"}}>
          Get in Touch
        </Typography>
        <Divider variant="middle" style={{backgroundColor:"white"}} />
        <Typography variant="body1" align="center" style={{ marginTop: 16,color:"white" }}>
        Eclectica - The official literary committee of Techno Main Salt Lake.
        </Typography>
        <div style={styles.phone}>
          <EmailIcon style={styles.phoneIcon} />
          <Typography variant="body1" style={styles.phoneNum}>
            eclecticatmsl@gmail.com
          </Typography>
        </div>
        <div style={styles.phone}>
          <PhoneIcon style={styles.phoneIcon} />
          <Typography variant="body1" style={styles.phoneNum}>
            7718651718
          </Typography>
        </div>
        <div style={styles.phone}>
          <LocationOnIcon style={styles.phoneIcon} />
          <Typography variant="body1" style={styles.phoneNum}>
           Techno Main Salt Lake EM 4/5 , Salt Lake Sector 5, Kolkata, 700091
          </Typography>
        </div>
        <div style={{display:"flex",justifyContent:"row",alighnItem:"center",flexWrap:"wrap",height:"100%",width:"100%",marginTop:"20px"}} className="contact-us-map-section">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.078405559547!2d88.42484061476061!3d22.576170685180983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751a9d9c9e85%3A0x7fe665c781b10383!2sTechno%20Main%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1676697527323!5m2!1sen!2sin" style={ {height:"300px" ,border:"0",width:"50%"}} allowfullscreen="" className="contact-us-map"></iframe>
          <div style={{width:"50%"}} className="social-icons">
          <h3 style={{color:"white", display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>Follow us on </h3>
          <Divider variant="middle" style={{backgroundColor:"white"}} />
           <div style={{marginTop:"20px",display:"flex"}}>
           <a href="https://api.whatsapp.com/send?phone=7718651718">
            <IconButton style={{ ...iconStyles, ...linkedInStyles }}>
              <WhatsAppIcon style={{color:"white"}}/>
            </IconButton>
            </a>
            <a href="https://www.instagram.com/eclecticatmsl/">
            <IconButton style={{ ...iconStyles, ...instagramStyles }}>
              < InstagramIcon style={{color:"white"}}/>
            </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/eclectica-tmsl-342b31185/">
            <IconButton style={{ ...iconStyles, ...whatsAppStyles }}>
              <LinkedInIcon style={{color:"white"}}/>
            </IconButton>
            </a>
            <a href="https://www.facebook.com/eclecticaTMSL/">
            <IconButton style={{ ...iconStyles, ...whatsAppStyles }}>
              <FacebookIcon style={{color:"white"}}/>
            </IconButton>
             </a>
            </div>
          </div>
        </div>
      </div>
      {<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thank you for contacting us ! we'll reach out you soon.
        </Alert>
      </Snackbar>}
    </div>
  );
};

export default Contactus;

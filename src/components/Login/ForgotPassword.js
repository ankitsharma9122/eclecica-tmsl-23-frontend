import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Divider, Box, IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from "../../Firebase";


const ForgotPassword = (props) => {
  const [forgotemail,setforgotEmail]=useState();
  const [Error,setError]=useState("");
  const [loading,setloading]=useState(false);

  const styles = {
    root: {
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap:'wrap',
      padding: 32,
      gap:"10px",
      marginTop:"40px"
    },
    form: {
      maxWidth: 600,
      margin: '0 auto',
      padding: 16,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 4,
    },
    button: {
      marginTop: 16,
      width:"100%"
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
  const ForgotPasswordHandler=async()=>{
    if(!forgotemail){
    console.log("not gone");
      setError(true);
      return ;
    }else{
        try {
          sendPasswordResetEmail(auth,forgotemail).then(res=>{
            console.log("resend mail success!!",res);
          });
        } catch(err){
            console.log("Error in Forgot password",err)
        }
    }
  }
  return (
    <div style={styles.root}>
      <Grid item xs={12} sm={10} md={8}>
        <Box style={styles.form}>
          <Typography variant="h4" align="center" gutterBottom>
            Enter your Email
          </Typography>
          <Divider />
          <form>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e)=>(setforgotEmail(e.target.value))}
            />
            <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={ForgotPasswordHandler}
            >
             Reset password
            </Button>
          </form>
          <h4 style={{margin:"10px"}}>Already have an account?<Link onClick={()=>{props?.settabValue(0)}}>Login</Link></h4>
        </Box>
        </Grid>
    </div>
  );
};

export default ForgotPassword;

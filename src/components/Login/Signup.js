import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography, Divider, Box, IconButton
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import {auth} from "../../Firebase"
import PhoneInput from 'react-phone-number-input';
import { SignalCellular4BarTwoTone } from '@mui/icons-material';
import { async } from '@firebase/util';
import PhoneOTPPage from './PhoneOTPPage';

const Signup = (props) => {

  const [singupData,setSignUpData]=useState({
    name:"",
    mobile:"",
    password:"",
  });
  const _currentUser  = getAuth().currentUser;
  console.log(_currentUser,"currentUser")
  const [currentUser,setCurrentUser]=useState();
  const [otpPage,setOtpPage]=useState(0);
  const [confirmObj,setConfirmObj]=useState(null);
  console.log("ankit090",singupData?.mobile)
  const [Error,setError]=useState(false);
  const [disabledSubmit,setDisableSubmit]=useState(false);
  
  const checkhandler=async()=>{
    if(!singupData?.name || !singupData?.mobile || !singupData?.password){
      setError(true);
      return ;
    }
    else {
      setDisableSubmit(true);
      try {
        await setupRecaptch(singupData?.mobile);
        setOtpPage(1);
        setDisableSubmit(false);
      }catch(err){
        console.log("error in captch",err);
        setDisableSubmit(false);
      }
    //   createUserWithEmailAndPassword(auth,singupData?.email,singupData?.password).then((res)=>{
    //     console.log(res,"user created success!");
    //     setDisableSubmit(false);
    //   }).catch((err)=>{
    //     setDisableSubmit(false);
    //     console.log("Error in creating user",err?.errors?.message)
    // })
    }
  }
  const setupRecaptch=async(number)=>{
     const recaptchaVerifier = new RecaptchaVerifier( "recaptcha-container", {}, auth);
     recaptchaVerifier.render();
     try{
      const resp = await signInWithPhoneNumber(auth,"+91"+number,recaptchaVerifier);
      setConfirmObj(resp);
     }catch(err){
       console.log("error in signIn",err)
     } 
     
  }
  const styles = {
    root: {
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap:'wrap',
      padding: 32,
      gap:"10px"
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
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(user=>{
      setCurrentUser(user);
      // sessionStorage.setItem("Jwt-access-token",user?.accessToken);
      // sessionStorage.setItem("user",user?.email);
    })
    return unsubscribe;
  },[])

  return (
    <>
    {!confirmObj ? (<div style={styles.root}>
      <Grid item xs={12} sm={10} md={8}>
        <Box style={styles.form}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign-up to Eclectica
          </Typography>
          <Divider />
          <form>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e)=>(setSignUpData((pre)=>({...pre,name: e.target.value})),setError(false))}
            />
            <TextField
              label="phone Number"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e)=>(setSignUpData((pre)=>({...pre,mobile: e.target.value})),setError(false))}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e)=>(setSignUpData((pre)=>({...pre,password: e.target.value})),setError(false))}
            />
            {Error && <h5 style={{color:"red"}}>Please fill all the details</h5>}
            <div id="recaptcha-container" style={{margin:"10px", alignItems:"center"}}/>
            <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={checkhandler}
              disabled={disabledSubmit}
            >
              Send Otp
            </Button>
           
          </form>
          <h4 style={{margin:"10px"}}>Already have an account?<Link onClick={()=>{props?.settabValue(1)}}> Login</Link></h4>
        </Box>
        </Grid>
    </div>) : <PhoneOTPPage confirmObj={confirmObj}/>}
    </>

  );
};

export default Signup;

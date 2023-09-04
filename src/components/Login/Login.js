import React, { useState } from 'react';
import { Button, Grid, TextField, Typography, Divider, Box, IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import {signInWithPhoneNumber } from 'firebase/auth';
import {auth} from "../../Firebase";


const Login = (props) => {
  const [loginData,setloginData]=useState({
    mobile:"",
    password:"",
  });

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
      gap:"10px"
    },
    form: {
      minWidth:345,
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
  const clickHandler=()=>{
    if(!loginData?.mobile || !loginData?.password){
      setError("Please fill all the details above")
    }else{
      try{
        signInWithPhoneNumber(auth,"+91"+(loginData?.mobile),loginData?.password).then(res=>{
        console.log("logged In sucess",res);
       })
      }catch(err){
       console.log("error in logging!",err);
      }
    }
  }
  return (
    <div style={styles.root}>
      <Grid item xs={10} sm={10} md={8}>
        <Box style={styles.form}>
          <Typography variant="h4" align="center" gutterBottom>
            Login to Eclectica
          </Typography>
          <Divider />
          <form>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e)=>(setloginData((pre)=>({...pre,mobile:e.target.value})))}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e)=>(setloginData((pre)=>({...pre,password:e.target.value})))}
            />
            <h4 style={{margin:"10px"}}>Forgot password? <Link onClick={()=>{props?.settabValue(2)}}>Forgot password</Link></h4>
            <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={clickHandler}
            >
              Login
            </Button>
          </form>
        </Box>
        </Grid>
    </div>
  );
};

export default Login;

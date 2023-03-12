import React, { useState } from "react";
import { Button, Grid, Typography, Box, TextField } from "@mui/material";
import OTPInput from "react-otp-input";
import { auth } from "../../Firebase";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './phoneOTPPage.css';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PhoneOTPPage = (props) => {
  const [open, setOpen] = useState(true);
  const navigate=useNavigate();
  const handleClosesnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const [otp, setOtp] = useState("");
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  console.log("ankit898",otp)
  const handleOTPSubmit = async (event) => {
    console.log("ankit898calling")
      try{
        await (props?.confirmObj).confirm(otp);
        if(props?.singupData?.mobile && props?.singupData?.mobile==="8809731829"){
          sessionStorage.setItem("blog-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3JhYmFzdGkgYmFuZXJqZWUiLCJyb2xlIjoiY29udmVub3IiLCJ0b2tlbiI6IjI0LTA3LTIwMDEifQ.r2YYukXUKmYIfwspVm_ceUA31mb4IIO1otO7TK_lIZ8");
          sessionStorage.setItem("phone",props?.singupData?.mobile)
        } else{
          sessionStorage.setItem("blog-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY29uc3VtZXIgdG1zbCIsInJvbGUiOiJ1c2VyIiwidG9rZW4iOiIwNy00LTIwMDEifQ.REaOJ1FQfye7rB7OcIiyC8-3mv4GEMmG8Iu-dJnZv0U");
          sessionStorage.setItem("phone",props?.singupData?.mobile)
        }
        navigate("/blogs");
      }catch(err){
        console.log("otp is not correct!",err);
      }
  };
  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column",
      }}
    >

      <Typography variant="h5" style={{marginBottom:"10px",color:"white"}}>We've sent the code to your phone</Typography>

      <OTPInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>&nbsp;&nbsp;</span>}
        isInputNum={true}
        inputStyle={{
          border: "none",
          borderBottom: "2px solid #ccc",
          textAlign: "center",
          fontSize: isMobileScreen ? "20px" : "35px",
          width: isMobileScreen ? "35px" : "50px",
          height: isMobileScreen ? "50px" : "65px",
          margin: isMobileScreen ? "0 2px" : "0 12px",
        }}
        shouldAutoFocus={true}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "2rem 0" ,cursor:"pointer"}}
        onClick={handleOTPSubmit}
        className="click-to-know-button"
      >
        Verify Otp
      </Button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClosesnackbar}
        className="snakbar-otp"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "30%",
          right: "20px",
        }}
      >
        <Alert
          onClose={handleClosesnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Otp has been send to your Phone
        </Alert>
      </Snackbar>
      </>

  );
};

export default PhoneOTPPage;

import React, { useState } from "react";
import { Button, Grid, Typography, Box, TextField } from "@mui/material";
import OTPInput from "react-otp-input";
import { auth } from "../../Firebase";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useMediaQuery } from "@mui/material";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PhoneOTPPage = (props) => {
  const [open, setOpen] = useState(true);
  const handleClosesnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [otp, setOtp] = useState("");
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const handleOTPSubmit = async (event) => {
    event.preventDefault();
    // TODO: handle OTP verification logic
    //
    if (!otp || otp == "") {
      return;
    } else {
      await (props?.confirmObj).confirm(otp);
      window.history.pushState(null, null, "/blogs");
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

      <Typography variant="h5" style={{marginBottom:"10px"}}>Enter the Verification Code</Typography>

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
      >
        Verify Otp
      </Button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClosesnackbar}
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

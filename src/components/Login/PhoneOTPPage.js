import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  TextField,
} from '@mui/material'
import OTPInput from "react-otp-input";
import {auth} from "../../Firebase"

const PhoneOTPPage = (props) => {
  const [otp, setOTP] = useState("");

  const handleOTPSubmit = async (event) => {
    event.preventDefault();
    // TODO: handle OTP verification logic
    //
    if(!otp || otp==""){
        return ;
    } else {
      await (props?.confirmObj).confirm(otp)
      window.history.pushState(null, null, "/blogs");
    }
  };

  return (
    <Grid item xs={12} sm={10} md={8}>
      <Grid
        item
        xs={12}
        style={{
          borderRadius: "30px 30px 0 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            width: "80%",
            height: "80%",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography variant="h5">Enter Verification Code</Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{ margin: "2rem 0" }}
          >
            <OTPInput
              value={otp}
              onChange={setOTP}
              numInputs={6}
              separator={<span>&nbsp;&nbsp;</span>}
              isInputNum={true}
              inputStyle={{
                width: "40px",
                height: "50px",
                margin: "0 10px",
                fontSize: "32px",
                border: "none",
                borderBottom: "1px solid #ccc",
                textAlign: "center",
              }}
              shouldAutoFocus={true}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "2rem 0" }}
              onClick={handleOTPSubmit}
            >
              Verify Otp
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PhoneOTPPage;

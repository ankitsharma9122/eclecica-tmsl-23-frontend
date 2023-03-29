import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import blog_1 from "../images/blog_1.jpeg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useMediaQuery } from "@mui/material";



const subEventClubs = [
    {
      id: 1,
      Event: "Event 1",
      Rules:
        "A club for those who are passionate about coding and want to learn more about software development.",
      poc: "Person to contact [Ankit sharma 123456789]",
      amt :100,
    },
    {
        id: 1,
        Event: "Event 2",
        Rules:
          "A club for those who are passionate about coding and want to learn more about software development.",
        poc: "Person to contact [Ankit sharma 123456789]",
        amt :200,
    },
    {
        id: 1,
        Event: "Event 3",
        Rules:
          "A club for those who are passionate about coding and want to learn more about software development.",
        poc: "Person to contact [Ankit sharma 123456789]",
        amt :300,
    },
    {
        id: 1,
        Event: "Event 4",
        Rules:
          "A club for those who are passionate about coding and want to learn more about software development.",
        poc: "Person to contact [Ankit sharma 123456789]",
        amt :50,
    },
    {
        id: 1,
        Event: "Event 5",
        Rules:
          "A club for those who are passionate about coding and want to learn more about software development.",
        poc: "Person to contact [Ankit sharma 123456789]",
        amt :150,
    },
    {
        id: 1,
        Event: "Event 6",
        Rules:
          "A club for those who are passionate about coding and want to learn more about software development.",
        poc: "Person to contact [Ankit sharma 123456789]",
        amt :110,
    },
    {
        id: 1,
        Event: "Event 7",
        Rules:
          "A club for those who are passionate about coding and want to learn more about software development.",
        poc: "Person to contact [Ankit sharma 123456789]",
        amt :120,
    },
    // Add more sub-event clubs here
  ];
const closeButtonStyle = {
    position: "absolute",
    top: "8px",
    right: "8px",
  };
const Registration = ({setRegisterClicked}) => {
  const [UserInput, setUserInput] = useState({
    name: "",
    department: "",
    image: "",
    title: "",
    content: "",
    email: "",
  });
  const wordCount = UserInput?.content.trim().split(/\s+/).length;
  const [selectedClub, setSelectedClub] = useState(null);
  const [blogErrorEmail, setBlogErrorEmail] = useState(false);
  const [contentErrorLimitError, setcontentErrorLimit] = useState(false);
  const [formError, setformError] = useState(false);
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const handleImageUpload = (event) => {
    setUserInput((pre) => ({ ...pre, image: event.target.files[0] }));
  };
  
  
  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const handleDialogClose = () => {
    setSelectedClub(null);
  };

  console.log("error90", formError);

  return (
    <div
      style={{
        background: "white",
        width:isMobileScreen ? "100%" : "50%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: isMobileScreen ? "53px" :"70px",
        height: "100%",
        marginBottom: "30px",
      }}
    >
      <div>
        <DialogTitle disableTypography>
          <IconButton
            aria-label="close"
              onClick={() => {
                setRegisterClicked(false);
              }}
            style={{ float: "right" }}
          >
            <HighlightOffIcon />
          </IconButton>
          <h2>Register For Eclectica'23</h2>
        </DialogTitle>
        {/* <form> */}
        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                value={UserInput?.name}
                // onChange={(e) => setUserInput((pre)=>({...pre,name:e.target.value}))}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="email"
                label="Email"
                type="email"
                value={UserInput?.email}
                // onChange={(e) => setUserInput((pre)=>({...pre,email:e.target.value}))}
                fullWidth
              />
              {blogErrorEmail && (
                <div style={{ color: "red" }}>Please Enter a valid Email</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="college"
                label="college
                "
                type="text"
                value={UserInput?.department}
                // onChange={(e) => setUserInput((pre)=>({...pre,department:e.target.value}))}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Department"
                type="text"
                value={UserInput?.title}
                // onChange={(e) => setUserInput((pre)=>({...pre,title:e.target.value}))}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <h3>Registraing for Events</h3>
              <FormGroup>
                {subEventClubs.map((event)=>{
                    return (
                        <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <FormControlLabel control={<Checkbox />} label={event.Event} />
                        <h3>{event?.amt}</h3>
                        <div
                          style={{
                            marginLeft: "10px",
                            color: "blue",
                            textDecoration: "underline",
                            cursor: "pointer",
                            fontSize: "15px",
                          }}
                          onClick={() => handleClubClick(event)}
                        >
                          view Rules
                        </div>
                      </div>
                    )
                })}
              </FormGroup>
            </Grid>
          </Grid>
        </DialogContent>
        {/* <DialogActions>
          <Button
            onClick={() => {
              setBlogPopUp(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={validateCallhandler}>
            Publish
          </Button>
        </DialogActions> */}
        {/* </form> */}
        {/* </Dialog> */}
      </div>
      <Button
        variant="contained"
        color="primary"
        className="click-to-know-button"
        style={{ width:isMobileScreen ? "40%" : "25%" }}
      >
        Pay ₹ 300
      </Button>
      <Dialog open={!!selectedClub} onClose={handleDialogClose}>
        {selectedClub && (
          <>
            <DialogTitle  className="dialog-content-dev">{selectedClub.Event}</DialogTitle>
            <DialogContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#ffffff",
                padding: "16px",
              }}
              className="dialog-content-dev-1"
            >
              <IconButton
                style={closeButtonStyle}
                onClick={handleDialogClose}
              >
                {/* <CloseIcon /> */}
              </IconButton>
              <Typography variant="body1">
                {selectedClub.Rules}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{color:"rgb(224, 133, 21)"}}>
                 {selectedClub.poc}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Registration;

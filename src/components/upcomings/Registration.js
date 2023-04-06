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
  Typography,
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import payment_23 from "../images/payment_23.jpg";

const subEventClubs = [
  {
    id: 1,
    Event: "FIVE FEET DROP (OPEN MIC)",
    Rules: (
      <>
        <ul>
          <li>
            <strong style={{ color: "yellow" }}>Registration Fee :</strong> 100
          </li>
        </ul>
        Step into the limelight and share your voice with the world in our
        electrifying open mic event, FIVE FEET DROP which celebrates the power
        of creativity and self-expression.
        <ol style={{ paddingLeft: "16px", marginTop: "10px" }}>
          <li>
            Each participant will be allowed to speak for 4 minutes with 30-sec
            additional time.
          </li>
          <li>
            Participants need to present their self-written Poem, Story,
            Shayari, or stand-up comedy. The use of props and background music
            is not allowed.
          </li>
          <li>
            Participants will be judged based on content and presentation.
          </li>
          <li>
            Participants shall be straight away disqualified for using abusive
            language and plagiarised content.
          </li>
          <li>Winners will be declared on the day of the event.</li>
          <li>
            The decision of the judges is final and binding on all participants.
          </li>
        </ol>
      </>
    ),
    poc: "srabasti banerjee",
    amt: 100,
  },
  {
    id: 1,
    Event: "DISPUTATIO (DEBATE)",
    Rules: (
      <>
        The air crackles with intellectual energy as passionate minds collide
        and opposing viewpoints clash in our high-stakes debate event,
        DISPUTATIO.
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ color: "rgb(224, 133, 21)", paddingLeft: "16px" }}
        >
          GENERAL RULES
        </Typography>
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            At the end of the allotted time for the speech, the speaker must
            relieve the mic to the moderator. Not respecting the warning buzzer
            will lead to a score deduction.
          </li>
          <li>
            No abusive language/slang/colloquialisms will be tolerated. Personal
            attacks will not be tolerated as well.
          </li>
        </ol>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            color: "rgb(224, 133, 21)",
            paddingLeft: "16px",
            marginTop: "10px",
          }}
        >
          PRELIMS
        </Typography>
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            The prelims would be held in Turncoat format. Every speaker will be
            required to switch their stance in the middle as and when instructed
            by the moderator.
          </li>
          <li>The topic for the prelims will be declared beforehand.</li>
          <li>
            Each speaker will get 3 minutes to present in the prelims. A warning
            bell will be sounded at the 2-minute 30-second mark. The speech
            would be followed by a single rebuttal question that will be put
            forward by the moderator.
          </li>
          <li>
            The top participants from the prelims would proceed to the finals.
          </li>
        </ol>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            color: "rgb(224, 133, 21)",
            paddingLeft: "16px",
            marginTop: "10px",
          }}
        >
          FINALS
        </Typography>
        <ol style={{ paddingLeft: "16px" }}>
          <li>
            The finals would be face-off rounds between the speakers who qualify
            for the prelims. The speakers would be competing against each other
            one-on-one in an improvised Lincoln-Douglas Format.
          </li>
          <li>
            The topics for the finals would be revealed on-spot. The speakers
            will be given a preparation time of 30 minutes before the finals.
          </li>
        </ol>
      </>
    ),
    amt: 100,
  },
  {
    id: 1,
    Event: "SPOTLIGHT",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 400,
  },
  {
    id: 1,
    Event: "INQUIZZITIVE INDIA (solo) ",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 80,
  },
  {
    id: 1,
    Event: "INQUIZZITIVE INDIA (Duo) ",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 150,
  },
  {
    id: 1,
    Event: "OPEN GENERAL QUIZ (solo)",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 80,
  },
  {
    id: 1,
    Event: "OPEN GENERAL QUIZ (duo)",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 150,
  },
  {
    id: 1,
    Event: "BITS AND PIECES",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 60,
  },
  {
    id: 1,
    Event: "BITS AND PIECES (all content event)",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 150,
  },
  {
    id: 1,
    Event: "SNAPSCRIBE",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 120,
  },
  {
    id: 1,
    Event: "INKSPIRATION",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 60,
  },
  {
    id: 1,
    Event: "INKSPIRATION (ALL SKETCHING EVENT)",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 180,
  },
  {
    id: 1,
    Event: "RAPSODY",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 100,
  },
  {
    id: 1,
    Event: "WIKISPRINT",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 50,
  },
  {
    id: 1,
    Event: "WIKISPRINT (FOR ALL FUNZONE EVENTS",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 150,
  },
  {
    id: 1,
    Event: "CROSSWORD",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 50,
  },
  {
    id: 1,
    Event: "HASTY HOLMES",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 50,
  },
  // Add more sub-event clubs here
];
const subEventonlineClubs = [
  {
    id: 1,
    Event: "ARTISTIC VERSES",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 60,
  },
  {
    id: 1,
    Event: "THE SPACE COMPANY",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 60,
  },
  {
    id: 1,
    Event: "SPOTLIGHT",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 400,
  },
  {
    id: 1,
    Event: "PROSIMETRUM",
    Rules:
      "A club for those who are passionate about coding and want to learn more about software development.",
    poc: "Person to contact [Ankit sharma 123456789]",
    amt: 60,
  },
  // Add more sub-event clubs here
];
const closeButtonStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
};

const Registration = ({ setRegisterClicked }) => {
  const [formdata, setFormData] = useState({
    name: "",
    college: "",
    department: "",
    year: "",
    sec: "",
    email: "",
    contact: "",
    wp_contact: "",
    offline_events: "",
    online_events: "",
    payment: "",
  });

  const [checkboxValuesoffOnline, setCheckboxValuesoffOnline] = useState({});
  const [checkboxValuesOnline, setCheckboxValuesOnline] = useState({});
  const [totalAmmount, setTotalAmmount] = useState(0);

  const [selectedClub, setSelectedClub] = useState(null);
  const [blogErrorEmail, setBlogErrorEmail] = useState(false);
  const [formError, setformError] = useState(false);
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const handleDialogClose = () => {
    setSelectedClub(null);
  };

  console.log("ankit121", formdata);
  console.log("ankit122", totalAmmount);
  const handleChangeoffOnline = (event) => {
    const { name, checked } = event.target;
    setCheckboxValuesoffOnline((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    let offonline = "";
    setTimeout(() => {
      for (const key in checkboxValuesoffOnline) {
        if (checkboxValuesoffOnline[key] === true) {
          subEventClubs.map((event) => {
            if (key == event?.Event) {
              setTotalAmmount((pre) => pre + event?.amt);
            }
          });
          offonline = offonline + key + ",";
        } else {
          subEventClubs.map((event) => {
            if (key == event?.Event) {
              setTotalAmmount((pre) => pre - event?.amt);
            }
          });
        }
      }
      setFormData((pre) => ({ ...pre, offline_events: offonline }));
    }, 500);
  };
  const handleChangeOnline = (event) => {
    const { name, checked } = event.target;
    setCheckboxValuesOnline((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    let online = "";
    for (const key in checkboxValuesOnline) {
      if (checkboxValuesOnline[key] === true) {
        subEventClubs.map((event) => {
          if (key == event?.Event) {
            setTotalAmmount((pre) => pre + event?.amt);
          }
        });
        online = online + key + ",";
      } else {
        subEventClubs.map((event) => {
          if (key == event?.Event) {
            setTotalAmmount((pre) => pre - event?.amt);
          }
        });
      }
    }
    setFormData((pre) => ({ ...pre, online_events: online }));
  };

  return (
    <div
      style={{
        background: "white",
        width: isMobileScreen ? "100%" : "50%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: isMobileScreen ? "53px" : "70px",
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
                margin="dense"
                id="name"
                label="Name"
                type="text"
                value={formError?.name}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, name: e.target.value }))
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="College"
                label="college
                "
                type="text"
                value={formdata?.college}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, college: e.target.value }))
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="title"
                label="Department"
                type="text"
                value={formdata?.department}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, department: e.target.value }))
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="title"
                type="text"
                label="Year"
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, year: e.target.value }))
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                sx={{ minWidth: 120 }}
                size="small"
                style={{ width: "100%" }}
              >
                <InputLabel id="demo-select-small">section</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={formdata?.sec}
                  label="Section"
                  onChange={(e) =>
                    setFormData((pre) => ({ ...pre, sec: e.target.value }))
                  }
                >
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="others">
                    <em>Others</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="email"
                label="Email"
                type="email"
                value={formdata?.email}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, email: e.target.value }))
                }
                fullWidth
              />
              {blogErrorEmail && (
                <div style={{ color: "red" }}>Please Enter a valid Email</div>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="title"
                label="Contact No."
                type="text"
                value={formdata?.contact}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, contact: e.target.value }))
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="title"
                label="WhatsApp No."
                type="text"
                value={formdata?.title}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, wp_contact: e.target.value }))
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <h3>Registraing for Events</h3>
              <FormGroup>
                {subEventClubs.map((event) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        style={{ fontSize: isMobileScreen ? "12px" : "20px" }}
                        control={
                          <Checkbox
                            name={event.Event}
                            checked={
                              checkboxValuesoffOnline[event.Event] || false
                            }
                            onChange={handleChangeoffOnline}
                          />
                        }
                        label={event.Event}
                      />
                      <div
                        style={{
                          marginLeft: "10px",
                          color: "blue",
                          textDecoration: "underline",
                          cursor: "pointer",
                          fontSize: "15px",
                          marginRight: "10px",
                        }}
                        onClick={() => handleClubClick(event)}
                      >
                        Rules
                      </div>
                    </div>
                  );
                })}
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <h3>Registraing for online Events</h3>
              <FormGroup>
                {subEventonlineClubs.map((event) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <FormControlLabel
                        style={{ fontSize: isMobileScreen ? "12px" : "20px" }}
                        control={
                          <Checkbox
                            name={event.Event}
                            checked={checkboxValuesOnline[event.Event] || false}
                            onChange={handleChangeOnline}
                          />
                        }
                        label={event.Event}
                      />
                      <div
                        style={{
                          marginLeft: "10px",
                          color: "blue",
                          textDecoration: "underline",
                          cursor: "pointer",
                          fontSize: "15px",
                          marginRight: "10px",
                        }}
                        onClick={() => handleClubClick(event)}
                      >
                        Rules
                      </div>
                    </div>
                  );
                })}
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <h3>payment: </h3>
              <div>Please do scan and pay ₹</div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "300px",
                  height: "300px",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={payment_23}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <h3>upload: </h3>
              <div>Please upload the payment proof in *img format</div>
            </Grid>
            <Grid item xs={12} style={{ width: "100%" }}>
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                style={{ width: "100%" }}
                onChange={(e) =>
                  setFormData((pre) => ({ ...pre, payment: e.target.value }))
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
      </div>
      <Grid item xs={12} style={{ width: "90%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              setRegisterClicked(false);
            }}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="click-to-know-button"
            style={{ width: isMobileScreen ? "30%" : "20%" }}
          >
            submit
          </Button>
        </div>
      </Grid>
      <Dialog open={!!selectedClub} onClose={handleDialogClose}>
        {selectedClub && (
          <>
            <DialogTitle className="dialog-content-dev">
              {selectedClub.Event}
            </DialogTitle>
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
              <IconButton style={closeButtonStyle} onClick={handleDialogClose}>
                {/* <CloseIcon /> */}
              </IconButton>
              <Typography variant="body1">{selectedClub.Rules}</Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ color: "rgb(224, 133, 21)" }}
              >
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

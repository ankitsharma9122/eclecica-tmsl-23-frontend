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
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./PublishBlogDialog.css";

const PublishBlogDialog = ({ open, blogPopup,setBlogPopUp}) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [UserInput,setUserInput]=useState({
    name:"",
    department:"",
    image:"",
    content:"",
    email:"",
    title:"",
  })
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Dialog
      open={open}
      onClose={!blogPopup}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle disableTypography>
        <IconButton
          aria-label="close"
          onClick={()=>{setBlogPopUp(false)}}
          style={{ float: "right" }}
        >
          <HighlightOffIcon />
        </IconButton>
        <h2>Publish Your Blog</h2>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below to publish your blog.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="department"
                label="Department"
                type="text"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
            <DialogContentText>
             Upload your cover image for the Blog
           </DialogContentText>
              <input
                accept="image/*"
                id="image"
                type="file"
                onChange={handleImageUpload}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                margin="dense"
                id="content"
                label="Content"
                type="text"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                fullWidth
                multiline
                aria-label="minimum height"
                minRows={8}
                placeholder="fill your blog content"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setBlogPopUp(false)}} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Publish
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PublishBlogDialog;

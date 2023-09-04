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
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import blog_1 from '../images/blog_1.jpeg';

const PublishBlogDialog = ({ open, blogPopup, setBlogPopUp,setblogPostSucess }) => {
  const [UserInput, setUserInput] = useState({
    name: "",
    department: "",
    image: "",
    title:"",
    content: "",
    email: "",
  });
  const wordCount = UserInput?.content.trim().split(/\s+/).length;
  const [blogErrorEmail, setBlogErrorEmail] = useState(false);
  const [contentErrorLimitError, setcontentErrorLimit] = useState(false);
  const [formError, setformError] = useState(false);
  const navigate=useNavigate();

  
  const handleImageUpload = (event) => {
    setUserInput((pre)=>({...pre,image:event.target.files[0]}))
  };

  console.log("error90",formError)
  useEffect(()=>{
    if (
      UserInput.name !== "" &&
       UserInput.title !== "" &&
      UserInput.department !== "" &&
      UserInput.image !== ""
    ) {
      setformError(false);
    }
    // if(!!sessionStorage.getItem("blog-token") || !!sessionStorage.getItem("phone")){
    //   navigate("/auth");
    //   return ;
    // }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isMailValid = emailRegex.test(UserInput?.email);
    if (isMailValid) {
      setBlogErrorEmail(false);
    }
    if (wordCount >= 80 || wordCount <= 100) {
      setcontentErrorLimit(false);
    }
  },[UserInput])

  const validateCallhandler = async () => {
    console.log("ankit901",UserInput)
    if (
      UserInput.name == "" ||
      UserInput.department == "" ||
      UserInput.image == "" ||
      UserInput.title==""
    ) {
      setformError(true);
      return;
    }
    // if(!!sessionStorage.getItem("blog-token") || !!sessionStorage.getItem("phone")){
    //   navigate("/auth");
    //   return;
    // }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isMailValid = emailRegex.test(UserInput?.email);
    if (!isMailValid) {
      setBlogErrorEmail(true);
      return;
    }
    if (wordCount <= 80 || wordCount >= 100) {
      setcontentErrorLimit(true);
      return;
    } 
    await fetch("https://puce-kind-newt.cyclic.app/blog-post", {
      method: "POST",
      body: JSON.stringify({
        name: UserInput?.name,
        department: UserInput?.department,
        email: UserInput?.email,
        phoneNumber: sessionStorage.getItem("phone"),
        image: blog_1,
        content: UserInput?.content,
        title: UserInput?.title,
        token_req: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY29uc3VtZXIgdG1zbCIsInJvbGUiOiJ1c2VyIiwidG9rZW4iOiIwNy00LTIwMDEifQ.REaOJ1FQfye7rB7OcIiyC8-3mv4GEMmG8Iu-dJnZv0U",
        approved: "pending",
        user: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setBlogPopUp(false);
        setblogPostSucess(true);
      })
      .catch((err)=>{console.log("error while posting",err)});
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
          onClick={() => {
            setBlogPopUp(false);
          }}
          style={{ float: "right" }}
        >
          <HighlightOffIcon />
        </IconButton>
        <h2>Publish Your Blog</h2>
      </DialogTitle>
      {/* <form> */}
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
                value={UserInput?.name}
                onChange={(e) => setUserInput((pre)=>({...pre,name:e.target.value}))}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                id="department"
                label="Department"
                type="text"
                value={UserInput?.department}
                onChange={(e) => setUserInput((pre)=>({...pre,department:e.target.value}))}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title of Blog"
                type="text"
                value={UserInput?.title}
                onChange={(e) => setUserInput((pre)=>({...pre,title:e.target.value}))}
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
                value={UserInput?.email}
                onChange={(e) => setUserInput((pre)=>({...pre,email:e.target.value}))}
                fullWidth
              />
              {blogErrorEmail && <div style={{color:"red"}}>Please Enter a valid Email</div>}
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                margin="dense"
                id="content"
                label="Content"
                type="text"
                value={UserInput?.content}
                onChange={(e) => setUserInput((pre)=>({...pre,content:e.target.value}))}
                fullWidth
                multiline
                aria-label="minimum height"
                minRows={4}
                placeholder="fill your blog content between 80-100 words"
                style={{ width: "100%" }}
              />
              {contentErrorLimitError && <div style={{color:"red"}}>word limit is 80-100 words please check!</div>}
              {formError && <div style={{color:"red"}}>*All the field's are  mandatory</div>}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
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
        </DialogActions>
      {/* </form> */}
    </Dialog>
  );
};

export default PublishBlogDialog;

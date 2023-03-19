import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PublishBlogDialog from "./PublishBlogDialog";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import EditBlog from "./EditBlog";
import "./CardBlog.css";
import { Button } from "@mui/material";

const CardBlog = ({ title, author, image, content, pending, id,email,department }) => {
  console.log("ankit676", id);
  const [open, setOpen] = useState(false);
  const [blogPopup,setBlogPopUp]=useState(false);
  const [editByAdmin, setEditByAdmin] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDelete = async () => {
    console.log("delte");
    setOpen(false);
    const res = await fetch(
      `https://puce-kind-newt.cyclic.app/delete-by-admin/${id}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      // setDeleted(true);
      window.location.reload();
    } else {
      console.error(`Failed to delete blog: ${res.status} ${res.statusText}`);
    }
  };

  return (
    <div>
      <Card style={{ maxWidth: "345px", margin: "20px" }}>
        <CardMedia
          style={{ height: "0", paddingTop: "56.25%" }}
          image={image}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="text-content"
          >
            {content}
          </Typography>
        </CardContent>
        <CardHeader
          subheader={`by ${author}`}
          action={
            sessionStorage.getItem("blog-token") ==
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3JhYmFzdGkgYmFuZXJqZWUiLCJyb2xlIjoiY29udmVub3IiLCJ0b2tlbiI6IjI0LTA3LTIwMDEifQ.r2YYukXUKmYIfwspVm_ceUA31mb4IIO1otO7TK_lIZ8" &&
            sessionStorage.getItem("phone") === "8809731829" && (
              <>
                <IconButton onClick={() => setEditByAdmin(true)}>
                  <EditIcon  
                  />
                </IconButton>
                <IconButton onClick={handleClickOpen}>
                  <DeleteIcon />
                </IconButton>
                {pending && (
                  <Button
                    variant="contained"
                    color="primary"
                    className="click-to-know-button"
                  >
                    Approve
                  </Button>
                )}
              </>
            )
          }
        />
      </Card>
      {editByAdmin && (
        <EditBlog
          title={title}
          author={author}
          email={email}
          image={image}
          content={content}
          pending={true}
          id={id}
          department={department}
          open={editByAdmin} editByAdmin={editByAdmin} setEditByAdmin={setEditByAdmin}
        />
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure that you want to delete?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>cancle</Button>
          <Button onClick={handleDelete} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CardBlog;

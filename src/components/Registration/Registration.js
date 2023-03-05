import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import blog_1 from "../images/blog_1.jpeg"

const subEventClubs = [
  {
    id: 1,
    name: "Coding Club",
    description:
      "A club for those who are passionate about coding and want to learn more about software development.",
    head: "John Smith",
    image:  blog_1,
  },
  {
    id: 2,
    name: "Design Club",
    description:
      "A club for those who are passionate about graphic design and want to learn more about design principles.",
    head: "Jane Doe",
    image: blog_1,
  },
  // Add more sub-event clubs here
];

const cardStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  backgroundColor: "#f0f0f0",
  clipPath: "polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)",
};

const closeButtonStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
};
const styles = {
  root: {
    minWidth: 300,
    margin: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  media: {
    height: 250,
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  content: {
    padding: '1rem',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  role: {
    color: '#9B9B9B',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '14px',
  },
};
const Registration = () => {

  const [selectedClub, setSelectedClub] = useState(null);

  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const handleDialogClose = () => {
    setSelectedClub(null);
  };

  return (
  <div  style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"80px",justifyContent:"center"}}>
     {subEventClubs.map((club) => (
      <Card style={styles.root} onClick={() => handleClubClick(club)}>
        <CardMedia
        style={styles.media}
        image={club.image}
       />
        <CardHeader title={club.name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {club.head}
          </Typography>
        </CardContent>
        <Button onClick={() => handleClubClick(club)}>Click to know more</Button>
      </Card>
     ))}    
      <Dialog open={!!selectedClub} onClose={handleDialogClose}>
        {selectedClub && (
          <>
            <DialogTitle>{selectedClub.name}</DialogTitle>
            <DialogContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#ffffff",
                padding: "16px",
              }}
            >
              <IconButton
                style={closeButtonStyle}
                onClick={handleDialogClose}
              >
                {/* <CloseIcon /> */}
              </IconButton>
              <Typography variant="body1">
                {selectedClub.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Head of {selectedClub.name}: {selectedClub.head}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Registration;

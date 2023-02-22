import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
// import CloseIcon from "@material-ui/icons/Close";
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

const Registration = () => {
  const [selectedClub, setSelectedClub] = useState(null);

  const handleClubClick = (club) => {
    setSelectedClub(club);
  };

  const handleDialogClose = () => {
    setSelectedClub(null);
  };

  return (
    <div style={{marginTop:"80px"}}>
<Grid container spacing={2}>
  {subEventClubs.map((club) => (
    <Grid item xs={12} sm={6} md={4} key={club.id}>
      <Card onClick={() => handleClubClick(club)}>
        <CardHeader title={club.name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {club.head}
          </Typography>
        </CardContent>
        <img src={club.image} alt={club.name} />
        <Button onClick={() => handleClubClick(club)}>Click to know more</Button>
      </Card>
    </Grid>
  ))}
</Grid>

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

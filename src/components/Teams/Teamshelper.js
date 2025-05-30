import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import "./Teams.css";

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
    color:"rgb(247, 158, 2)"
  },
  role: {
    color: 'white',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '14px',
  },
};

const Teamshelper = ({ name, role, description, image }) => {
  return (
    <Card style={styles.root}>
      <CardMedia
        style={styles.media}
        image={image}
        title={name}
      />
      <div className="team-dev-card-main">
      <CardContent style={styles.content}>
        <Typography style={styles.name} gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography style={styles.role} variant="body2" color="textSecondary" component="p">
          {role}
        </Typography>
      </CardContent>
      </div>
    </Card>
  );
};

export default Teamshelper;

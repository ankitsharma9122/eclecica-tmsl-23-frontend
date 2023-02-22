import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './CardBlog.css';


const CardBlog = ({ title, author, image, content }) => {

  const handleEdit = () => {
    // Add your edit functionality here
  }

  const handleDelete = () => {
    // Add your delete functionality here
  }

  return (
    <Card style={{maxWidth:"345px",margin:"20px"}}>
      <CardMedia style={{height: "0", paddingTop: "56.25%"}} image={image} />
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
          <>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </>
        }
      />
    </Card>
  );
};

export default CardBlog;

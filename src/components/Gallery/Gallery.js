import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import blog_1 from '../images/blog_1.jpeg';
import ReactPlayer from 'react-player/lazy'
import { useMediaQuery, Button, Typography } from "@mui/material";
import trailer from "../images/trailer.mp4";
import { useTheme } from "@mui/material/styles";
import "./Gallery.css";

function srcset(image, size, rows = 5, cols = 5) {

  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{marginTop:"80px"}}>
    <div style={{margin:"10px"}}>
    <h1 style={{color:"rgb(247, 158, 2)"}}>Eclectica Gallery</h1>
    <div style={{color:"white"}}>Welcome to our gallery! Here, we proudly showcase the creative talents of our club members, as well as other emerging writers and artists in the community.Whether you are a seasoned writer, a budding artist, or simply someone who appreciates the beauty and power of words, we hope that you will find something to love in our gallery. So take your time, explore our collection.</div>
    </div>
    <ImageList
      sx={{margin:"10px"}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
        <div className="about-us-div-video-gal">
          <ReactPlayer url={trailer} controls light={blog_1} width="100%" height="100%"/>
          <ReactPlayer url={trailer} controls light={blog_1} width="100%" height="100%"  style={{
                display: isMobile ? "none" : "block"
              }} />
        </div>
        <ImageList
      variant="quilted"
      cols={4}
      rowHeight={121}
      sx={{margin:"10px"}}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <div className="about-us-div-video-gal" style={{display:isMobile ? "block" : "none"}}>
       <ReactPlayer url={trailer} controls light={blog_1} width="100%" height="100%"  style={{display: isMobile ? "block" : "none"}} />
      </div>
    </div>
  );
}

const itemData = [
  {
    img: blog_1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: blog_1,
    title: 'Burger',
  },
  {
    img:blog_1,
    title: 'Camera',
  },
  {
    img: blog_1,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: blog_1,
    title: 'Hats',
    cols: 2,
  },
  {
    img: blog_1,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: blog_1,
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

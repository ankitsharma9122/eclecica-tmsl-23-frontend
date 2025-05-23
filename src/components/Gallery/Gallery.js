import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery, Button, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import "./Gallery.css";
import { useEffect } from 'react';
const g_2  = "/images/gallery/g_2.jpg"
const g_3  = "/images/gallery/g_3.jpg"
const g_4  = "/images/gallery/g_4.jpg"
const g_5  = "/images/gallery/g_5.jpg"
const g_6  = "/images/gallery/g_6.jpg"
const g_7  = "/images/gallery/g_7.jpg"
const g_11 =  "/images/gallery/g_11.jpg"
const g_13 =  "/images/gallery/g_13.jpg"
const g_15 =  "/images/gallery/g_15.jpg"
const g_16 =  "/images/gallery/g_16.jpg"
const g_17 =  "/images/gallery/g_17.jpg"
const g_18 =  "/images/gallery/g_18.jpg"
const g_19 =  "/images/gallery/g_19.jpg"
const g_22 =  "/images/gallery/g_22.jpg"
const g_24 =  "/images/gallery/g_24.jpg"
const g_26 =  "/images/gallery/g_26.jpg"
function srcset(image, size, rows = 5, cols = 5) {

  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function Gallery(props) {
  const itemData1 = [
    {
      img: g_5,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: '/images/gallery/g_2.jpg',
      title: 'Burger',
    },
    {
      img:g_3,
      title: 'Camera',
    },
    {
      img: g_4,
      title: 'Coffee',
      cols: 2,
    },
    {
      img: g_7,
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: g_15,
      title: 'Basketball',
    },
    {
      img: g_16,
      title: 'Fern',
    },
    {
      img: g_11,
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img:g_24,
      title: 'Tomato basil',
    },
    {
      img: g_26,
      title: 'Sea star',
    },
  ];
  const itemData2 = [
    {
      img: g_17,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: g_22,
      title: 'Burger',
    },
    {
      img:g_19,
      title: 'Camera',
    },
    {
      img: g_18,
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: g_19,
      title: 'Basketball',
    },
    {
      img: g_4,
      title: 'Fern',
    },
    {
      img: g_6,
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img:g_13,
      title: 'Tomato basil',
      rows:2,
      cols:2,
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div style={{marginTop:"80px"}}>
    <div style={{margin:"10px"}}>
    <h1 style={{color: props?.theme === "light" ? "black" : "rgb(41 200 255)"}}>Eclectica Gallery</h1>
    <div style={{color: props?.theme === "light" ? "black" : "white",letterSpacing:"0.6px",lineHeight:"1.4",fontSize:"18px"}} className="small-font">Welcome to our gallery! Pictures are a way of capturing moments. As time fleets by, here are some of the moments which we captured from our past events, we hope that you will find something to love in our gallery. So take your time &  explore our collection.</div>
    </div>
    <ImageList
      sx={{margin:"10px"}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData1.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
        <ImageList
      variant="quilted"
      sx={{margin:"10px"}}
      cols={4}
      rowHeight={121}
    >
      {itemData2.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}

          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}



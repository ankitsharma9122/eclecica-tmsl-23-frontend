import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import blog_1 from '../images/blog_1.jpeg';

function srcset(image, size, rows = 5, cols = 5) {

  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (
    <div>
    <ImageList
      sx={{marginTop:"80px"}}
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
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
    <iframe className="iframe-video" width="560" height="400" src="https://www.youtube.com/embed/5VDrDnV9BV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
    </div>
        <ImageList
    //   sx={{marginTop:"80px"}}
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

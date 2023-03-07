import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Button } from "@mui/material";
import blog_1 from "../images/blog_1.jpeg";
import blog_2 from "../images/blog_2.jpeg";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./Home.css"

const images = [
  blog_1,
  blog_2,
  blog_1,
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDotButtonClick = (index) => {
    setActiveIndex(index);
  };

  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
        marginBottom: theme.spacing(2),
        // height: isMobile ? 300 : 450,
        width:"100wv"
      }}
    >
      <Carousel
        autoPlay={true}
        animation="slide"
        navButtonsAlwaysVisible={true}
        interval={5000}
        index={activeIndex}
        onChange={handleCarouselChange}
        next={(next, active) => (
          <Button
            style={{ position: "absolute", right: 0 }}
            onClick={next}
            disabled={active === images.length - 1}
          >
            <ChevronLeftIcon/>
          </Button>
        )}
        prev={(prev, active) => (
          <Button
            style={{ position: "absolute", left: 0 }}
            onClick={prev}
            disabled={active === 0}
          >
            <ChevronRightIcon/>
          </Button>
        )}
      >
        {images.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ height: isMobile ? 300 : 450, objectFit: "cover",width:"100%" }}
            />
            <div
              style={{
                display: "flex",
                position: "absolute",
                bottom: theme.spacing(2),
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor:
                      activeIndex === index
                        ? theme.palette.primary.main
                        : "rgba(255, 255, 255, 0.5)",
                    margin: theme.spacing(0, 1),
                    cursor: "pointer",
                  }}
                  onClick={() => handleDotButtonClick(index)}
                />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <h1 style={{ display:"flex",justifyContent:"center",alignItems:"center" ,color :"white"}}> will be live very soon.</h1>
    </div>
  );
};

export default Home;

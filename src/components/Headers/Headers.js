import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Headers.css";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import CollectionsIcon from "@mui/icons-material/Collections";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import eclectica_23_img from "../images/eclectica_23_img.png";
import eclectica_23_black from "../images/eclectica_23_black.png"
import { ListItemIcon } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const drawerWidth = 240;
const navItems = [
  {
    item: "Home",
    icon: <HomeIcon />,
    url: "",
  },
  {
    item: "Events",
    icon: <UpcomingIcon />,
    url: "events",
  },
  {
    item: "Subclub",
    icon: <AppRegistrationIcon />,
    url: "sub-club",
  },
  // {
  //   item: "Blog",
  //   icon: <ArticleIcon />,
  //   url: "blogs",
  // },
  {
    item: "Gallery",
    icon: <CollectionsIcon />,
    url: "gallery",
  },
  {
    item: "Teams",
    icon: <EmojiPeopleIcon />,
    url: "eclecticateams",
  },
  {
    item: "contact us",
    icon: <ContactPageIcon />,
    url: "contact",
  },
];

export default function DrawerAppBar({theme,setTheme}) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [indexMenu, setIndexMenu] = React.useState(0);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // route cross check after refresh
  useEffect(() => {
    var href = window.location.href.split("/")[3];
    for (let i = 0; i < navItems.length; i++) {
      if (navItems[i]?.url === href) {
        setIndexMenu(i);
        break;
      }
    }
  }, []);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "10px",
          minHeight: "56px",
        }}
      >
        <img
          src={theme === "light" ? eclectica_23_black : eclectica_23_img}
          style={{
            height: "35px",
            width: "99px",
            // borderRadius: "50%",
            marginRight: "6px",
          }}
          alt="images loading"
        ></img>
        {/* <Typography
          variant="h6"
          sx={{ my: 2 }}
          style={{ fontFamily: "serif", fontWeight: "400", color: theme === "light" ? "black" : "white" }}
        >
          Eclectica'23
        </Typography> */}
      </div>
      <Divider style={{ fontWeight: "600", backgroundColor: theme === "light" ? "black" : "white" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <List>
          {navItems.map((idx) => (
            <ListItem
              key={idx?.item}
              disablePadding
              style={{ marginTop: "10px" }}
            >
              <ListItemButton
                onClick={() => {
                  navigate(`/${idx?.url}`);
                  // window.history.pushState(null, null, `/${idx?.url}`);
                }}
              >
                <ListItemIcon style={{ minWidth: "39px", color: theme === "light" ? "black" : "white" }}>
                  {idx?.icon}
                </ListItemIcon>
                <ListItemText style={{  color: theme === "light" ? "black" : "white" }} primary={idx?.item} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding style={{ marginTop: "10px" }}>
            {theme === "dark" ? (
               <ListItemButton
                  onClick={()=>{sessionStorage.setItem("theme","light")
                  document.querySelector('body').className = 'light-mode';
                  setTheme("light");
                }}
               >
              <ListItemIcon  style={{ minWidth: "39px", color: "white" }}>
                <LightModeIcon/>
                </ListItemIcon>
                <ListItemText style={{ color: "white" }} primary="Light Mode" />
                
                </ListItemButton>
              ) : (
                <ListItemButton
                  onClick={()=>{sessionStorage.setItem("theme","dark")
                  const bodyClassList = document.body.classList;
                  setTheme("dark");
                  if (bodyClassList.contains('light-mode')) {
                    bodyClassList.remove('light-mode');
                  }
                }}
                >
                <ListItemIcon style={{ minWidth: "39px",  color: theme === "light" ? "black" : "white" }}>
                <NightlightIcon 
                />
                </ListItemIcon>
                <ListItemText style={{  color: theme === "light" ? "black" : "white" }} primary="Dark Mode" />
            
                </ListItemButton>
              )}

          </ListItem>
        </List>
      </div>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" style={{ backgroundColor: theme === "light" ? "#0990af" : "#263441" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: -2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ height: "35px", width: "50px",color: theme === "light" ? "white" : "white" }} />
          </IconButton>
          <div
            className="nav-div"
            style={{ display: "flex", justifyContent: "space-between",justifyContent:"center",alignItems:"center" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
              style={{
                height:"40px",
                width:"120px",
                marginRight: "6px",
              }}>
              <img
                src={eclectica_23_img}
                style={{width:"100%",height:"100%"}}
               className="logo-img"
              ></img>
              </div>
              {/* <Typography variant="h6" style={{ fontFamily: "serif",color: theme === "light" ? "white" : "white"  }}>
                Eclectica'23
              </Typography> */}
            </div>
            <div
              style={{
                position: "absolute",
                right: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item, idx) => (
                  <Button
                    key={item?.item}
                    sx={{
                      color: theme === "light" ? "white" : "white",
                      marginRight: "5px",
                      borderBottom:
                        indexMenu === idx ? `2px solid ${theme==="light" ? "white" : "white"}` : "none",       
                      borderRadius: "0px",
                    }}
                    onClick={() => {
                      navigate(`/${item?.url}`);
                      setIndexMenu(idx);
                    }}
                  >
                    {item?.item}
                  </Button>
                ))}
              </Box>
              {theme === "dark" ? (
                <LightModeIcon
                  style={{ alignItems: "center", cursor: "pointer", color:"white" }}
                  sx={{ display: { xs: "none", sm: "block" } }}
                  onClick={()=>{sessionStorage.setItem("theme","light")
                  setTheme("light");
                  document.querySelector('body').className = 'light-mode';
                }}
                />
              ) : (
                <NightlightIcon
                  style={{ alignItems: "center", cursor: "pointer",color:"white" }}
                  sx={{ display: { xs: "none", sm: "block" } }}
                  onClick={()=>{sessionStorage.setItem("theme","dark")
                  setTheme("dark");
                  const bodyClassList = document.body.classList;
                if (bodyClassList.contains('light-mode')) {
                  bodyClassList.remove('light-mode');
                }
                }}
                />
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: theme == "light" ? "white" : "#343139",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

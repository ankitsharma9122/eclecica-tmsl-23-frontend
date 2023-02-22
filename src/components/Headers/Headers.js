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
import eclectica_23_img from "../images/eclectica_23_img.jpg";
import { ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;
const navItems = [
  {
    item: "Home",
    icon: <HomeIcon />,
    url: "",
  },
  {
    item: "upcoming Events",
    icon: <UpcomingIcon />,
    url: "upcomingevents",
  },
  {
    item: "subclub",
    icon: <AppRegistrationIcon />,
    url: "registration",
  },
  {
    item: "Blog",
    icon: <ArticleIcon />,
    url: "blogs",
  },
  {
    item: "Gallery",
    icon: <CollectionsIcon />,
    url: "gallery",
  },
  {
    item: "Teams",
    icon: <EmojiPeopleIcon />,
    url: "teams",
  },
  {
    item: "contact us",
    icon: <ContactPageIcon />,
    url: "contact",
  },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "10px",
        }}
      >
        <img
          src={eclectica_23_img}
          style={{
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            marginRight: "6px",
          }}
          alt="images loading"
        ></img>
        <Typography
          variant="h6"
          sx={{ my: 2 }}
          style={{ fontFamily: "system-ui", fontWeight: "600" }}
        >
          Eclectica'23
        </Typography>
      </div>
      <Divider />
      <div style={{ display: "flex",flexDirection:"column",alignContent:"flex-start", justifyContent: "space-between" }}>
      <List>
        {navItems.map((idx) => (
          <ListItem key={idx?.item} disablePadding>
            <ListItemButton
              onClick={() => {
                window.history.pushState(null, null, `/${idx?.url}`);
              }}
            >
              <ListItemIcon style={{ minWidth: "39px" }}>
                {idx?.icon}
              </ListItemIcon>
              <ListItemText primary={idx?.item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListItemButton style={{position:"absolute",bottom:"15px" }}>
      <LogoutIcon style={{minWidth: "39px"}}/> <ListItemText primary="Logout" />
      </ListItemButton>
      </div>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ height: "35px", width: "50px" }} />
          </IconButton>
          <div
            className="nav-div"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src={eclectica_23_img}
                style={{
                  height: "35px",
                  width: "35px",
                  borderRadius: "50%",
                  marginRight: "6px",
                }}
              ></img>
              <Typography variant="h6">Eclectica'23</Typography>
            </div>
            <div style={{ position: "absolute", right: "10px",display: "flex", justifyContent:"center",alignItems:"center" }}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item?.item}
                    sx={{ color: "#fff", marginRight: "5px" }}
                    onClick={() => {
                      window.history.pushState(null, null, `/${item?.url}`);
                    }}
                  >
                    {item?.item}
                  </Button>
                ))}
              </Box>
              <AccountCircleIcon style={{alignItems:"center" ,cursor:"pointer"}} sx={{ display: { xs: "none" ,sm: "block"} }}/>
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
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

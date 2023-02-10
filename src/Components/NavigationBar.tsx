import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  ThemeProvider,
  Toolbar,
  Typography,
  createMuiTheme,
  createTheme,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  LibraryBooks,
  Drafts,
  PhoneEnabled,
  EmojiPeople,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const routes = [
  {
    title: "About",
    path: "/about",
    icon: <EmojiPeople />,
  },
  // Render the RAGW page only if the user is internal
  {
    title: "Education & Experience",
    path: "/eduction",
    icon: <LibraryBooks />,
  },
  {
    title: "Recommendations",
    path: "/recommendations",
    icon: <Drafts />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <PhoneEnabled />,
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#321A43",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});


export const NavigationBar = () => {
  

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.up(800));

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" enableColorOnDark style={{ borderBottom: "1" }}>
        {/* This is the Bar With The Routes */}
        <Toolbar>
          <Typography variant="subtitle1">
            <Avatar
              onClick={() => navigate("/")}
              alt="Ahmed"
              src={Logo}
              sx={{ width: 34, height: 34 }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "right",
              height: "3rem",
              p: 1,
              m: 2,
              ml: 4,
            }}
          >
            {matches &&
              routes.map((item) => (
                <Button
                  key={item.title}
                  variant="text"
                  disableElevation
                  onClick={() => navigate(item.path)}
                  startIcon={item.icon}
                  sx={{ color: "white" }}
                >
                  {item.title}
                </Button>
              ))}
            {!matches && (
              <AppBar
                position="static"
                enableColorOnDark
                elevation={0}
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignContent: "right",
                  height: "3rem",
                }}
              >
                <Toolbar sx={{ justifyContent: "flex-end" }}>
                  <Button
                    // Place the icon on the right side
                    disableElevation
                    variant="outlined"
                    startIcon={<MenuIcon style={{ fontSize: "2.5em" }} />}
                    onClick={() => setOpen(true)}
                    sx={{ color: "white" }}
                  />
                  <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    anchor="top"
                    SlideProps={{ timeout: 400 }}
                    sx={{ border: "none", padding: 0 }}
                  >
                    <List sx={{ backgroundColor: "#321A43" }}>
                      {routes.map((route, i) => (
                        <ListItem
                          key={i}
                          onClick={() => {
                            setOpen(false);
                            navigate(route.path);
                          }}
                          sx={{ cursor: "pointer", color: "white" }}
                          divider={false}
                        >
                          <ListItemButton sx={{color: 'white'}}>
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            <ListItemText primary={route.title} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Drawer>
                </Toolbar>
              </AppBar>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import CasinoIcon from "@mui/icons-material/Casino";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import ProfilePicture from "../Assets/White Elegant Minimalistic Background Twitter Profile Picture.png";
import { Link, Outlet } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  width: "100%",
  maxWidth: "300px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "300px",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function LinkedInHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar className="container d-flex justify-content-between align-items-center py-1">
          <Box className="d-flex align-items-center">
          <Link to="/">
            <Box>
              <LinkedInIcon
                className="d-none d-sm-block"
                sx={{ fontSize: "2.5rem", color: "#0077b5" }}
              />
            </Box>
            </Link>
            <Box className="d-block me-2 d-sm-none">
              <Avatar alt="Noor Mustafa" src={ProfilePicture} />
            </Box>
            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          </Box>
          <Box className="d-flex justify-content-around align-items-center w-50">
            <Link className="text-decoration-none" to="/">
              <Box className="d-flex flex-column align-items-center text-center d-none d-md-block">
                <IconButton color="inherit">
                  <Badge color="error" variant="dot">
                    <HomeIcon sx={{ color: "#000", fontSize: "30px" }} />
                  </Badge>
                </IconButton>
                <span
                  className="text-dark d-none d-md-block"
                  style={{ fontSize: "12px" }}
                >
                  Home
                </span>
              </Box>
            </Link>
            <Box className="d-flex flex-column align-items-center text-center d-none d-md-block">
              <IconButton color="inherit">
                <PeopleIcon sx={{ color: "#666", fontSize: "30px" }} />
              </IconButton>
              <span
                className="text-dark d-none d-md-block"
                style={{ fontSize: "12px" }}
              >
                Network
              </span>
            </Box>

            <Link className="text-decoration-none" to="/JobDetail">
              <Box className="d-flex flex-column align-items-center text-center d-none d-md-block">
                <IconButton color="inherit">
                  <WorkIcon sx={{ color: "#666", fontSize: "30px" }} />
                </IconButton>
                <span
                  className="text-dark d-none d-md-block"
                  style={{ fontSize: "12px" }}
                >
                  Jobs
                </span>
              </Box>
            </Link>
            <Box className="d-flex flex-column align-items-center">
              <IconButton color="inherit">
                <MessageIcon sx={{ color: "#666", fontSize: "30px" }} />
              </IconButton>
              <span
                className="text-dark d-none d-md-block"
                style={{ fontSize: "12px" }}
              >
                Messaging
              </span>
            </Box>
            <Box className="d-flex flex-column align-items-center d-none d-md-block">
              <IconButton className="ms-2" color="inherit">
                <NotificationsIcon sx={{ color: "#666", fontSize: "30px" }} />
              </IconButton>
              <span
                className="text-dark d-none d-md-block"
                style={{ fontSize: "12px" }}
              >
                Notification
              </span>
            </Box>
            <Box>
              {/* Profile Detail modal */}
              <IconButton className="d-none d-md-block" onClick={handleMenu}>
                <Avatar
                  alt="Sanaullah"
                  src={ProfilePicture}
                  sx={{ width: 30, height: 30 }}
                />
              </IconButton>
              <Typography
                variant="body2"
                className="text-dark d-none d-md-block  text-center"
              >
                Me
              </Typography>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Box width={"30vh"} p={1}>
                  <Box className="d-flex align-items-center mb-2">
                    <Avatar
                      src={ProfilePicture}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box ml={2}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Noor Mustafa Jatoi
                      </Typography>
                      <Typography variant="body2">
                        Frontend Developer | HTML5 | CSS3 | JavaScript |
                        React.js
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Link to="/ProfilePage" className="text-decoration-none">
                      <Button fullWidth
                        variant="outlined"
                        className="text-small rounded-3 text-center text-primary rounded-pill"
                      >
                        View Profile
                      </Button>
                    </Link>
                  </Box>
                  <Divider className="my-2 w-100" />
                  <Box>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Account
                    </Typography>
                    <Typography variant="body2">
                      Try 1 month of Premium for PKR0
                    </Typography>
                    <Typography variant="body2">Settings & Privacy</Typography>
                    <Typography variant="body2">Help</Typography>
                    <Typography variant="body2">Language</Typography>
                  </Box>
                  <Divider className="my-2 w-100" />

                  <Box mt={1}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Manage
                    </Typography>
                    <Typography variant="body1">Posts & Activity</Typography>
                    <Typography variant="body1">Job Posting Account</Typography>
                    <Typography variant="body1" color="error">
                      Sign Out
                    </Typography>
                  </Box>
                </Box>
              </Menu>
            </Box>
          </Box>
          <Box className="d-flex align-items-center">
            <Box className="d-flex flex-column align-items-center text-center d-none d-lg-block me-3">
              <IconButton color="inherit">
                <AppsIcon sx={{ color: "#666", fontSize: "30px" }} />
              </IconButton>
              <Typography
                variant="body2"
                className="text-dark d-none d-md-block"
              >
                For Business
              </Typography>
            </Box>

            <Box className="d-flex flex-column align-items-center text-center d-none d-lg-block">
              <IconButton color="inherit">
                <CasinoIcon sx={{ color: "#666", fontSize: "30px" }} />
              </IconButton>
              <Typography
                variant="body2"
                className="text-dark d-none d-md-block"
              >
                Try Sales Navigator
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

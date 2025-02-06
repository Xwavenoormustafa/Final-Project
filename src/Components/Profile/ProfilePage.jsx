import React from "react";
import {
  Avatar,
  Box,
  Card,
  Typography,
  CardContent,
  Link,
  IconButton,
  Divider,
  Card as MuiCard,
  Grid,
  Tab,
  Tabs,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import QR_Code from "../Assets/QR_Code.jpeg";
import HiringImg from "../Assets/HiringImage.png";
import CoverPhoto from "../../Components/Assets/baner.jpg";
import ProfilePicture from "../Assets/White Elegant Minimalistic Background Twitter Profile Picture.png";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BarChartIcon from "@mui/icons-material/BarChart";
import LaunchIcon from "@mui/icons-material/Launch";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import xWaveLogo from "../Assets/xwavepak_logo.jpeg";
import certificate from "../Assets/certificate.jpeg";
import AddIcon from "@mui/icons-material/Add";

import SideProfile from "../Assets/side-profile.jpeg";

import SideProfile2 from "../Assets/side-profile 2.jpeg";
import SideProfile4 from "../Assets/side-profile4.jpeg";
import SecurityIcon from "@mui/icons-material/Security";
import Killer_Tools from "../Assets/Killer Tools.jpeg";
import Todo_Img from "../Assets/Todo_img.jpeg";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Microsoft_Logo from "../Assets/microsoft_logo.jpeg";
import Ibex_Logo from "../Assets/Ibex_Logo.jpeg";
import HelpIcon from "@mui/icons-material/Help";
import FolderIcon from "@mui/icons-material/Folder";
import { Button } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <Box style={{ backgroundColor: "#f4f4f4" }}>
      <Box className="container mt-4">
        <Box className="row">
          <Box className="col-lg-8 col-md-12 mb-4">
            <Card>
              <CardContent className="p-0">
                {/* Cover Photo */}
                <Box
                  className="w-100"
                  style={{
                    height: "250px",
                    backgroundColor: "#ddd",
                    backgroundImage: `url(${CoverPhoto})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <Box className="px-3 px-md-4 mt-n5">
                  <Avatar
                    className="border border-white"
                    style={{
                      width: 150,
                      height: 150,
                      marginBottom: "0.5rem",
                      borderWidth: "3px",
                      marginTop: "-110px",
                    }}
                    src={ProfilePicture}
                  />
                  <Typography variant="h5" className="fw-bold">
                    Noor Mustafa Jatoi
                  </Typography>
                  <Typography variant="h6" className="fw-normal">
                    Frontend Developer | HTML5 | CSS3 | JavaScript | React.js
                  </Typography>
                  <Typography variant="body2" className="fw-normal">
                    Khairpur, Sindh, Pakistan
                    <Typography
                      component="span"
                      className="text-primary fw-bold ms-1"
                      style={{ fontSize: "16px" }}
                    >
                      Contact Info
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-primary fw-bold mt-2"
                  >
                    My Portfolio <LaunchIcon />
                  </Typography>
                  <Box className="d-flex align-items-center mt-2">
                    <Typography
                      variant="h6"
                      className="text-primary fw-medium me-3"
                    >
                      100 followers
                    </Typography>
                    <Typography variant="h6" className="text-primary fw-medium">
                      120 connections
                    </Typography>
                  </Box>
                </Box>

                <Box className="mx-3 mt-3 d-flex flex-wrap gap-2">
                  <Button variant="contained" className="rounded-pill">
                    Open to
                  </Button>
                  <Button variant="outlined" className="rounded-pill">
                    Add Profile Section
                  </Button>
                  <Button variant="outlined" className="rounded-pill">
                    Enhance Profile
                  </Button>
                  <Button variant="outlined" className="rounded-pill">
                    Resources
                  </Button>
                </Box>

                <Box className="d-flex gap-3 p-3">
                  <Card
                    className="shadow-sm"
                    style={{ width: "400px", backgroundColor: "#E3F2FD" }}
                  >
                    <CardContent className="position-relative">
                      <Typography variant="subtitle2" className="fw-bold">
                        Open to work
                      </Typography>
                      <Typography variant="body2">
                        Associate and Marketing Associate roles
                      </Typography>
                      Show details
                      <IconButton
                        size="small"
                        className="position-absolute top-0 end-0 m-2"
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </CardContent>
                  </Card>
                  <Card className="shadow-sm border" style={{ width: "400px" }}>
                    <CardContent className="position-relative">
                      <Typography variant="subtitle2" className="fw-bold">
                        Share that you’re attract qualified candidates.
                      </Typography>
                      <Typography variant="body2">
                        Associate and Marketing Associate roles
                      </Typography>
                      Get Started
                      <IconButton
                        size="small"
                        className="position-absolute top-0 end-0 m-2"
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Box>
              </CardContent>
            </Card>

            <Box className="col-12">
              <Card className="card shadow-sm mt-3 bg-white position-relative">
                <CardContent>
                  <Typography variant="subtitle2" className="fw-bold">
                    Analytics
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-muted d-flex align-items-center"
                  >
                    <VisibilityIcon fontSize="small" className="me-1" /> Private
                    to you
                  </Typography>
                  <Box className="d-flex justify-content-between mt-3">
                    <Box>
                      <Box className="d-flex align-items-center">
                        <PeopleIcon className="me-1" />
                        <Typography variant="body2" className="fw-bold">
                          7 profile views
                        </Typography>
                      </Box>
                      <Typography variant="body2" className="text-muted ms-4">
                        Discover who's viewed <br /> your profile.
                      </Typography>
                    </Box>
                    <Box>
                      <Box className="d-flex align-items-center">
                        <BarChartIcon className="me-1" />
                        <Typography variant="body2" className="fw-bold">
                          12 post impressions
                        </Typography>
                      </Box>
                      <Typography variant="body2" className="text-muted ms-4">
                        Check out who's engaging with your posts.
                      </Typography>
                      <Typography variant="caption" className="text-muted ms-4">
                        Past 12 days
                      </Typography>
                    </Box>
                    <Box>
                      <Box className="d-flex align-items-center">
                        <SearchIcon className="me-1" />
                        <Typography variant="body2" className="fw-bold">
                          220 search appearances
                        </Typography>
                      </Box>
                      <Typography variant="body2" className="text-muted ms-4">
                        See how often you appear in search results.
                      </Typography>
                    </Box>
                  </Box>

                  <Button variant="text" className="mt-3 w-100 text-primary">
                    Show all analytics →
                  </Button>
                </CardContent>
              </Card>
            </Box>

            <Box className="col-12">
              <Card
                className="card shadow-sm mt-3"
                style={{ backgroundColor: "#FFFFFF", position: "relative" }}
              >
                <CardContent>
                  <Typography variant="subtitle2" className="fw-bold">
                    About
                  </Typography>
                  <Box className="mt-2 p-3">
                    <Typography variant="body2">
                      I am pursuing Bachelors in Medical Sciences and I am
                      currently enrolled in a 12 months Frontend Web Development
                      course with xWave, a tech initiative to eradicate poverty
                      and empower youth of Pakistan with IT courses and skills.
                      Proficient in HTML, CSS, and Bootstrap, I am successfully
                      designed 8+ websites and landing pages.
                    </Typography>
                    <Typography className="mt-2 rounded-pill">...</Typography>
                    <Typography className="position-absolute bottom-0 end-0 m-2 fw-normal">
                      ... See more
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box className="col-12">
              <Card className="card shadow-sm mt-3 bg-white position-relative">
                <CardContent>
                  <Box className="d-flex justify-content-between align-items-center mb-3">
                    <Typography variant="h6" className="fw-bold">
                      Activity
                    </Typography>
                    <Button
                      variant="outlined"
                      className="text-dark rounded-pill"
                    >
                      Create a post
                    </Button>
                  </Box>
                  <Typography variant="body2" className="text-primary mb-3">
                    1,000 followers
                  </Typography>

                  <Box className="d-flex justify-content-start mb-3 d-none d-md-block">
                    <Button
                      variant="contained"
                      className="rounded-pill px-3 bg-success text-small"
                    >
                      Posts
                    </Button>
                    <Button
                      variant="outlined"
                      className="text-dark rounded-pill mx-2"
                    >
                      Comments
                    </Button>
                    <Button
                      variant="outlined"
                      className="text-dark rounded-pill mx-2"
                    >
                      Videos
                    </Button>
                    <Button
                      variant="outlined"
                      className="text-dark rounded-pill mx-2"
                    >
                      Images
                    </Button>
                    <Button
                      variant="outlined"
                      className="text-dark rounded-pill mx-2"
                    >
                      Documents
                    </Button>
                  </Box>

                 

                  <Box className="border-bottom pb-3 mb-3">
                    <Typography variant="body2" className="fw-bold">
                      Generate and Copy Random Secure Passwords with
                      JavaScript 
                    </Typography>
                    <Box className="d-flex align-items-center">
                      <img
                        src={QR_Code}
                        className="me-3 rounded"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                      <Typography variant="body2" className="text-muted">
                        I recently worked on a small JavaScript project to
                        create a random password generator. Here's how it works!
                      </Typography>
                    </Box>
                    <Box className="d-flex align-items-center justify-content-between mt-2 text-muted small">
                      <Typography variant="body2" className="me-3">
                        32 ❤️
                      </Typography>
                      <Box className="d-flex">
                        <Typography variant="body2" className="me-3">
                          2 comments
                        </Typography>
                        <Typography variant="body2">2 reposts</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Button variant="text" className="mt-3 w-100 text-dark">
                    Show all posts →
                  </Button>
                </CardContent>
              </Card>
            </Box>

            {/* Experience Section */}
            <Box className="col-12">
              <Card
                className="shadow-sm mt-3"
                style={{ backgroundColor: "#FFFFFF", position: "relative" }}
              >
                <CardContent>
                  <Box className="d-flex justify-content-between align-items-center mb-3">
                    <Typography variant="h6" className="fw-bold">
                      Experience
                    </Typography>
                    <Box>
                      <IconButton size="small">
                        <AddIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>

                  <div className="d-flex">
                    <img
                      src={xWaveLogo}
                      alt="xWave Logo"
                      className="me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "4px",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <Typography variant="subtitle1" className="fw-bold">
                        Frontend Development Fellow
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-muted"
                        style={{ marginBottom: "4px" }}
                      >
                        xWave • Apprenticeship
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-muted"
                        style={{ marginBottom: "8px" }}
                      >
                        Jan 2024 - Present • 1 yr 1 mo
                      </Typography>
                      <Typography variant="body2" className="text-muted">
                        Sindh, Pakistan · Hybrid
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        className="mt-2"
                        style={{ color: "#5f5f5f", lineHeight: "1.5" }}
                      >
                        Completing a 12-month front-end web development course,
                        with over 7 projects on websites and landing pages using
                        HTML, CSS3, Bootstrap 5 and JavaScript. The program also
                        includes English and Professional Development classes to
                        enhance communication skills and market understanding.{" "}
                        <span style={{ color: "#1976d2", cursor: "pointer" }}>
                          ...see more
                        </span>
                      </Typography>

                      {/* Skills */}
                      <div className="d-flex align-items-center mt-2">
                        <Typography
                          variant="body2"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#5f5f5f",
                          }}
                        >
                          <span className="me-1" style={{ fontSize: "14px" }}>
                            &#128204;
                          </span>
                          Communication, Time Management and +2 skills
                        </Typography>
                      </div>

                     
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Box>

            <Box className="col-12">
              <Card
                className="card shadow-sm mt-3"
                style={{ backgroundColor: "#FFFFFF", position: "relative" }}
              >
                <CardContent>
                  <div className="d-flex justify-content-between align-items-center">
                    <Typography variant="subtitle2" className="fw-bold">
                      Education
                    </Typography>
                    <div>
                      <IconButton size="small">
                        <AddIcon />
                      </IconButton>
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mt-3">
                    <img
                      src={xWaveLogo}
                      alt="College Logo"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "4px",
                        objectFit: "cover",
                        marginRight: "16px",
                      }}
                    />
                    <div>
                      <Typography variant="body2" className="fw-bold">
                        Government Boys Degree College, Pir Jo Goth
                      </Typography>
                      <Typography variant="body2" className="text-muted">
                        Bachelor of Sciences
                      </Typography>
                      <Typography variant="caption" className="text-muted">
                        Jan 2024 - Jan 2026
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Box>

            <Box className="col-12">
              <Card className="shadow-sm mt-3 border bg-white position-relative">
                <CardContent>
                  <Box className="d-flex justify-content-between align-items-center mb-3">
                    <Typography variant="h6" className="fw-bold">
                      Projects
                    </Typography>
                    <Box>
                      <IconButton size="small">
                        <AddIcon />
                      </IconButton>
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box className="d-flex mb-4">
                    <Box>
                      <Typography variant="subtitle1" className="fw-bold">
                        Leganic Website
                      </Typography>
                      <Typography variant="body2" className="text-muted">
                        Oct 2024 - Oct 2024
                      </Typography>
                      <Typography variant="body2" className="mt-1">
                        - Created a responsive e-commerce website using HTML5,
                        CSS3, and JavaScript. Key features include a carousel,
                        add-to-cart functionality, form validation, and
                        sign-up/login functionality with local storage.
                      </Typography>
                     
                    </Box>
                  </Box>


                  <Divider className="my-2 w-100" />
                  <Typography className="mt-3 fw-bold text-center">
                    Show all 4 projects →
                  </Typography>
                </CardContent>
              </Card>

              {/* Skill section */}
              <Box className="col-12">
                <Card
                  className="shadow-sm mt-3"
                  style={{ backgroundColor: "#FFFFFF", position: "relative" }}
                >
                  <CardContent>
                    <Box className="d-flex justify-content-between align-items-center mb-3">
                      <Typography variant="h6" className="fw-bold">
                        Skills
                      </Typography>
                      <Box>
                        <IconButton size="small">
                          <AddIcon fontSize="small" />
                        </IconButton>
                        <IconButton size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>

                    <div>
                      <Typography variant="h6" className="mt-5">
                        CSS
                      </Typography>
                      <Box className="d-flex align-items-center">
                        <img
                          src={xWaveLogo}
                          alt="xWave Logo"
                          className="me-2"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "4px",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="subtitle1" className="fw-bold">
                          Frontend Development Fellow
                        </Typography>
                      </Box>

                    

                      <Typography
                        variant="body2"
                        className="text-secondary mt-2 ms-2"
                      >
                        Show all 4 details →
                      </Typography>

                      <Divider className="my-2 w-100" />

                      <Typography variant="h6">JavaScript</Typography>

                      <Box className="d-flex align-items-center">
                        <img
                          src={xWaveLogo}
                          alt="xWave Logo"
                          className="me-2"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "4px",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="subtitle1" className="fw-bold">
                          Frontend Development Fellow
                        </Typography>
                      </Box>

                      <Divider className="my-2 w-100" />

                      <Typography variant="body2" className="text-center mt-2">
                        Show all 11 Projects →
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Box>

              <Box className="mt-3 bg-white rounded-2 shadow-sm p-3">
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Interests
                </Typography>
                <Tabs variant="scrollable" scrollButtons="auto">
                  <Tab className="text-success" label="Companies" />
                  <Tab label="Groups" />
                  <Tab label="Newsletters" />
                  <Tab label="Schools" />
                </Tabs>

                <Box className="mt-2">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Card className="d-flex align-items-center p-1 border">
                        <Avatar
                          src={Microsoft_Logo}
                          className="me-2"
                          style={{ width: 50, height: 50 }}
                        />
                        <CardContent className="p-0 flex-grow-1">
                          <Typography variant="subtitle1" fontWeight="bold">
                            Microsoft
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            24,636,105 followers
                          </Typography>
                          <Button
                            className="rounded-pill mt-2 text-dark border-dark"
                            variant="outlined"
                          >
                            ✓ Following
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>

                    
                  </Grid>
                  <Typography className="mt-3 fw-bold text-center">
                    Show all companies →
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Right Section */}
            <Box className="col-lg-4 col-md-12">
              <Card className="shadow p-3 rounded-3 d-flex justify-content-between">
                <Box>
                  <Typography variant="body1 pt-1 mt-3" className="fw-bold">
                    Profile language
                  </Typography>
                  <Typography variant="body2" className="text-secondary">
                    English
                  </Typography>
                </Box>
                <Box>
                  <EditIcon />
                </Box>
              </Card>
              

              <Card sx={{ borderRadius: 3, boxShadow: 1, marginTop: 3 }}>
                <CardContent sx={{ padding: 0 }}>
                  <img
                    className="w-100"
                    src={HiringImg}
                    alt="Hiring"
                    style={{ borderRadius: "12px 12px 0 0" }}
                  />
                  <Box padding={2}>
                    <Typography fontWeight="bold" variant="h6">
                      See who's hiring on LinkedIn.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* second section */}
              <Box className="p-2 d-flex rounded-3 flex-column gap-2 bg-white mt-4 border">
                <Typography className="ms-1" variant="h6">
                  More Profile for you
                </Typography>
                <Box className="d-flex align-items-center mb-2">
                  <Avatar src={SideProfile} sx={{ width: 60, height: 60 }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Saleem
                    </Typography>
                    <Typography variant="body2">
                      Administrator || Graphic Designer || Social Media Manager ||
                      Video Editing 
                    </Typography>
                    <Button
                      className="rounded-pill mt-2 text-dark border-dark"
                      variant="outlined"
                    >
                      + Follow
                    </Button>
                  </Box>
                </Box>
                <Divider className="my-2 w-100" />
                
                <Divider className="my-2 w-100" />
               
                <Divider className="my-2 w-100" />
               
                <Divider className="my-2 w-100" />
              </Box>
              {/* Third section */}
              <Box className="p-2 d-flex rounded-3 flex-column gap-2 bg-white mt-4 border">
                <Typography className="ms-1" variant="body1">
                  People you may know
                </Typography>
                <Typography className="ms-1 text-secondary" variant="body2">
                  From your company
                </Typography>
                <Box className="d-flex align-items-center mb-2">
                  <Avatar src={SideProfile} sx={{ width: 60, height: 60 }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Pratik Bagal
                    </Typography>
                    <Typography variant="body2">
                      HR Manager at YerlaTech Solution
                    </Typography>
                    <Button
                      className="rounded-pill mt-2 text-dark border-dark"
                      variant="outlined"
                    >
                      <PersonAddAltIcon /> Connect
                    </Button>
                  </Box>
                </Box>
                <Divider className="my-2 w-100" />
                <Box className="d-flex align-items-center mb-2">
                  <Avatar src={SideProfile2} sx={{ width: 60, height: 60 }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Ashish Mishal
                    </Typography>
                    <Typography variant="body2">
                      SDE @ Suma Soft | 60k LinkedIn | AI & Tech | MERN Developer
                      | Open for Collaboration🤝
                    </Typography>
                    <Button
                      className="rounded-pill mt-2 text-dark border-dark"
                      variant="outlined"
                    >
                      <PersonAddAltIcon /> Connect
                    </Button>
                  </Box>
                </Box>
                <Divider className="my-2 w-100" />
                
                <Divider className="my-2 w-100" />
                <Box className="d-flex align-items-center mb-2">
                  <Avatar src={SideProfile4} sx={{ width: 60, height: 60 }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Syed Mustafa Haider
                    </Typography>
                    <Typography variant="body2">
                      CEO @ Code Encoders | | Blockchain Developer | JavaScript
                      Developer | Web3 Developer | NodeJS Expert |
                    </Typography>
                    <Button
                      className="rounded-pill mt-2 text-dark border-dark"
                      variant="outlined"
                    >
                      <PersonAddAltIcon /> Connect
                    </Button>
                  </Box>
                </Box>
              </Box>
              <MuiCard className="rounded-3 shadow-black mt-3">
                <CardContent className="p-0">
                  <img className="w-100" src={HiringImg} alt="Hiring" />
                  <Box className="p-2">
                    <Typography className="mb-1 fw-bold " variant="h6">
                      See who's hiring on LinkedIn.
                    </Typography>
                  </Box>
                </CardContent>
              </MuiCard>
            </Box>
          </Box>

          {/* Footer Section */}
          <Box className="py-4 px-2 mt-4">
            <Grid container className="justify-content-between" spacing={4}>
              <Grid item xs={12} sm={6} md={2.4}>
                <Typography variant="body1" gutterBottom>
                  About
                </Typography>
                <Typography variant="body2">
                  Professional Community Policies
                </Typography>
                <Typography variant="body2">Privacy & Terms</Typography>
                <Typography variant="body2">Sales Solutions</Typography>
                <Typography variant="body2">Marketing Solutions</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={2.4}>
                <Typography variant="body1" gutterBottom>
                  Accessibility
                </Typography>
                <Typography variant="body2">Careers</Typography>
                <Typography variant="body2">Ad Choices</Typography>
                <Typography variant="body2">Mobile</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={2.4}>
                <Typography variant="body1" gutterBottom>
                  Talent Solutions
                </Typography>
                <Typography variant="body2">Marketing Solutions</Typography>
                <Typography variant="body2">Visit our Help Center.</Typography>
                <Typography variant="body2">Advertising</Typography>
                <Typography variant="body2">Small Business</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={2.4}>
                <Typography className="my-2" variant="body1" gutterBottom>
                  <HelpIcon /> Questions?
                </Typography>
                <Typography className="my-2" variant="body2">
                  <SettingsIcon /> Manage your account and privacy Go to your
                  Settings.
                </Typography>
                <Typography className="my-2" variant="body2">
                  <SecurityIcon /> Recommendation transparency Learn more about
                  Recommended Content.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={2.4}>
                <Typography variant="body1" gutterBottom>
                  Select Language
                </Typography>
                <FormControl fullWidth>
                  <Select>
                    <MenuItem value="English">English (English)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Typography
              className="mt-4 text-secondary"
              variant="body2"
              sx={{ mt: 4, color: "text.secondary" }}
            >
              2025 Your Company Name. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;

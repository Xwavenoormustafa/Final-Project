import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
  Box,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import {
  Close,
} from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProfilePicture from "../../Assets/White Elegant Minimalistic Background Twitter Profile Picture.png";
import JobsImg1 from "../../Assets/spiralyze_logo.jpeg";
import JobsImg4 from "../../Assets/ibex.jpeg";
import JobsImg5 from "../../Assets/hybrid_mediaworks_logo.jpeg";
import Avatar1 from "../../Assets/syed ommer.jpeg";
import Avatar2 from "../../Assets/mudassir.png";

const JobsRightSection = () => {
  return (
    <>
      <Box
        className="d-flex justify-content-between flex-column gap-4"
        style={{ maxWidth: "900px" }}
      >
        <Card className="rounded-3 shadow px-5 py-3 d-none d-lg-block">
          <Typography variant="h6" className="fw-bold">
            Job picks for you
          </Typography>
          <Typography variant="body2" color="textSecondary" className="mb-3">
            Based on your profile, preferences, and activity like applies,
            searches, and saves
          </Typography>

          <List>

            <ListItem className="d-flex align-items-centr justify-content-between">
              <Box className="d-flex align-items-center">
                <Box className="me-3">
                  <img width="60px" src={JobsImg1} alt="Job Logo" />
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    color="primary"
                    className="fw-bold"
                  >
                    Frontend Developer JavaScript
                  </Typography>
                  <Typography variant="body2">
                    GT Ecom · Pakistan (Remote)
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    className="d-block"
                  >
                    8 months ago
                  </Typography>
                </Box>
              </Box>
              <Button size="small">
                <Close fontSize="small" />
              </Button>
            </ListItem>
          </List>
          <hr />
          <Box className="d-flex justify-content-center">
            <Button variant="outlined" className="fw-bold">
              Show all <ArrowForwardIcon />
            </Button>
          </Box>
        </Card>
        <Card className="rounded-3 shadow px-5 py-3 d-none d-lg-block">
          <Box className="d-flex justify-content-between align-items-center">
            <Typography variant="h6" className="fw-bold mb-2">
              Recent job searches
            </Typography>
            <Typography variant="body1">Clear</Typography>
          </Box>
          <Box>
            <Typography variant="body1" className="fw-bold">
              student .{" "}
              <span className="text-primary" sx={{ fontSize: "12px" }}>
                1 new
              </span>
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              className="d-block"
            >
              Alert On · Lahore, Punjab, Pakistan · On-site · Remote · Hybrid
            </Typography>
          </Box>

        </Card>
        <Card className="rounded-3 shadow mb-2 px-5 py-3 d-none d-lg-block">
          <Box>
            <Typography variant="body1">PREMIUM</Typography>
            <Typography variant="h6" className="fw-bold my-1">
              Jobs where you’re more likely to hear back
            </Typography>
            <Typography variant="body1">
              Based on your chances of hearing back
            </Typography>
          </Box>
          <Box className="mt-3 d-flex">
            <Avatar className="me-3" src={ProfilePicture} alt="Profile" />
            <Box>
              <Typography variant="body2">
                See the full list of jobs where you’d be a top applicant
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
              >
                <AvatarGroup
                  spacing="26"
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar src={ProfilePicture} />
                  <Avatar src={Avatar1} />

                </AvatarGroup>
              </Box>
              <Button size="small" variant="outlined">
                Try Premium for PKR0
              </Button>
              <Typography variant="body2">
                1-month free trial. We’ll send you a reminder 7 days before your
                trial ends.
              </Typography>
            </Box>
          </Box>
          <hr />

        </Card>
        <Card className="rounded-3 shadow px-5 py-3 d-none d-lg-block">
          <CardContent>
            <Typography variant="h6" className="fw-bold">
              Hiring in your network
            </Typography>
            <Typography className="text-secondary" variant="body2">
              Jobs that people in your network are hiring for
            </Typography>
            <hr />

            <Box className="d-flex align-items-start mb-4">
              <Box className="me-3">
                <img width="60" src={JobsImg4} alt="" />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", color: "#0073b1" }}
                >
                  Frontend Developer
                </Typography>
                <Typography variant="body2" style={{ color: "#555" }}>
                  ibex · Karāchi, Sindh, Pakistan (On-site)
                </Typography>
                <Typography variant="body2" style={{ color: "#777" }}>
                  Karāchi, Sindh, Pakistan (On-site)
                </Typography>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
                >
                  <AvatarGroup
                    spacing="26"
                    sx={{
                      justifyContent: "flex-start",
                    }}
                  >
                    <Avatar alt="Tabish" src={Avatar1} />
                    <Avatar alt="Sanaullah" src={ProfilePicture} />
                  </AvatarGroup>
                </Box>
                <Typography
                  variant="caption"
                  style={{ color: "#888", marginTop: "4px" }}
                >
                  Viewed Promoted Easy Apply
                </Typography>
              </Box>
              <Button
                size="small"
                style={{
                  color: "#555",
                  textTransform: "none",
                  marginLeft: "auto",
                }}
              >
                ✖
              </Button>
            </Box>
            <hr />
            <Box className="d-flex align-items-start mb-4">
              <Box className="me-3">
                <img width="60" src={JobsImg5} alt="" />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", color: "#0073b1" }}
                >
                  Full Stack Developer
                </Typography>
                <Typography variant="body2" style={{ color: "#555" }}>
                  Hybrid Mediaworks · Islamabad, Islāmābād, Pakistan (On-site)
                </Typography>
                <Typography variant="body2" style={{ color: "#777" }}>
                  Islamabad, Islāmābād, Pakistan (On-site)
                </Typography>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}
                >
                  <AvatarGroup
                    spacing="26"
                    sx={{
                      justifyContent: "flex-start",
                    }}
                  >
                    <Avatar alt="Sanaullah" src={ProfilePicture} />
                    <Avatar alt="Tabish" src={Avatar1} />
                    <Avatar alt="Kashif" src={Avatar2} />
                  </AvatarGroup>
                </Box>
                <Typography
                  variant="caption"
                  style={{ color: "#888", marginTop: "4px" }}
                >
                  Promoted Easy Apply
                </Typography>
              </Box>
              <Button
                size="small"
                style={{
                  color: "#555",
                  textTransform: "none",
                  marginLeft: "auto", // Push the button to the end
                }}
              >
                ✖
              </Button>
            </Box>
            <hr />
            <Box className="d-flex justify-content-center">
              <Button variant="outlined" className="fw-bold">
                Show all <ArrowForwardIcon />
              </Button>
            </Box>
          </CardContent>
        </Card>

      </Box>
    </>

  )
}

export default JobsRightSection;
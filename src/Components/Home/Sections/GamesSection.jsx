import React from "react";
import { Box, Typography, Card as MuiCard, CardContent } from "@mui/material";
import HiringImg from "../../Assets/HiringImage.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const GamesSection = () => {
  return (
    <div>
      <Box>
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
      <Box className="text-align-center my-2">
        <Typography
          variant="body2"
          color="text.secondary"
          className="d-flex flex-wrap justify-content-center gap-2"
          sx={{ fontSize: "12px", lineHeight: 1.5 }}
        >
          <span style={{ cursor: "pointer", color: "#0077b5" }}>About</span>
          <span style={{ cursor: "pointer", color: "#0077b5" }}>
            Accessibility
          </span>
          <span style={{ cursor: "pointer", color: "#0077b5" }}>
            Help Center
          </span>
          <span style={{ cursor: "pointer", color: "#0077b5" }}>
            Privacy & Terms
          </span>
          <span style={{ cursor: "pointer", color: "#0077b5" }}>
            Ad Choices
          </span>
          <span style={{ cursor: "pointer", color: "#0077b5" }}>
            Advertising
          </span>
          <span style={{ cursor: "pointer", color: "#0077b5" }}>
            Business Services
          </span>
          <span style={{ cursor: "pointer", color: "#0077b5" }}>
            Get the LinkedIn app
          </span>
          <span style={{ cursor: "pointer", color: "#0077b5" }}>More</span>
        </Typography>
        <Typography
          className="mt-1 d-block fs-6 text-secondary"
          variant="caption"
        >
          LinkedIn <LinkedInIcon className="text-primary" /> Corporation © 2025
        </Typography>
      </Box>
    </div>
  );
};

export default GamesSection;

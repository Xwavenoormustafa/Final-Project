import React from "react";
import { Box, Avatar, Typography, Button, Card, CardContent, Divider } from "@mui/material";
import ProfilePicture from "../Assets/White Elegant Minimalistic Background Twitter Profile Picture.png";
import image from "../../Components/Assets/LinkedIn Background.jpg";

export default function HomeSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f3f2ef",
      }}
    >
      {/* Left Sidebar */}
      <Box
        sx={{
          width: "25%",
          maxWidth: "300px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          overflow: "hidden", // Ensures the rounded corners apply to the cover photo
        }}
      >
        <Card>
          <CardContent sx={{ padding: 0 }}>
            {/* Cover Photo */}
            <Box
              sx={{
                height: "100px", // Adjust height as needed
                backgroundColor: "#ddd", // Fallback background
                backgroundImage: `url(${image})`, // Correct way to interpolate the variable inside the string
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>

            {/* Profile Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 0",
                marginTop: "-40px", // Move the avatar up to overlap the cover photo
              }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  marginBottom: "16px",
                  border: "3px solid #fff", // Adds a border to make it stand out over the cover
                }}
                src={ProfilePicture}
                alt="Profile Picture"
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Noor Mustafa Jatoi
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Frontend Developer
              </Typography>
              <Divider sx={{ my: 2, width: "100%" }} />
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Profile viewers: <span style={{ color: "#0077b5" }}>7</span>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Post impressions: <span style={{ color: "#0077b5" }}>9</span>
              </Typography>
              <Typography  variant="body2" sx={{ fontWeight: "bold" }}>
                Access exclusive tools and insights
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Post impressions: <span style={{ color: "#0077b5" }}>9</span>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Middle Section */}
      <Box
        sx={{
          width: "50%",
          maxWidth: "700px",
        }}
      >
        {/* Create Post */}
        <Card sx={{ marginBottom: "20px" }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar src="https://via.placeholder.com/150" alt="Profile" />
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  justifyContent: "flex-start",
                  borderColor: "#ccc",
                  color: "#666",
                  textTransform: "none",
                }}
              >
                Start a post
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Posts */}
        <Card>
          <CardContent>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Avatar src="https://via.placeholder.com/150" alt="User" />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Wahid Ali
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    1st | HR & Technical Recruitment
                  </Typography>
                </Box>
              </Box>
              <Typography sx={{ marginTop: "10px" }}>
                Join the team at <strong>SabaSoft Games Studio</strong> 🎮
              </Typography>
              <img
                src="https://via.placeholder.com/600x300"
                alt="Post Image"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Right Sidebar */}
      <Box
        sx={{
          width: "25%",
          maxWidth: "300px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Today’s puzzle games
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ marginBottom: "10px" }}>
              <Typography>Tango</Typography>
              <Typography variant="body2" color="textSecondary">
                Harmonize the grid
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography>Queens</Typography>
              <Typography variant="body2" color="textSecondary">
                Crown each region
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <Typography>Pinpoint</Typography>
              <Typography variant="body2" color="textSecondary">
                Guess the category
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

import React from "react";
import {
  Avatar,
  Box,
  Card,
  Typography,
  Divider,
  CardContent,
} from "@mui/material";
import ProfilePicture from "../../Assets/White Elegant Minimalistic Background Twitter Profile Picture.png";
import CoverPhoto from "../../Assets/LinkedIn Background.jpg";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const AboutSection = () => {
  return (
    <>
      <Card>
        <CardContent className="p-0">
          {/* Cover Photo */}
          <Box
            sx={{
              height: "100px",
              position: "relative",
              backgroundColor: "#ddd",
              backgroundImage: `url(${CoverPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Box className="d-flex flex-column align-items-center p-3">
            <Avatar
              className="mb-3 border border-3 border-white"
              sx={{
                width: 80,
                height: 80,
                marginTop:"-60px"
              }}
              src={ProfilePicture}
              alt="Profile Picture"
            />
            <Typography variant="h6" className="fw-bold">
              Noor Mustafa Jatoi
            </Typography>
            <Typography variant="body2" className="text-secondary text-center">
            Frontend Developer | HTML5 | CSS3 | JavaScript | React.js
            </Typography>
            <Box className="w-100">
              <Divider className="my-2 w-100" />
              <Typography variant="body2" className="fw-bold">
                Profile viewers: <span className="text-primary">75</span>
              </Typography>
              <Typography variant="body2" className="fw-bold">
                Post impressions: <span className="text-primary">998</span>
              </Typography>
            </Box>
          </Box>
          <Divider className="my-2 w-100" />
          <Typography className="ms-3" variant="body2">
            Enhance lead quality with Sales Nav
          </Typography>
          <Typography variant="body2" className="fw-bold ms-3">
            Try Now For PKR 0
          </Typography>
          <Typography variant="body2" className="fw-bold ms-3">
            Post impressions: <span className="text-primary">998</span>
          </Typography>
          <Divider className="my-2 w-100" />
          <Typography variant="body2" className="fw-bold ms-3">
            <BookmarkIcon /> Saved Items
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutSection;

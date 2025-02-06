import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ArticleIcon from "@mui/icons-material/Article";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import RepeatIcon from "@mui/icons-material/Repeat";
import postingImage1 from "../../../Components/Assets/image1.jpg";
import postingImage3 from "../../../Components/Assets/React Redux.jpg";
import postingImage4 from "../../../Components/Assets/Maam Misbah.jpeg";
import postingImage5 from "../../../Components/Assets/Maam Wardah.jpeg";
import ProfilePicture from "../../../Components/Assets/White Elegant Minimalistic Background Twitter Profile Picture.png";
import ProfileImage4 from "../../../Components/Assets/Maam Profile.jpeg";
import ProfileImage5 from "../../../Components/Assets/Maam Wardah profile.jpeg";
import ProfilePhoto1 from "../../../Components/Assets/LinkedIn Profile.jpg";

const PostSection = () => {
  const [open, setOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Noor Mustafa Jatoi",
      role: "Frontend Developer | HTML5 | CSS3 | JavaScript | React.js",
      content:
        "The MERN stack is a powerful combination of technologies for building modern web applications. MongoDB provides flexible data storage, Express.js simplifies server-side development, React creates dynamic user interfaces, and Node.js enables JavaScript on the server.",
      avatar: ProfilePicture,
      image: postingImage1,
    },
    {
      id: 2,
      name: "Sanaullah Larik",
      role: "Frontend Developer | HTML5 | CSS3 | JavaScript | React.js",
      content:
        "I recently worked on a small JavaScript project to create a random password generator. Here's how it works  Random Password Generation The script combines uppercase letters, lowercase letters, numbers, and special characters to ensure a strong password It always includes at least one character from each category",
      avatar: ProfilePhoto1,
      image: postingImage3,
    },
    {
      id: 3,
      name: "Wardah Noor",
      role: "Upskilling & Empowering youth via tech skills | LUMS'24 | Acumen Fellow'23",
      content:
        "Thrilled to share that I've been selected as an Acumen Fellow 2023! Looking forward to joining a community of social innovators and change-makers. Let's create positive impact together! #SocialImpact #Leadership #Innovation",
      avatar: ProfileImage5,
      image: postingImage5,
    },
    {
      id: 4,
      name: "Misbah Shafi",
      role: "Lead Learning and Development | L&D Strategy | LUMS'23 | xWave | Looking for React.js Developers? Reach out to me.",
      content:
        "Excited to announce that we're hiring React.js Developers at xWave! If you're passionate about building modern web applications and have experience with React, we'd love to hear from you. DM me for details. #Hiring #ReactJS #WebDevelopment",
      avatar: ProfileImage4,
      image: postingImage4,
    },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePost = () => {
    if (newPostContent.trim() === "") return;

    const newPost = {
      id: posts.length + 1,
      name: "Noor Mustafa Jatoi",
      role: "Frontend Web Developer | HTML5 | CSS3 | JavaScript | React.js",
      content: newPostContent,
      avatar: ProfilePicture,
      image: postingImage1,
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
    handleClose();
  };

  return (
    <>
      <Box className="mt-3">
        <Box className="p-3 border rounded-2 d-flex flex-column gap-2 bg-white">
          <Box className="d-flex align-items-center gap-2">
            <Avatar src={ProfilePicture} />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Start a post"
              onClick={handleOpen}
            />
          </Box>

          <Box className="d-flex flex-wrap justify-content-evenly">
            <Button
              color="black"
              startIcon={<VideoCallIcon className="text-success" />}
            >
              Video
            </Button>
            <Button
              className="text-dark"
              startIcon={<PhotoCameraIcon style={{ color: "blue" }} />}
            >
              Photo
            </Button>
            <Button
              color="black"
              startIcon={<ArticleIcon className="text-warning" />}
            >
              Article
            </Button>
          </Box>
        </Box>

        <Box className="mt-3">
          {posts.map((post) => (
            <Card key={post.id} className="mb-3 p-3">
              <div className="d-flex align-items-center">
                <Avatar src={post.avatar} alt="User" className="me-2" />
                <div>
                  <Typography variant="subtitle1" className="fw-bold">
                    {post.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.role}
                  </Typography>
                </div>
              </div>
              <Typography variant="body1" className="my-2">
                {post.content}
              </Typography>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="img-fluid rounded mb-2"
                  style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                />
              )}
              <Box className="d-flex flex-wrap justify-content-between mt-2">
                <Button
                  variant="text"
                  startIcon={<ThumbUpIcon />}
                  className="text-muted"
                >
                  Like
                </Button>
                <Button
                  variant="text"
                  startIcon={<CommentIcon />}
                  className="text-muted"
                >
                  Comment
                </Button>
                <Button
                  variant="text"
                  startIcon={<ShareIcon />}
                  className="text-muted"
                >
                  Share
                </Button>
                <Button
                  variant="text"
                  startIcon={<RepeatIcon />}
                  className="text-muted"
                >
                  Repost
                </Button>
              </Box>
            </Card>
          ))}
        </Box>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent>
            <Typography variant="h6" component="h2" className="mb-3">
              Create a Post
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={7}
              variant="outlined"
              placeholder="What do you want to talk about?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <Box className="d-flex justify-content-end mt-3">
              <Button variant="outlined" color="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="ms-3"
                onClick={handlePost}
              >
                Post
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default PostSection;

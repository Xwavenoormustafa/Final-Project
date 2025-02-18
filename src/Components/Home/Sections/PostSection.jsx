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
import postingImage4 from "../../../Components/Assets/Maam Misbah.jpeg";
import postingImage5 from "../../../Components/Assets/Maam Wardah.jpeg";
import ProfilePicture from "../../../Components/Assets/White Elegant Minimalistic Background Twitter Profile Picture.png";
import ProfileImage4 from "../../../Components/Assets/Maam Profile.jpeg";
import ProfileImage5 from "../../../Components/Assets/Maam Wardah profile.jpeg";
import ProfilePhoto1 from "../../../Components/Assets/LinkedIn Profile.jpg";
import ProfilePhoto2 from "../../../Components/Assets/salar-profile.jpg";
import ProfilePhoto3 from "../../../Components/Assets/sameer-profile.jpg";
import postingImage6 from "../../../Components/Assets/salar-post.jpg";
import postingImage7 from "../../../Components/Assets/sana-post.jpg";
import postingImage8 from "../../../Components/Assets/sameer-post.jpg";
import ProfileImage12 from "../../../Components/Assets/xwavepak_logo.jpeg";
import PostImage12 from "../../../Components/Assets/xwave-post.png";

const PostSection = () => {
  const [open, setOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [postData, setPostData] = useState([
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
        "Next.js: A Powerful Tool for Web Development🌟If you want to build fast, scalable, and SEO-friendly websites, Next.js is the perfect framework for you. It’s built on React and makes web development easier and more efficient.✨Key Features of Next.js:1️⃣ Server-Side Rendering (SSR): Improves performance and SEO by rendering pages on the server.2️⃣ Static Site Generation (SSG): Generates pages at build time for faster loading.3️⃣ Easy Routing: Automatically creates routes based on files in the pages folder.4️⃣ API Routes: Build backend functionality directly in your app.Image Optimization: Automatically optimizes images for better performance.5️⃣ TypeScript Support: Makes your code more reliable with built-in TypeScript support✨Why Use Next.js?Companies like Netflix, Twitch, and Hulu use Next.js to build their websites. It’s perfect for both small projects and large-scale applications Get Started Today!Next.js is beginner-friendly and packed with features to help you build modern web applications. Give it a try and see how it can improve your workflow",
      avatar: ProfilePhoto1,
      image: postingImage7,
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
    {
      id: 5,
      name: "Salar Ahmed",
      role: "Frontend Developer | HTML5 | CSS3 | JavaScript | React.js",
      content:
        "Hello LinkedIn Family Reactjs Redefining Frontend Development Reactjs brought to life by Meta  is not just a library its a revolution  modern web development Here why developers worldwide love it",
      avatar: ProfilePhoto2,
      image: postingImage6,
    },
    {
      id: 6,
      name: "Sameer Ahmed",
      role: "Frontend Developer | HTML5 | CSS3 | JavaScript | React.js",
      content:
        "What is Next.js and why we use it? Next.js is a powerful React framework developed by Vercel that simplifies the process of building modern, high-performance web applications. It enhances React by adding features like server-side rendering (SSR), static site generation (SSG), and built-in API routes, making it a go-to choice for creating production-ready apps. One of the key reasons developers use Next.js is its ability to handle both SSR and SSG seamlessly, enabling faster page load times and improving user experience. Next.js is designed to optimize both performance and developer productivity. With automatic routing based on your file structure, image optimization, and support for hybrid rendering, it allows you to create scalable and SEO-friendly applications effortlessly. Its built-in API routes eliminate the need for a separate backend, simplifying the development process. Moreover, Next.js is backed by a strong community and excellent documentation, making it easier for developers to learn and implement. In addition to being SEO-friendly, Next.js is highly flexible and can handle everything from small websites to large enterprise applications. Its ability to pre-render pages and optimize assets ensures faster load times, which improves user satisfaction and engagement. Whether you're building a blog, an e-commerce platform, or a complex web app, Next.js provides the tools and features you need to succeed in modern web development. I’m looking for a job as a frontend developer, reach out if you need a developer in your team. hashtag#FrontendDevelopment hashtag#HTML hashtag#CSS hashtag#Bootstrap hashtag#TailwindCSS hashtag#JavaScript hashtag#ReactJS hashtag#NextJS",
      avatar: ProfilePhoto3,
      image: postingImage8,
    },
    {
      id: 7,
      name: "xWave",
      role: "2,879 followers",
      content:
        "Switch your career: From any field to tech. Reasons: ✔ High Demand ✔ Globally Acceptable ✔ Remote work opportunities Whether it is Web Development, UI/UX Design, or Video Editing. 🤝 Join xWave today and discover infinite opportunities in tech WhatsApp: +92-3119607081 hashtag#OnlineEarning hashtag#Freelancing hashtag#WebDevelopment hashtag#UIUXDesign hashtag#VideoEditing hashtag#xWave hashtag#Pakistan hashtag#OnlineJobs hashtag#RemoteJobs",
      avatar: ProfileImage12,
      image: PostImage12,
    },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewPostContent("");
  };

  const handlePost = () => {
    if (newPostContent.trim() === "") return;

    const newPost = {
      id: postData.length + 1,
      name: "Noor Mustafa Jatoi",
      role: "Front-End Web Developer | React.js | Next.js",
      content: newPostContent,
      avatar: ProfilePicture,
    };

    setPostData([newPost, ...postData]);
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
          {postData.map((post) => (
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
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                  }}
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
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
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

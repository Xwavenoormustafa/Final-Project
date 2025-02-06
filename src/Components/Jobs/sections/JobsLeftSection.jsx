import React from "react";
import { Card, Typography, List, ListItem, Link, Box } from "@mui/material";
import { List as ListIcon, Bookmark, Article, Edit } from "@mui/icons-material";

const JobsLeftSection = () => {
  return (
    <>
      <Box>
        <Card className="rounded shadow-sm" style={{ maxWidth: 300 }}>
          <List className="list-unstyled mb-0">
            <ListItem className="mt-2 d-flex align-items-center">
              <ListIcon fontSize="small" />
              <Typography className="ms-3">Preferences</Typography>
            </ListItem>
            <ListItem className="my-2 d-flex align-items-center">
              <Bookmark fontSize="small" />
              <Typography className="ms-3">My jobs</Typography>
            </ListItem>
            <ListItem className="d-flex align-items-center">
              <Article fontSize="small" />
              <Typography className="ms-3">Interview prep</Typography>
            </ListItem>
          </List>
          <hr className="my-2" />
          <ListItem className="d-flex align-items-center">
            <Edit fontSize="small" />
            <Typography className="ms-3">Post a free job</Typography>
          </ListItem>
        </Card>
      </Box>
      <Box className="text-center px-2 my-4">
        <Typography
          variant="body2"
          className="d-flex flex-wrap justify-content-center gap-2 text-secondary"
        >
          <Link href="#">About</Link>
          <Link href="#">Accessibility</Link>
          <Link href="#">Help Center</Link>
          <Link href="#">Privacy & Terms</Link>
          <Link href="#">Ad Choices</Link>
          <Link href="#">Advertising</Link>
          <Link href="#">Business Services</Link>
          <Link href="#">Get the LinkedIn app</Link>
          <Link href="#">More</Link>
        </Typography>
        <Typography variant="body2" className="mt-4 text-secondary">
          LinkedIn Corporation &copy; 2025
        </Typography>
      </Box>
    </>
  );
};

export default JobsLeftSection;

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea LinkComponent={"a"} href="#">
        <Card sx={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <CardContent>
              <Typography component={"h2"} variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden only={"xs"}>
            <CardMedia
              sx={{ width: 160 }}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;

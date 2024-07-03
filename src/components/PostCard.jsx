"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

export default function PostCard({ maxWidthSize, contentText, img }) {
  return (
    <Card
      sx={{
        minWidth: 250,
        maxWidth: maxWidthSize || 320,
        "&:hover": {
          transition: "transform 0.6s ease-in-out",
          boxShadow: 4,
          backgroundColor: "#f2f3f4",
        },
        borderRadius: "10px",
        borderTopRightRadius: "40px",
        borderBottomLeftRadius: "40px",
      }}
    >
      <Link href={"/post/123"}>
        {img && (
          <CardMedia
            component="img"
            height="195"
            image={img}
            alt={`Photo Title`}
          />
        )}
        <CardContent>
          <Typography variant="body1">The Awesome Title</Typography>
          <Typography variant="body2">
            {contentText ? contentText : "Text Content"}
          </Typography>
        </CardContent>
      </Link>
      <Link href={"/user/userposts"}>
        <CardHeader
          sx={{
            "&:hover": {
              transform: "scale(1.03)",
              transition: "transform 0.5s ease-in-out",
            },
          }}
          avatar={
            <Avatar
              src={
                "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              sx={{ width: 56, height: 56 }}
            />
          }
          title="User name"
          subheader="September 14, 2024"
        />
      </Link>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

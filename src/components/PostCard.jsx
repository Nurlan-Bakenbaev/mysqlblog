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
import { Tooltip } from "@mui/material";

export default function PostCard({ maxWidthSize }) {
  return (
    <Card sx={{ maxWidth: maxWidthSize || 320 }}>
      <Link href={"/123"}>
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5">The Awesome Title</Typography>
          <Typography variant="body3">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Link>
      <Link className=" hover:scale-110" href={"/user/userposts"}>
        <CardHeader
          sx={{
            "&:hover": {
              transform: "scale(1.01)",
              transition: "transform 3s ease-in-out",
              boxShadow: 2,
              backgroundColor: "#F9F6EE",
            },
          }}
          avatar={
            <Avatar
              src={
                "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

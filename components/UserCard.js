import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

const UserCard = ({ isMobile, userData }) => {
  return (
    <Card sx={{ minHeight: isMobile ? "50vh" : "85vh" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          src={userData.photoUrl}
          alt={userData.name}
          sx={{
            width: 80,
            height: 80,
            margin: 5,
          }}
        />
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5">{userData.name}</Typography>
          <Typography sx={{ marginTop: 1, marginBottom: 1 }} variant="body1">
            {userData.email}
          </Typography>
          <Typography
            sx={{ fontWeight: 700, color: "#6aa84f" }}
            variant="body1"
          >
            {userData.role}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;

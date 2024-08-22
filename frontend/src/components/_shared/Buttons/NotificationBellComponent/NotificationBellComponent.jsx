import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationBell = ({ notificationCount }) => {
  return (
    <Badge badgeContent={notificationCount} color='warning'>
      <NotificationsIcon />
    </Badge>
  );
};

export default NotificationBell;

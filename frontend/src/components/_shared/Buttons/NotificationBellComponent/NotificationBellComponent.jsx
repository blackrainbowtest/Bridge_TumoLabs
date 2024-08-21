import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationBell = ({ notificationCount }) => {
    return (
      <IconButton aria-label="show notifications" color="inherit">
        <Badge badgeContent={notificationCount} color="warning">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    );
  };
  
  export default NotificationBell;
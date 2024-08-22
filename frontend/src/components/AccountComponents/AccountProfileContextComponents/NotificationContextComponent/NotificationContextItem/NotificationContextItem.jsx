import { Box, Typography } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import { readNotifications } from 'features/notifications/notificationAPI';
import { memo } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function NotificationContextItem({ notification, handleClose }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const notificationClick = (event) => {
    handleClose(event)
    navigate(`all-projects/project/${notification.project.id}`)
    dispatch(readNotifications(notification.id))
  }

  return (
    <MainContainerColumn>
      <MainContainer is_read={notification.is_read.toString()} onClick={notificationClick}>
        <NotificationText
          text={notification?.project?.title || ""}
          maxLength={30}
        />
        {!notification.is_read && <IsReadMarkerContainer />}
      </MainContainer>
    </MainContainerColumn>
  );
}

export default memo(NotificationContextItem);

function NotificationText({ text, maxLength }) {
  const truncatedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {truncatedText}
    </Typography>
  );
}

const MainContainer = styled(Box)(({ theme, is_read }) => ({
  minWidth: "100%",
  minHeight: "25px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  gap: "15px",
  color:
    is_read === "true"
      ? theme.palette.text.secondary
      : theme.palette.text.primary,
  border: `1px solid ${theme.palette.border.secondary}`,
  padding: theme.spacing(1),
  borderRadius: "10px",
  cursor: "pointer",
  userSelect: "none",
  "&:hover": {
    backgroundColor: theme.palette.background.secondary,
  }
}));

const IsReadMarkerContainer = styled(Box)(({ theme }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: theme.palette.background.yellow
}));
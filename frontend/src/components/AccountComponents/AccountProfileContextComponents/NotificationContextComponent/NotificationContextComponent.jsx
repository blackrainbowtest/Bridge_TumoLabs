import { Button, Typography } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NotificationContextItem from './NotificationContextItem';

function NotificationContextComponent({ handleClose }) {
  const [isShowAll, setIsShowAll] = useState(false);
  const notifications = useSelector(
    (state) => state?.notifications?.notifications
  );
  console.log(notifications);

  const changeShowClick = (event) => {
    setIsShowAll((prev) => !prev);
  };

  const displayedNotifications = isShowAll
    ? notifications
    : notifications.slice(0, 3);

  return (
    <MainContainerColumn>
      <MainContainerColumn sx={{ minWidth: "250px", maxHeight: "250px", overflow: "auto" }}>
        {displayedNotifications.map((notification) => (
          <NotificationContextItem
            key={notification.id}
            notification={notification}
          />
        ))}
      </MainContainerColumn>
      <MainContainerRowContainer>
        <Button onClick={changeShowClick}>
          <Typography variant='caption' display='block' gutterBottom>
            {isShowAll ? "Hide" : "Show all"}
          </Typography>
        </Button>
      </MainContainerRowContainer>
    </MainContainerColumn>
  );
}

export default memo(NotificationContextComponent);

const MainContainerRowContainer = styled(MainContainerRow)(
  ({ theme, scrolling }) => ({
    justifyContent: "center",
    "& button": {
      minWidth: "100%",
      textTransform: "capitalize",
    },
  })
);

import { Box } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import { memo } from "react";
import styled from "styled-components";

function NotificationContextItem({ notification }) {
  console.log(notification);
  return (
    <MainContainerColumn>
      <MainContainer is_read={notification.is_read.toString()}>555</MainContainer>
    </MainContainerColumn>
  );
}

export default memo(NotificationContextItem);

const MainContainer = styled(Box)(({ theme, is_read }) => ({
  minWidth: "100%",
  minHeight: "25px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  color: is_read === "true" ? theme.palette.text.secondary : theme.palette.text.primary,
  border: `1px solid ${theme.palette.border.secondary}`,
  padding: theme.spacing(1),
  borderRadius: "10px",
}));

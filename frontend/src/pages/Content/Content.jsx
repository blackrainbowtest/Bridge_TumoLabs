import { Box } from "@mui/material";
import NotificationManagerComponent from 'components/_GlobalComponents/NotificationManagerComponent';
import Layout from "pages/Layout";
import { memo } from "react";
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

function Content() {
  return (
    <MainContainer>
      <Layout />
      <Outlet />
      <NotificationManagerComponent />
    </MainContainer>
  );
}

export default memo(Content);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundColor: `${theme.palette.background.secondary}`,
  color: `${theme.palette.text.primary}`,
}));

import { Box } from "@mui/material";
import NotificationManagerComponent from "components/_GlobalComponents/NotificationManagerComponent";
import WebSocketNotificationComponent from 'components/_GlobalComponents/WebSocketNotificationComponent';
import { loginWithToken } from "features/account/accountLoginAPI";
import Footer from "pages/Footer";
import Layout from "pages/Layout";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Content() {
  const isAuthenticated = useSelector(
    (state) => state?.account?.isAuthenticated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      const accountToken =
        localStorage.getItem("authToken") ??
        sessionStorage.getItem("authToken");
      accountToken && dispatch(loginWithToken(accountToken));
    }
  }, [dispatch, isAuthenticated]);

  return (
    <MainContainer>
      <Layout />
      <Outlet />
      <Footer />
      <NotificationManagerComponent />
      <WebSocketNotificationComponent />
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
  backgroundColor: `${theme.palette.background.primary}`,
  color: `${theme.palette.text.primary}`,
  fontFamily: theme.typography.fontFamilyNano,
}));

import { Box } from "@mui/material";
import NotificationManagerComponent from "components/_GlobalComponents/NotificationManagerComponent";
import UserSignInComponent from "components/AccountComponents/AccountAuthComponents/UserSignInComponent";
import { memo } from "react";
import styled from "styled-components";

function SignIn() {
  return (
    <MainContainer>
      <UserSignInComponent />
      <NotificationManagerComponent />
    </MainContainer>
  );
}

export default memo(SignIn);

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: `${theme.palette.background.secondary}!important`,
}));

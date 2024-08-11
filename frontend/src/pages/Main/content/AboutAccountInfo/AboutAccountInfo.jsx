import { Box } from "@mui/material";
import AboutAccountInfoComponent from "components/AccountComponents/AboutAccountInfoComponent";
import { memo } from "react";
import styled from "styled-components";

function AboutAccountInfo() {
  return (
    <MainContainer>
      <AboutAccountInfoComponent />
    </MainContainer>
  );
}

export default memo(AboutAccountInfo);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  paddingBottom: "30px",
  display: "flex",
  justifyContent: "center",
  background: theme.palette.background.action
}));

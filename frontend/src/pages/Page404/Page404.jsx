import { Box, Button } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function Page404({ onGoHome = () => {} }) {
  return (
    <MainContainer>
      <TitleContainer>404</TitleContainer>
      <SubTitleContainer>Page Not Found</SubTitleContainer>
      <ButtonContainer onClick={onGoHome} color='error' variant='outlined'>
        Go to Home
      </ButtonContainer>
    </MainContainer>
  );
}

export default memo(Page404);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: `${theme.palette.background.primary}`,
  color: `${theme.palette.text.primary}`,
}));

const TitleContainer = styled("h1")(({ theme }) => ({
  fontSize: "4.5rem",
  margin: "0px",
  color: `${theme.palette.text.error}`,
}));

const SubTitleContainer = styled("h2")(({ theme }) => ({
  fontSize: "1.5rem",
  marginBottom: "20px",
  color: `${theme.palette.text.secondary}`,
}));

const ButtonContainer = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
}));

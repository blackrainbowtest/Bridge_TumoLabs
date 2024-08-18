import { Box } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LogoFooterIconContainer() {
  return (
    <MainContainer>
      <SectionContainer>
        <InfoContainer>
          © 2024 Information Systems Agency of Armenia
        </InfoContainer>
      </SectionContainer>
      <LogoContainer to={'/'}>Bridge</LogoContainer>
    </MainContainer>
  );
}

export default memo(LogoFooterIconContainer);

const MainContainer = styled(Box)(({ _ }) => ({
  minWidth: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const InfoContainer = styled(Box)(({ _ }) => ({
  minWidth: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const SectionContainer = styled("section")(({ _ }) => ({
  display: "flex",
  flexDirection: "column",
}));

const LogoContainer = styled(Link)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: "800",
  fontSize: "40px",
  color: theme.palette.text.blue,
  textDecoration:'none'
}));

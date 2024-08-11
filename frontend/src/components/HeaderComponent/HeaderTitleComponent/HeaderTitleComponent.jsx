import { Box } from "@mui/material";
import SectionItemContainerComponent from "components/_shared/SectionItemContainerComponent";
import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HeaderTitleComponent() {
  return (
    <MainContainer>
      <SectionItemContainerComponent>
        <LogoContainer>
          <Link to={"/"}>Bridge</Link>
        </LogoContainer>
      </SectionItemContainerComponent>
      <SeparatorContainer />
      <AboutContainer>
        <span>The best platform to</span>
        <span>get real practice</span>
      </AboutContainer>
    </MainContainer>
  );
}

export default memo(HeaderTitleComponent);

const MainContainer = styled("header")(({ theme }) => ({
  maxWidth: "100%",
  minHeight: "100px",
  display: "flex",
  padding: `${theme.paddingY} ${theme.paddingX}`,
  background: theme.palette.background.RoyalBlue,
  position: "relative",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: "800",
  fontSize: "40px",
  color: theme.palette.text.white,
  "&& a": {
    color: theme.palette.text.white,
    textDecoration: 'none'
  }
}));

const SeparatorContainer = styled(Box)(({ theme }) => ({
  minHeight: "56px",
  border: `1px solid ${theme.palette.border.secondary}`,
  margin: `0 ${theme.marginX}`,
}));

const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "400",
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.white,
}));

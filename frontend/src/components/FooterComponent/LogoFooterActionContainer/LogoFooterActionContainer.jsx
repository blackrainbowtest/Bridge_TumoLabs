import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import AboutUsComponent from "./AboutUsComponent";
import ProjectsComponent from "./ProjectsComponent";
import InformationCenterComponent from "./InformationCenterComponent";
import ContactUsComponent from "./ContactUsComponent";

function LogoFooterActionContainer() {
  return (
    <MainContainer>
      <ProjectsComponent />
      <InformationCenterComponent />
      <AboutUsComponent />
      <ContactUsComponent />
    </MainContainer>
  );
}

export default memo(LogoFooterActionContainer);

const MainContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "repeat(1, 1fr)",
  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

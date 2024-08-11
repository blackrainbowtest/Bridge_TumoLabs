import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import WorkSlider from './content/WorkSlider';
import UserRegistrationBenefits from './content/UserRegistrationBenefits';
import LatestBusinessProjects from './content/LatestBusinessProjects';
import ContributeToProject from './content/ContributeToProject';
import AboutAccountInfo from './content/AboutAccountInfo';

function Main() {
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      <WorkSlider />
      <AboutAccountInfo />
      <UserRegistrationBenefits />
      <LatestBusinessProjects />
      <ContributeToProject />
    </MainContainer>
  );
}

export default memo(Main);

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
}));

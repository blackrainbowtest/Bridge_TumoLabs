import { memo } from "react";
import WorkSlider from "./content/WorkSlider";
import LatestBusinessProjects from "./content/LatestBusinessProjects";
import ContributeToProject from "./content/ContributeToProject";
import AboutAccountInfo from "./content/AboutAccountInfo";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import AboutPlatform from './content/AboutPlatform';

function Main() {
  return (
    <MainContainerColumn>
      <AboutPlatform />
      <WorkSlider />
      <AboutAccountInfo />
      <LatestBusinessProjects />
      <ContributeToProject />
    </MainContainerColumn>
  );
}

export default memo(Main);

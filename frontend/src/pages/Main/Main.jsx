import { memo } from "react";
import WorkSlider from "./content/WorkSlider";
import ContributeToProject from "./content/ContributeToProject";
import AboutAccountInfo from "./content/AboutAccountInfo";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import AboutPlatform from './content/AboutPlatform';

function Main() {
  return (
    <MainContainerColumn>
      <AboutAccountInfo />
      <AboutPlatform />
      <WorkSlider />
      <ContributeToProject />
    </MainContainerColumn>
  );
}

export default memo(Main);

import { memo } from "react";
import WorkSlider from "./content/WorkSlider";
import UserRegistrationBenefits from "./content/UserRegistrationBenefits";
import LatestBusinessProjects from "./content/LatestBusinessProjects";
import ContributeToProject from "./content/ContributeToProject";
import AboutAccountInfo from "./content/AboutAccountInfo";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";

function Main() {
  return (
    <MainContainerColumn>
      <WorkSlider />
      <AboutAccountInfo />
      <UserRegistrationBenefits />
      <LatestBusinessProjects />
      <ContributeToProject />
    </MainContainerColumn>
  );
}

export default memo(Main);

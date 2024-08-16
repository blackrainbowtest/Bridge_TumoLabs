import { memo } from "react";
import AboutUsComponent from "./AboutUsComponent";
import ProjectsComponent from "./ProjectsComponent";
import InformationCenterComponent from "./InformationCenterComponent";
import ContactUsComponent from "./ContactUsComponent";
import MainGridContainer from 'components/_GlobalComponents/MainGridContainer';

function LogoFooterActionContainer() {
  return (
    <MainGridContainer>
      <ProjectsComponent />
      <InformationCenterComponent />
      <AboutUsComponent />
      <ContactUsComponent />
    </MainGridContainer>
  );
}

export default memo(LogoFooterActionContainer);

import MainContentContainer from 'components/_GlobalComponents/MainContentContainer';
import AllProjectsComponent from "components/ProjectsComponent/AllProjectsComponent/AllProjectsComponent";
import { memo } from "react";

function AllProjects() {
  return (
    <MainContentContainer>
      <AllProjectsComponent />
    </MainContentContainer>
  );
}

export default memo(AllProjects);

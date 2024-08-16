import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import ProjectsComponent from "components/ProjectsComponent";
import { memo } from "react";

function Projects() {
  return (
    <MainContainerColumn>
      <ProjectsComponent />
    </MainContainerColumn>
  );
}

export default memo(Projects);

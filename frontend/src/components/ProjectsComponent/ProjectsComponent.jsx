import BreadcrumbNavigationComponent from "components/_GlobalComponents/BreadcrumbNavigationComponent";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import { memo } from "react";
// import TipComponent from "./TipComponent";
import FilterComponent from "./FilterComponent";
import ProjectListComponent from "./ProjectsListComponent/ProjectListComponent";

function ProjectComponent() {
  return (
    <MainContentContainer>
      <MainContainerColumn>
        <BreadcrumbNavigationComponent />
        {/* FIXME: add stepper to comfirm tips */}
        {/* <TipComponent /> */}
        <FilterComponent />
        <ProjectListComponent />
      </MainContainerColumn>
    </MainContentContainer>
  );
}

export default memo(ProjectComponent);

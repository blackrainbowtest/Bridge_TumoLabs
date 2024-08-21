import BreadcrumbNavigationComponent from "components/_GlobalComponents/BreadcrumbNavigationComponent";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import { memo } from "react";
// import TipComponent from "./TipComponent";
// import FilterComponent from "./FilterComponent";
import ProjectListComponent from "./ProjectsListComponent/ProjectListComponent";

function AllProjectsComponent() {
  return (
    <MainContainerColumn>
      <BreadcrumbNavigationComponent />
      {/* FIXME: add stepper to comfirm tips */}
      {/* <TipComponent /> */}
      {/* <FilterComponent /> */}
      <ProjectListComponent />
    </MainContainerColumn>
  );
}

export default memo(AllProjectsComponent);

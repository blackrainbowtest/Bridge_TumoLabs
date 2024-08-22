import BreadcrumbNavigationComponent from "components/_GlobalComponents/BreadcrumbNavigationComponent";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import AddProjectComponent from "components/ProjectsComponent/AddProjectComponent";
import { memo } from "react";

function AddNewProject() {
  return (
    <MainContentContainer>
      <MainContainerColumn>
        <BreadcrumbNavigationComponent />
        <AddProjectComponent />
      </MainContainerColumn>
    </MainContentContainer>
  );
}

export default memo(AddNewProject);

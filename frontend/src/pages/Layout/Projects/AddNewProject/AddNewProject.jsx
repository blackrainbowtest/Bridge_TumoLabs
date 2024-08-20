import BreadcrumbNavigationComponent from "components/_GlobalComponents/BreadcrumbNavigationComponent";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import { memo } from "react";

function AddNewProject() {
  return (
    <MainContentContainer>
      <MainContainerColumn>
        <BreadcrumbNavigationComponent />
        AddNewProject
      </MainContainerColumn>
    </MainContentContainer>
  );
}

export default memo(AddNewProject);

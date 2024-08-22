import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import SelectedProjectComponent from "components/ProjectsComponent/SelectedProjectComponent";
import { memo } from "react";

function SelectedProject() {
  return (
    <MainContentContainer>
      <SelectedProjectComponent />
    </MainContentContainer>
  );
}

export default memo(SelectedProject);

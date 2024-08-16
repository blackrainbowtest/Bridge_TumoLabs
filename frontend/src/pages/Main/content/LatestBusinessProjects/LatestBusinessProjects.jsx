import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import LatestBusinessProjectsComponent from "components/MainPageComponents/LatestBusinessProjectsComponent";
import { memo } from "react";

function LatestBusinessProjects() {
  return (
    <MainContentContainer>
      <LatestBusinessProjectsComponent />
    </MainContentContainer>
  );
}

export default memo(LatestBusinessProjects);

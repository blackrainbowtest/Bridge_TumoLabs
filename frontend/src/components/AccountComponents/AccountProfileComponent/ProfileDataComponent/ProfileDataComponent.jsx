import { memo } from "react";
import DataActionComponent from "./DataActionComponent";
import ProjectComponent from "./ProjectComponent";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import DetailsComponent from "./DetailsComponent";

function ProfileDataComponent() {
  return (
    <MainContainerColumn>
      <DetailsComponent />
      <DataActionComponent />
      <ProjectComponent />
    </MainContainerColumn>
  );
}

export default memo(ProfileDataComponent);

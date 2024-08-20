import { memo, useState } from "react";
import DataActionComponent from "./DataActionComponent";
import ProjectComponent from "./ProjectComponent";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import DetailsComponent from "./DetailsComponent";

function ProfileDataComponent() {
  const [isEdit, setIsEdit] = useState(false);

  const handleDataEdit = () => {
    console.log("Doing save actions")
  };

  return (
    <MainContainerColumn>
      <DetailsComponent isEdit={isEdit} />
      <DataActionComponent
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        callback={handleDataEdit}
      />
      <ProjectComponent />
    </MainContainerColumn>
  );
}

export default memo(ProfileDataComponent);

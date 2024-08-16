import MainContentContainer from 'components/_GlobalComponents/MainContentContainer';
import ContributeToProjectComponent from "components/MainPageComponents/ContributeToProjectComponent";
import { memo } from "react";

function ContributeToProject() {

  return (
    <MainContentContainer>
      <ContributeToProjectComponent />
    </MainContentContainer>
  );
}

export default memo(ContributeToProject);

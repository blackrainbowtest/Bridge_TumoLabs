import { memo } from "react";
import WorkSliderComponent from "components/MainPageComponents/WorkSliderComponent";

import MainContentContainer from 'components/_GlobalComponents/MainContentContainer';

function WorkSlider() {
  return (
    <MainContentContainer>
      <WorkSliderComponent />
    </MainContentContainer>
  );
}

export default memo(WorkSlider);
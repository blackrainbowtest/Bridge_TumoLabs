import { memo } from "react";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import AboutAccountInfo from "pages/Main/content/AboutAccountInfo";
import AboutPlatform from 'pages/Main/content/AboutPlatform';
import WorkSlider from "pages/Main/content/WorkSlider";

function Main() {
  return (
    <MainContainerColumn>
      <AboutAccountInfo />
      <AboutPlatform />
      <WorkSlider />
    </MainContainerColumn>
  );
}

export default memo(Main);

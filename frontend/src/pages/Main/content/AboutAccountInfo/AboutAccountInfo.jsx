import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import AboutAccountInfoComponent from "components/MainPageComponents/AboutAccountInfoComponent";
import { memo } from "react";

function AboutAccountInfo() {
  return (
    <MainContentContainer>
      <AboutAccountInfoComponent />
    </MainContentContainer>
  );
}

export default memo(AboutAccountInfo);

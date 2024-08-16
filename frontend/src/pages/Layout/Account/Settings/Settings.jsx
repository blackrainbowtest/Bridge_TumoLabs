import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import AccountSettingsComponent from "components/AccountComponents/AccountSettingsComponent";
import { memo } from "react";

function Settings() {
  return (
    <MainContentContainer>
      <AccountSettingsComponent />
    </MainContentContainer>
  );
}

export default memo(Settings);

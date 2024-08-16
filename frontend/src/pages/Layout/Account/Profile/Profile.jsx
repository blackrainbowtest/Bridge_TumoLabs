import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import AccountProfileComponent from "components/AccountComponents/AccountProfileComponent";
import { memo } from "react";

function Profile() {
  return (
    <MainContentContainer>
      <AccountProfileComponent />
    </MainContentContainer>
  );
}

export default memo(Profile);

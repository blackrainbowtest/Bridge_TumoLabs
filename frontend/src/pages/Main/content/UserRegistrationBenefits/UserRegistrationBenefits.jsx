import MainContentContainer from "components/_GlobalComponents/MainContentContainer";
import UserRegistrationBenefitsComponent from "components/MainPageComponents/UserRegistrationBenefitsComponent";
import { memo } from "react";

function UserRegistrationBenefits() {
  return (
    <MainContentContainer>
      <UserRegistrationBenefitsComponent />
    </MainContentContainer>
  );
}

export default memo(UserRegistrationBenefits);

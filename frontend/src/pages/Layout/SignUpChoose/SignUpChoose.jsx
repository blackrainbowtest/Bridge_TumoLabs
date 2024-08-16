import BreadcrumbNavigationComponent from "components/_GlobalComponents/BreadcrumbNavigationComponent";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import MainContentContainer from 'components/_GlobalComponents/MainContentContainer';
import UserRegistrationBenefitsComponent from "components/AccountComponents/AccountAuthComponents/UserRegistrationBenefitsComponent";
import { memo } from "react";

function SignUpChoose() {
  return (
    <MainContentContainer>
      <MainContainerColumn>
        <BreadcrumbNavigationComponent />
        <UserRegistrationBenefitsComponent />
      </MainContainerColumn>
    </MainContentContainer>
  );
}

export default memo(SignUpChoose);

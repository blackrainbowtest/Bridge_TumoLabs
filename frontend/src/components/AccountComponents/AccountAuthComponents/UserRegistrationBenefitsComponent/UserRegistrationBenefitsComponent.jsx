import { Typography } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import MainGridContainer from "components/_GlobalComponents/MainGridContainer";
import UserBenefitsItemComponent from "components/AccountComponents/AccountAuthComponents/UserRegistrationBenefitsComponent/UserBenefitsItemComponent";
import { memo } from "react";
import { benefitsSettings } from "settings/benefitsSettings";

function UserRegistrationBenefitsComponent() {
  return (
    <MainContainerColumn>
      <Typography variant='h4' color='text.secondary' align='center'>
        Projects, SMEs. Junior Professionals, Supervisors-Educators description
      </Typography>

      <MainGridContainer columns={3}>
        {benefitsSettings.map((benefits, index) => {
          return <UserBenefitsItemComponent key={index} data={benefits} />;
        })}
      </MainGridContainer>
    </MainContainerColumn>
  );
}

export default memo(UserRegistrationBenefitsComponent);

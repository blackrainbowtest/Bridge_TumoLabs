import { Box } from "@mui/material";
import MainGridContainer from "components/_GlobalComponents/MainGridContainer";
import UserBenefitsItemComponent from "components/AccountComponents/AccountAuthComponents/UserRegistrationBenefitsComponent/UserBenefitsItemComponent";
import { memo } from "react";
import { benefitsSettings } from "settings/benefitsSettings";
import styled from "styled-components";

function UserRegistrationBenefitsComponent() {
  return (
    <MainContainer id='RegestrationBenefitsComponent'>
      <MainGridContainer>
        {benefitsSettings.map((benefits, index) => {
          return <UserBenefitsItemComponent key={index} data={benefits} />;
        })}
      </MainGridContainer>
    </MainContainer>
  );
}

export default memo(UserRegistrationBenefitsComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  minWidth: "100%",
  minHeight: "600px",
  paddingTop: "30px",
  paddingBottom: "30px",
  gap: "30px",
  display: "flex",
  justifyContent: "center",
}));

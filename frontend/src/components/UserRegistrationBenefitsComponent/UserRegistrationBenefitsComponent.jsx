import { Box } from "@mui/material";
import UserBenefitsItemComponent from "components/UserBenefitsItemComponent";
import { memo } from "react";
import { benefitsSettings } from "settings/benefitsSettings";
import styled from "styled-components";

function UserRegistrationBenefitsComponent() {
  return (
    <MainContainer>
      {benefitsSettings.map((benefits, index) => {
        return <UserBenefitsItemComponent key={index} data={benefits} />;
      })}
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

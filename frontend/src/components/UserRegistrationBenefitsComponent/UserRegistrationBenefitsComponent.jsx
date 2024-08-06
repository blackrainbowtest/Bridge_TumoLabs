import { Box } from "@mui/material";
import BenefitsItemComponent from "components/BenefitsItemComponent";
import { memo } from "react";
import { benefitsSettings } from "settings/benefitsSettings";
import styled from "styled-components";

function UserRegistrationBenefitsComponent() {
  return (
    <MainContainer>
      {benefitsSettings.map((benefits, index) => {
        return <div key={index}>5555</div>;
      })}
      <BenefitsItemComponent props={""} />
    </MainContainer>
  );
}

export default memo(UserRegistrationBenefitsComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  minWidth: "100%",
  minHeight: "600px",
  paddingBottom: "30px",
  display: "flex",
  justifyContent: "center",
  border: "1px solid black",
}));

import { Box } from "@mui/material";
import UserRegistrationBenefitsComponent from "components/UserRegistrationBenefitsComponent";
import { memo } from "react";
import styled from "styled-components";


function UserRegistrationBenefits() {
  return (
    <MainContainer>
      <UserRegistrationBenefitsComponent />
    </MainContainer>
  );
}

export default memo(UserRegistrationBenefits);

const MainContainer = styled(Box)(({ _ }) => ({
  maxWidth: "100%",
  minHeight: "650px",
  paddingBottom: "30px",
  display: "flex",
  justifyContent: "center",
}));

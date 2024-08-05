import { Box } from "@mui/material";
import { memo } from "react";
import WorkSliderComponent from "components/WorkSliderComponent";

import styled from "styled-components";

function WorkSlider() {
  return (
    <MainContainer>
      <WorkSliderComponent></WorkSliderComponent>
    </MainContainer>
  );
}

export default memo(WorkSlider);

const MainContainer = styled(Box)(({ _ }) => ({
  maxWidth: "100%",
  minHeight: "650px",
  paddingBottom: "30px",
  display: "flex",
  justifyContent: "center",
}));

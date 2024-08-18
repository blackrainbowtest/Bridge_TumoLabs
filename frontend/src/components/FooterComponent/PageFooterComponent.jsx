import { memo } from "react";
import styled from "styled-components";
import LogoFooterIconContainer from "./LogoFooterIconContainer";
import { Box } from "@mui/material";
import LogoFooterActionContainer from "./LogoFooterActionContainer";

function PageFooterComponent() {
  return (
    <SectionContainer>
      <LogoFooterActionContainer />
      <SeparatorContainer />
      <LogoFooterIconContainer />
    </SectionContainer>
  );
}
export default memo(PageFooterComponent);

const SectionContainer = styled("section")(({ _ }) => ({
  minWidth: "100%",
  display: "flex",
  flexDirection: "column",
}));

const SeparatorContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  border: `1px solid ${theme.palette.border.secondary}`,
  margin: `${theme.spacing(2.5)} 0`,
}));

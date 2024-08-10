import PageFooterComponent from "components/FooterComponent/PageFooterComponent";
import { memo } from "react";
import styled from "styled-components";

function Footer() {
  return (
    <MainContainer>
      <SectionContainer>
        <PageFooterComponent />
      </SectionContainer>
    </MainContainer>
  );
}
export default memo(Footer);

const MainContainer = styled("footer")(({ theme }) => ({
  maxWidth: "100%",
  minHeight: "150px",
  display: "flex",
  padding: `${theme.paddingY} ${theme.paddingX}`,
  borderTop: `1px solid ${theme.palette.border.secondary}`,
  background: theme.palette.background.secondary,
}));

const SectionContainer = styled("section")(({ theme }) => ({
  minWidth: "100%",
  display: "flex",
}));

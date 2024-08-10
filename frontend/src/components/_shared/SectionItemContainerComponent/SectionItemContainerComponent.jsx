import { memo } from "react";
import styled from "styled-components";

function SectionItemContainerComponent({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

export default memo(SectionItemContainerComponent);

const MainContainer = styled(`section`)(({ _ }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: '1rem',
}));

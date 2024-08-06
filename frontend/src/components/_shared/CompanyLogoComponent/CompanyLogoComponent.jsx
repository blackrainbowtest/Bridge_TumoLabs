import { Box } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

function CompanyLogoComponent() {
  const { t } = useTranslation();

  return <MainContainer>{t("coName")}</MainContainer>;
}

export default memo(CompanyLogoComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  maxWidth: "100%",
  display: "flex",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "2rem",
  marginRight: "15px"
}));

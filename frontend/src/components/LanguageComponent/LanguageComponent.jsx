import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import imgAM from "static/images/languages/am.png";
import imgEN from "static/images/languages/en.png";
import { useTranslation } from "react-i18next";
import AppBarItemComponent from "components/HeaderComponent/AppBarItemComponent";
import LanguageItemsComponent from "./LanguageItemsComponent";

const languages = [
  { code: "en", label: "English", imgSrc: imgEN },
  { code: "am", label: "Armenia", imgSrc: imgAM },
];

function LanguageComponent() {
  const { i18n } = useTranslation();

  return (
    <MainContainer>
      <AppBarItemComponent
        label={
          <IconContainer>
            <img
              src={
                languages.find((lang) => lang.code === i18n.language)?.imgSrc
              }
              alt='Current language'
            />
          </IconContainer>
        }
        showArrow
      >
        <LanguageItemsComponent languages={languages} />
      </AppBarItemComponent>
    </MainContainer>
  );
}

export default memo(LanguageComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  minHeight: "inherit",
  display: "flex",
  justifyContent: "center",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: `${theme.palette.text.secondary}!important`,
  "& img": {
    width: 24,
    height: 24,
    objectFit: "cover",
    borderRadius: "50%",
  },
}));

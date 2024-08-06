import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { memo, useState } from "react";
import styled from "styled-components";
import imgAM from "static/images/languages/am.png";
import imgEN from "static/images/languages/en.png";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", imgSrc: imgEN },
  { code: "am", label: "Armenia", imgSrc: imgAM },
];

function LanguageComponent({ close = () => {} }) {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    handleClose();
  };

  return (
    <MainContainer
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <IconButtonContainer onClick={handleClick}>
        <img
          src={languages.find((lang) => lang.code === i18n.language)?.imgSrc}
          alt='Current language'
        />
      </IconButtonContainer>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <img
              src={lang.imgSrc}
              alt={lang.label}
              style={{ width: 24, height: 16, marginRight: 8 }}
            />
          </MenuItem>
        ))}
      </Menu>
    </MainContainer>
  );
}

export default memo(LanguageComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
}));

const IconButtonContainer = styled(IconButton)(({ _ }) => ({
  display: "flex",
  justifyContent: "center",
  "& img": {
    width: 24,
    height: 24,
    objectFit: "cover",
    borderRadius: "50%",
  },
}));

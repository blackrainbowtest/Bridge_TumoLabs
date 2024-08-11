import { Box, Button, Menu, MenuItem } from "@mui/material";
import { memo, useState } from "react";
import styled from "styled-components";
import imgAM from "static/images/languages/am.png";
import imgEN from "static/images/languages/en.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
        <span>{Boolean(anchorEl) ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} </span>
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
            <span>
              {lang.label}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </MainContainer>
  );
}

export default memo(LanguageComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  minHeight: "inherit",
  display: "flex",
  justifyContent: "center",
}));

const IconButtonContainer = styled(Button)(({ theme }) => ({
  display: "flex",
  minHeight: "inherit",
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

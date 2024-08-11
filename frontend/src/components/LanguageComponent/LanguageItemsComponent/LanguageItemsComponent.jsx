import { MenuItem } from '@mui/material';
import { memo } from "react";
import { useTranslation } from 'react-i18next';

function LanguageItemsComponent({ handleClose, languages }) {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event, code) => {
        i18n.changeLanguage(code);
        localStorage.setItem("language", code);
        handleClose(event);
      };

  return languages.map((lang) => (
    <MenuItem key={lang.code} onClick={(event) => handleLanguageChange(event, lang.code)}>
      <img
        src={lang.imgSrc}
        alt={lang.label}
        style={{ width: 24, height: 16, marginRight: 8 }}
      />
      <span>{lang.label}</span>
    </MenuItem>
  ));
}

export default memo(LanguageItemsComponent);

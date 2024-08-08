import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageComponent from "components/LanguageComponent";
import NavItemComponent from "components/_shared/NavItemComponent";
import MobileNavItemComponent from "components/_shared/MobileNavItemComponent";
import CompanyLogoComponent from "components/_shared/CompanyLogoComponent";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state?.account?.isAuthenticated
  );

  const navItems = [
    { label: t("LLL"), url: "/LLL" },
    { label: t("LBD"), url: "/LBD" },
    { label: t("LBT"), url: "/LBT" },
    { label: t("PPL"), url: "/PPL" },
  ];
  const accItems = [
    { label: t("signIn"), url: "/sign-in" },
    { label: t("signUp"), url: "/sign-up" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrolling(scrollTop > 50);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const changePage = (e, item) => {
    if (item.url) {
      navigate(item.url);
    }
  };

  return (
    <MainContainer>
      <CssBaseline />
      <AppBarContainer component='nav' scrolling={scrolling.toString()}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            <CompanyLogoComponent />
            <NavItemComponent
              navItems={navItems}
              scrolling={scrolling}
              changePage={changePage}
            />
          </Typography>
          {!isAuthenticated ? (
            <NavItemComponent
              navItems={accItems}
              scrolling={scrolling}
              changePage={changePage}
            />
          ) : null}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <LanguageComponent />
          </Box>
        </Toolbar>
      </AppBarContainer>
      <MobileNavItemComponent
        navItems={navItems}
        handleDrawerToggle={handleDrawerToggle}
        changePage={changePage}
        mobileOpen={mobileOpen}
      />
    </MainContainer>
  );
}

export default memo(Layout);

const MainContainer = styled(Box)(({ _ }) => ({
  maxWidth: "100%",
  display: "flex",
}));

const AppBarContainer = styled(AppBar)(({ theme, scrolling }) => ({
  maxWidth: "100%",
  display: "flex",
  backgroundColor:
    scrolling === "true"
      ? `${theme.palette.background.primary}!important`
      : theme.palette.primary.transpatent,
  color:
    scrolling === "true"
      ? `${theme.palette.text.primary}!important`
      : `${theme.palette.primary.contrastText}!important`,
}));

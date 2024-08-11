import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageComponent from "components/LanguageComponent";
import NavItemComponent from "components/_shared/NavItemComponent";
import MobileNavItemComponent from "components/_shared/MobileNavItemComponent";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountMenuProfileComponent from "components/AccountProfileComponents/AccountMenuProfileComponent";
import HeaderTitleComponent from './HeaderTitleComponent';
import AppBarItemComponent from './AppBarItemComponent';
import EmptyComponent from 'components/_GlobalComponents/EmptyComponent';

function HeaderComponent() {
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
      setScrolling(scrollTop > 100);
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
    <>
      <HeaderTitleComponent />
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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" }, minHeight: "inherit" }}
          >
            {/* FIXME: add components with handleClose arg */}
            <AppBarItemComponent label='Projects' showArrow><EmptyComponent/></AppBarItemComponent>
            <AppBarItemComponent label='Information center' showArrow><EmptyComponent/></AppBarItemComponent>
            <AppBarItemComponent label='About us' showArrow><EmptyComponent/></AppBarItemComponent>
            <AppBarItemComponent label='News' showArrow><EmptyComponent/></AppBarItemComponent>
            <AppBarItemComponent label='Contact us' showArrow><EmptyComponent/></AppBarItemComponent>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, minHeight: "inherit" }} >
            <LanguageComponent />
          </Box>
          {!isAuthenticated ? (
            <NavItemComponent
              navItems={accItems}
              scrolling={scrolling}
              changePage={changePage}
            />
          ) : null}
          {isAuthenticated ? <AccountMenuProfileComponent /> : null}
        </Toolbar>
      </AppBarContainer>
      <MobileNavItemComponent
        navItems={navItems}
        handleDrawerToggle={handleDrawerToggle}
        changePage={changePage}
        mobileOpen={mobileOpen}
      />
    </>
  );
}

export default memo(HeaderComponent);

const AppBarContainer = styled(AppBar)(({ theme, scrolling }) => ({
  maxWidth: "100%",
  display: "flex",
  position: `${scrolling === "true" ? "sticky" : "static"}!important`,
  backgroundColor:
    scrolling === "true"
      ? `${theme.palette.background.primary}!important`
      : theme.palette.primary.transpatent,
  color: `${theme.palette.text.primary}!important`,
}));

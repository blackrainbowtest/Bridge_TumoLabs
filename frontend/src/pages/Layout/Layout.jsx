import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import LanguageComponent from "components/LanguageComponent";

const navItems = ["Home", "About", "Contact"];
const drawerWidth = 240;

function Layout() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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
  const container =
    typeof document !== "undefined" ? () => document.body : undefined;

  const changePage = (e, item) => {
    console.log(item);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        {t("coName")}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(e) => changePage(e, item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <LanguageComponent close={handleDrawerToggle} />
      </List>
    </Box>
  );

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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {t("coName")}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <ButtonContainer
                scrolling={scrolling.toString()}
                key={item}
                onClick={(e) => changePage(e, item)}
              >
                {item}
              </ButtonContainer>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <LanguageComponent />
          </Box>
        </Toolbar>
      </AppBarContainer>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
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

const ButtonContainer = styled(Button)(({ theme, scrolling }) => ({
  color:
    scrolling === "true"
      ? `${theme.palette.text.primary}!important`
      : `${theme.palette.primary.contrastText}!important`,
}));

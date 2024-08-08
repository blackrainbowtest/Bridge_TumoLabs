import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import LanguageComponent from "components/LanguageComponent";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

function MobileNavItemComponent({
  navItems,
  handleDrawerToggle,
  changePage,
  mobileOpen,
}) {
  const { t } = useTranslation();

  const container =
    typeof document !== "undefined" ? () => document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        {t("coName")}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(e) => changePage(e, item)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <LanguageComponent close={handleDrawerToggle} />
      </List>
    </Box>
  );

  return (
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
  );
}

export default memo(MobileNavItemComponent);

import { Logout, Settings } from "@mui/icons-material";
import { Avatar, Divider, ListItemIcon, MenuItem } from "@mui/material";
import { logoutAccount } from "features/account/accountLogoutAPI";
import { memo } from "react";
import { useDispatch } from "react-redux";

// FIXME: add pages for items
function AccountMenuItemComponent({ handleClose }) {
  const dispatch = useDispatch();

  const profilItemClick = () => {
    handleClose();
    console.log("profilItemClick");
  };

  const settingsItemClick = () => {
    handleClose();
    console.log("settingsItemClick");
  };

  const logoutItemClick = () => {
    handleClose();
    const accountTolen =
      localStorage.getItem("authToken") ?? sessionStorage.getItem("authToken");
    dispatch(logoutAccount(accountTolen));
  };

  return (
    <>
      <MenuItem onClick={profilItemClick}>
        <Avatar /> Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={settingsItemClick}>
        <ListItemIcon>
          <Settings fontSize='small' />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={logoutItemClick}>
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
}

export default memo(AccountMenuItemComponent);

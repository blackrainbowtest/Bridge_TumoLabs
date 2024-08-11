import { Logout, Settings } from "@mui/icons-material";
import { Avatar, Divider, ListItemIcon, MenuItem } from "@mui/material";
import { logoutAccount } from "features/account/accountLogoutAPI";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

// FIXME: add pages for items
function AccountMenuItemComponent({ handleClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profilItemClick = (event) => {
    handleClose(event);
    navigate("/profile");
  };

  const settingsItemClick = (event) => {
    handleClose(event);
    navigate("/settings");
  };

  const logoutItemClick = (event) => {
    handleClose(event);
    const accountTolen =
      localStorage.getItem("authToken") ?? sessionStorage.getItem("authToken");
    dispatch(logoutAccount(accountTolen));
  };

  return (
    <>
      <MenuItem onClick={profilItemClick}>
        <ListItemIcon>
          <AvatarContainer fontSize='small' />
        </ListItemIcon>
        My Profile
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

const AvatarContainer = styled(Avatar)(({ theme }) => ({
  maxWidth: "20px",
  maxHeight: "20px",
}));
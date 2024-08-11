import {
  Avatar,
  Box,
  IconButton,
  Menu,
  Tooltip,
  Typography,
} from "@mui/material";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AccountMenuItemComponent from '../AccountMenuItemComponent';

function AccountMenuProfileComponent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const account = useSelector((state) => state?.account?.account);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MainContainer>
        <Typography>{account.username}</Typography>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
          >
            <AvatarContainer>{account.username[0].toUpperCase()}</AvatarContainer>
          </IconButton>
        </Tooltip>
      </MainContainer>
      <StyledMenu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <AccountMenuItemComponent handleClose={handleClose} />
      </StyledMenu>
    </>
  );
}

export default memo(AccountMenuProfileComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  marginLeft: "20px",
}));

const AvatarContainer = styled(Avatar)(({ _ }) => ({
  width: 32,
  height: 32,
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    minWidth: "150px",
    elevation: 0,
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    marginTop: theme.spacing,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      marginLeft: -0.5,
      marginRight: "10px",
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      backgroundColor: theme.palette.background.paper,
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}));

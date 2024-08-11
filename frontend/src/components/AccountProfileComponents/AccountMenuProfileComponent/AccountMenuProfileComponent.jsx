import { Avatar, Box, Typography } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AccountMenuItemComponent from "../AccountMenuItemComponent";
import AppBarItemComponent from "components/HeaderComponent/AppBarItemComponent";

function AccountMenuProfileComponent() {
  const account = useSelector((state) => state?.account?.account);

  return (
    <MainContainer>
      <AppBarItemComponent
        label={
          <LabelContainer>
            <StyledTypography>{account.username}</StyledTypography>
            <AvatarContainer>
              {account.username[0].toUpperCase()}
            </AvatarContainer>
          </LabelContainer>
        }
      >
        <AccountMenuItemComponent />
      </AppBarItemComponent>
    </MainContainer>
  );
}

export default memo(AccountMenuProfileComponent);

const MainContainer = styled(Box)(({ _ }) => ({
  minHeight: "inherit",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
}));

const AvatarContainer = styled(Avatar)(({ _ }) => ({
  width: 32,
  height: 32,
}));

const LabelContainer = styled(Box)(({ _ }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  gap: "5px"
}));

const StyledTypography = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '150px'
});
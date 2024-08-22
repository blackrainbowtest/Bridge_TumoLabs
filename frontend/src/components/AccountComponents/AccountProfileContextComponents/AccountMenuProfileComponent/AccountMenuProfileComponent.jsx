import { Avatar, Box, Typography } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AccountMenuItemComponent from "../AccountMenuItemComponent";
import AppBarItemComponent from "components/HeaderComponent/AppBarItemComponent";
import NotificationBell from "components/_shared/Buttons/NotificationBellComponent/NotificationBellComponent";
import NotificationContextComponent from "../NotificationContextComponent";

function AccountMenuProfileComponent({ ...props }) {
  const account = useSelector((state) => state?.account?.account);
  const notifications = useSelector(
    (state) => state?.notifications?.notifications
  );

  return (
    <MainContainer {...props}>
      <AppBarItemComponent
        placement={"bottom"}
        label={<NotificationBell notificationCount={notifications.length} />}
      >
        <NotificationContextComponent />
      </AppBarItemComponent>
      <AppBarItemComponent
        label={
          <LabelContainer>
            <StyledTypography>{account.username}</StyledTypography>
            {account?.profile_image ? (
              <ImageContainer
                sx={{
                  backgroundImage: `url(${
                    account.profile_image.image.includes("http")
                      ? ""
                      : process.env.REACT_APP_BASE_URL
                  }${account.profile_image.image})`,
                }}
              />
            ) : (
              <AvatarContainer>
                {account.username[0].toUpperCase()}
              </AvatarContainer>
            )}
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

const ImageContainer = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const LabelContainer = styled(Box)(({ _ }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  gap: "5px",
}));

const StyledTypography = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "150px",
});

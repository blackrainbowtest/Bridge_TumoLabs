// External libraries
import { memo } from "react";
import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styled, { css } from "styled-components";

// Local modules
import { registerAccount } from "features/account/accountRegisterAPI";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import ConfirmContent from "./content/ConfirmContent";
import EmailContent from "./content/EmailContent";
import FirstNameContent from "./content/FirstNameContent";
import LastNameContent from "./content/LastNameContent";
import PasswordContent from "./content/PasswordContent";
import UserNameContent from "./content/UserNameContent";
import CopyRightComponent from "components/_shared/CopyRightComponent";
import GoToUrlComponent from "components/_shared/GoToUrlComponent";

const groupMapping = {
  innovators: 1,
  partners: 2,
  advisors: 3,
  challengers: 4,
};

function UserSignUpComponent() {
  const methods = useForm({
    defaultValues: {
      username: "testUser",
      firstName: "testName",
      lastName: "testName2",
      email: "test@gmail.com",
      password: "test123",
      confirmPassword: "test123",
    },
    mode: "onChange", // or 'onBlur'
  });
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") ?? "innovators";
  const groupId = groupMapping[type];

  const onSubmit = (data) => {
    const accountData = { ...data, group: groupId };
    dispatch(registerAccount(accountData));
  };

  return (
    <FormProvider {...methods}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <MainContainer>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <ContentContainer onSubmit={methods.handleSubmit(onSubmit)}>
            <NameContainer>
              <FirstNameContent />
              <LastNameContent />
            </NameContainer>
            <UserNameContent />
            <EmailContent />
            <PasswordContent />
            <ConfirmContent />
            <ActionButtonComponent
              label='Sign up'
              type={"submit"}
              customStyles={ActionButtonStyle}
            />
          </ContentContainer>
        </MainContainer>
        <GoToUrlComponent
          to='http://localhost:3000/sign-in/'
          sx={{ mt: 2, mb: 2 }}
        />
        <CopyRightComponent sx={{ mt: 4, mb: 4 }} />
      </Container>
    </FormProvider>
  );
}

export default memo(UserSignUpComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
}));

const NameContainer = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  gap: "30px",
}));

const ContentContainer = styled("form")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
}));

const ActionButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
`;

// External libraries
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import { memo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styled, { css } from "styled-components";

// Local modules
import FirstNameContent from "./content/FirstNameContent";
import LastNameContent from "./content/LastNameContent";
import EmailContent from "./content/EmailContent";
import PasswordContent from "./content/PasswordContent";
import ConfirmContent from "./content/ConfirmContent";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import { useDispatch } from 'react-redux';
import { registerAccount } from 'features/account/accountRegisterAPI';

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
  const dispatch = useDispatch()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") ?? "innovators";
  const groupId = groupMapping[type];

  const onSubmit = (data) => {
    const accountData = { ...data, group: groupId };
    dispatch(registerAccount(accountData))
  };
// FIXME: add username content for registration
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
        {/* FIXME: Add link to signIn page */}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </FormProvider>
  );
}

export default memo(UserSignUpComponent);

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {"Copyright © "}
      <Link color='inherit' to='http://localhost:3000'>
        Bridge
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

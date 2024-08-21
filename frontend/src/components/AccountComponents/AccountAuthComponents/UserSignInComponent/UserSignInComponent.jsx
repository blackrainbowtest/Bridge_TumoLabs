// External libraries
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styled, { css } from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import GoToUrlComponent from "components/_shared/GoToUrlComponent";
import UserNameContent from "./content/UserNameContent";
import PasswordContent from "./content/PasswordContent";
import ActionButtonComponent from "components/_shared/Buttons/ActionButtonComponent";
import { loginAccount } from 'features/account/accountLoginAPI';
import CopyRightComponent from 'components/_shared/CopyRightComponent';

// Local modules

function UserSignInComponent() {
  const methods = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange", // or 'onBlur'
  });

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isRemember, setIsRemember] = useState(false);

  const onSubmit = (data) => {
    const accountData = { ...data };
    dispatch(loginAccount(accountData)).then((result) => {
        if (loginAccount.fulfilled.match(result)) {
          if (isRemember && result?.payload?.token) {
            localStorage.setItem("authToken", result.payload.token);
          } else {
            sessionStorage.setItem("authToken", result?.payload.token);
          }
          navigate("/");
        }
      })
  };

  const handleCheckboxChange = (event) => {
    setIsRemember(event.target.checked);
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
            Sign in
          </Typography>
          <ContentContainer onSubmit={methods.handleSubmit(onSubmit)}>
            <UserNameContent />
            <PasswordContent />
            <CHBContainer>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isRemember}
                    onChange={handleCheckboxChange}
                  />
                }
                label='Remember me'
              />
            </CHBContainer>
            <ActionButtonComponent
              label='Sign in'
              type={"submit"}
              customStyles={ActionButtonStyle}
            />
          </ContentContainer>
        </MainContainer>
        <GoToUrlComponent
          to='http://localhost:3000/sign-up/'
          labeltextbefore='Not a member yet? '
          label='Click here to SignUp'
          sx={{ mt: 2, mb: 2 }}
        />
        <CopyRightComponent sx={{ mt: 4, mb: 4 }} />
      </Container>
    </FormProvider>
  );
}

export default memo(UserSignInComponent);

const MainContainer = styled(Box)(({ theme }) => ({
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
}));

const CHBContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
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

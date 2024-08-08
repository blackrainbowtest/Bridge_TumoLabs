import { Box, Button, TextField, } from "@mui/material"
import { memo } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components"
import LogoFooterIconContainer from "./LogoFooterIconContainer";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";

function PageFooterComponent() {
    const { t } = useTranslation();
    const footerFirstItems = [t("LLL"), t("LBD")];
    const footerSecondItems = [t("LBT"), t("PPL")];
    const methods = useForm({
        defaultValues: {
            email: "",
            text: "",
        },
        mode: "onBlur", // or 'onChange'
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <FooterContainer>
            <LogoFooterIconContainer />

            <ButtonsFooterContainer>
                <FooterButtonsComponent>
                    {footerFirstItems.map((item) => (
                        <ButtonFirstContainer

                            content={item}
                            key={item}>
                            {item}
                        </ButtonFirstContainer>)
                    )}

                </FooterButtonsComponent>
                <FooterButtonsComponent>
                    {footerSecondItems.map((item) => (

                        <ButtonSecondContainer
                            content={item}
                            key={item}
                        >
                            {item}
                        </ButtonSecondContainer>
                    ))}
                </FooterButtonsComponent>
            </ButtonsFooterContainer>

            <FormFooterContainer>
                <h1>CONTACT US</h1>
                <ContentContainer onSubmit={methods.handleSubmit(onSubmit)}>
{/* FIXME: ADD VARIANT ARG */}
                    <ActionButtonComponent
                        label='Sign up'
                        type={"submit"}
                        customStyles={ActionButtonStyle}

                    />
                </ContentContainer>



                {/* <Box
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px' }}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField label="Enter your email" color="success" variant="filled" focused
                        {...register('email', {
                            required: 'email', pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'email is not valid'
                            }
                        })} />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email?.message}</small>}
                    <textarea placeholder="Enter text" style={{ width: '100%', height: '100px', padding: '10px', resize: 'none' }}
                        {...register('description', {
                            required: 'description', pattern: {
                                value: /^[a-zA-Z\s]+$/,
                                message: 'description is not valid'
                            }
                        })} />
                    {errors.description && <small style={{ color: 'red' }}>{errors.description?.message}</small>}
                    <Button type="submit" variant="contained" color="success">
                        Send
                    </Button>
                </Box> */}
            </FormFooterContainer>
        </FooterContainer>
    )
}
export default memo(PageFooterComponent)

const FooterContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: `#c6d9ec!important`,
}))

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


const ButtonsFooterContainer = styled(Box)(({ theme }) => ({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: `#c6d9ec!important`,
    padding: '50px',
}))
const FooterButtonsComponent = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    columnGap: '20px',
    justifyContent: 'center',
    backgroundColor: `#c6d9ec!important`,
    padding: '10px',
}))

const ButtonFirstContainer = styled(Button)(({ theme, content }) => ({
    display: 'flex',
    columnGap: '10px',
    border: `none!important`,
    color: '',
    backgroundColor:
        content === "LLL"
            ? `${theme.palette.background.Crimson}!important` :
            content === "LBD"
                ? `${theme.palette.background.OrangeRed}!important` :
                null,

}
));
const ButtonSecondContainer = styled(Button)(({ theme, content }) => ({
    backgroundColor:

        content === "LBT"
            ? `${theme.palette.background.RoyalBlue}!important` :
            content === "PPL"
                ? `${theme.palette.background.SandyBrown}!important` : null,

}
));
const FormFooterContainer = styled(Box)(({ theme }) => ({
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '20px',
    paddingTop: '20px',
    backgroundColor: `#c6d9ec!important`,
    border: `none!important`
}))

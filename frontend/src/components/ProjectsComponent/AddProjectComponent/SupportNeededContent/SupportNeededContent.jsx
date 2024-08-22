import { Box } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
function SupportNeededContent() {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const supportes = control._defaultValues.support_needed || [];

    return (
        <MainContainer>
            {supportes.map((support, index) => (
                <div key={index}>
                    <Controller
                        name={`[${index}].name`}
                        control={control}
                        defaultValue={support.name}
                        rules={{
                            required: `support Needed ${index + 1} name is required`,
                            minLength: {
                                value: 3,
                                message: `support Needed ${index + 1} name must be at least 3 characters long`,
                            },
                        }}
                        render={({ field }) => (
                            <TextInputComponent
                                label={`support Needed ${index + 1} Name`}
                                {...field}
                                error={!!errors?.supportes?.[index]?.name}
                                helperText={errors?.supportes?.[index]?.name?.message || ""}
                            />
                        )}
                    />
                    <Controller
                        name={`support Needed[${index}].description`}
                        control={control}
                        defaultValue={support.description}
                        rules={{
                            required: `support Needed ${index + 1} description is required`,
                            minLength: {
                                value: 10,
                                message: `support Needed ${index + 1} description must be at least 10 characters long`,
                            },
                        }}
                        render={({ field }) => (
                            <TextInputComponent
                                label={`support Needed ${index + 1} Description`}
                                {...field}
                                error={!!errors?.supportes?.[index]?.description}
                                helperText={errors?.supportes?.[index]?.description?.message || ""}
                            />
                        )}
                    />
                </div>
            ))}
        </MainContainer>)
}
export default memo(SupportNeededContent)
const MainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection:'column',
    width: '100%'
}));
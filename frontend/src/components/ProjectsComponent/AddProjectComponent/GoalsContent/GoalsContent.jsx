import { Box } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import styled from "styled-components";
function GoalsContent() {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const goals = control._defaultValues.goals || [];

    return (
        <MainContainer>
            {goals.map((goal, index) => (
                <div key={index}>
                    <Controller
                        name={`goals[${index}].name`}
                        control={control}
                        defaultValue={goal.name}
                        rules={{
                            required: `Goal ${index + 1} name is required`,
                            minLength: {
                                value: 3,
                                message: `Goal ${index + 1} name must be at least 3 characters long`,
                            },
                        }}
                        render={({ field }) => (
                            <TextInputComponent
                                label={`Goal ${index + 1} Name`}
                                {...field}
                                error={!!errors?.goals?.[index]?.name}
                                helperText={errors?.goals?.[index]?.name?.message || ""}
                            />
                        )}
                    />
                    <Controller
                        name={`goals[${index}].description`}
                        control={control}
                        defaultValue={goal.description}
                        rules={{
                            required: `Goal ${index + 1} description is required`,
                            minLength: {
                                value: 10,
                                message: `Goal ${index + 1} description must be at least 10 characters long`,
                            },
                        }}
                        render={({ field }) => (
                            <TextInputComponent
                                label={`Goal ${index + 1} Description`}
                                {...field}
                                error={!!errors?.goals?.[index]?.description}
                                helperText={errors?.goals?.[index]?.description?.message || ""}
                            />
                        )}
                    />
                </div>
            ))}
        </MainContainer>
    );
}

export default memo(GoalsContent)
const MainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection:'column',
    width: '100%'
}));
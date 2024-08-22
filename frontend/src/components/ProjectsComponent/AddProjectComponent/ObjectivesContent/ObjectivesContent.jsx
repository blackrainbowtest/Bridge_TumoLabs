import { Box } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

function ObjectivesContent(){
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const objectives = control._defaultValues.objectives || [];

   return( <MainContainer>
    {objectives.map((objective, index) => (
        <div key={index}>
            <Controller
                name={`objectives[${index}].name`}
                control={control}
                defaultValue={objective.name}
                rules={{
                    required: `Objectives${index + 1} name is required`,
                    minLength: {
                        value: 3,
                        message: `Objectives ${index + 1} name must be at least 3 characters long`,
                    },
                }}
                render={({ field }) => (
                    <TextInputComponent
                        label={`Objectives ${index + 1} Name`}
                        {...field}
                        error={!!errors?.objectives?.[index]?.name}
                        helperText={errors?.objectives?.[index]?.name?.message || ""}
                    />
                )}
            />
            <Controller
                name={`Objectives[${index}].description`}
                control={control}
                defaultValue={objective.description}
                rules={{
                    required: `objectives ${index + 1} description is required`,
                    minLength: {
                        message: `objectives ${index + 1} description must be at least 10 characters long`,
                    },
                }}
                render={({ field }) => (
                    <TextInputComponent
                        label={`Objectives ${index + 1} Description`}
                        {...field}
                        error={!!errors?.objectives?.[index]?.description}
                        helperText={errors?.objectives?.[index]?.description?.message || ""}
                    />
                )}
            />
        </div>
    ))}
</MainContainer>)
}
export default memo(ObjectivesContent)
const MainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection:'column',
    width: '100%'
}));
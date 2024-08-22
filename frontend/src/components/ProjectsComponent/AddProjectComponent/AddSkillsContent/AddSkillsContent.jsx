import { Box } from "@mui/material";
import MainContainerColumn from "components/_GlobalComponents/MainContainerColumn";
import TextInputComponent from "components/_shared/TextInputComponent";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";


function AddSkillsContent(){
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const skills = control._defaultValues.skills_required    || [];

    return (
        <MainContainer>
            {skills.map((skill, index) => (
                <div key={index}>
                    <Controller
                        name={`skills[${index}].name`}
                        control={control}
                        defaultValue={skill.name}
                        rules={{
                            required: `skills ${index + 1} name is required`,
                            minLength: {
                                value: 3,
                                message: `skills ${index + 1} name must be at least 3 characters long`,
                            },
                        }}
                        render={({ field }) => (
                            <TextInputComponent
                                label={`skills ${index + 1} Name`}
                                {...field}
                                error={!!errors?.skills?.[index]?.name}
                                helperText={errors?.skills?.[index]?.name?.message || ""}
                            />
                        )}
                    />
                    <Controller
                        name={`skills[${index}].description`}
                        control={control}
                        defaultValue={skills.description}
                        rules={{
                            required: `skill ${index + 1} description is required`,
                            minLength: {
                                value: 10,
                                message: `skill ${index + 1} description must be at least 10 characters long`,
                            },
                        }}
                        render={({ field }) => (
                            <TextInputComponent
                                label={`skills ${index + 1} Description`}
                                {...field}
                                error={!!errors?.skills?.[index]?.description}
                                helperText={errors?.skills?.[index]?.description?.message || ""}
                            />
                        )}
                    />
                </div>
            ))}
        </MainContainer>)
}
export default memo(AddSkillsContent)
const MainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection:'column',
    width: '100%'
}));
import { Box,Typography } from "@mui/material";
import ActionButtonComponent from "components/_shared/ActionButtonComponent";
import { memo, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TitleContent from "./TitleContent";
import DescriptionContent from "./DescriptionContent";
import ProblemChallengeContent from "./ProblemChallengeContent";
import GoalsContent from "./GoalsContent";
import AddImageContent from "./AddImageContent";
import AddLocationContent from "./AddLocationContent";
import ObjectivesContent from "./ObjectivesContent/ObjectivesContent";
import AddSkillsContent from "./AddSkillsContent";
import SupportNeededContent from "./SupportNeededContent";
import BudgetContent from "./BudgetContent";
import DurationContent from "./DurationContent";

function AddProjectComponent() {
    const projects = useSelector((state) => state?.project?.data);
    const methods = useForm({
        defaultValues: {
            title: "Content creation about Organic food",
            description: "We want to develop content highlighting the benefits of organic food.",
            problem_challenge: "We don't have enough resources and skills for promoting activities.",
            goals: [
                { name: "Increase awareness", description: "Increase awareness about organic food benefits." }
            ],
            objectives: [
                { name: "Produce images", description: "Produce high-quality images of produce." },
                { name: "Produce names", description: "Write product names in same place." },
                { name: "Produce weights", description: "Write product weights for us." }
            ],
            support_needed: [
                { name: "Photography", description: "High-quality images needed." }
            ],
            skills_required: [
                { skill: 1, description: "Experience in food and product photography." },
                { skill: 2, description: "Experience in food and product photography." },
                { skill: 3, description: "Experience in food and product photography." }
            ],
            additional_notes: [
                { name: "Access to garden", "description": "Provide access to garden for photo shoots." }
            ],
            start_date: "2024-06-01",
            end_date: "2024-07-15",
            budget: "80000.00",
            location: "Baghanis, Tavush Province",
            business_name: "Sonya Karapetyan IE",
            business_description: "We grow organic fruits, vegetables, and plants."
        },
        mode: 'all',

    })

    console.log(projects)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [addProject, setAddProject] = useState(false);
    const onSubmit = (data) => {
        const productData = { ...data };
        console.log(productData)

    };
    return (
        <FormProvider {...methods}>
            <MainContainer>

                <ContentContainer onSubmit={methods.handleSubmit(onSubmit)}>

                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                        Project Application
                    </Typography>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                            Project Name*
                        </Typography>
                        <Typography variant="span">
                            Provide a clear and descriptive name for your project that reflects its purpose
                        </Typography>
                        <TitleContent />
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                            Project description
                        </Typography>
                        <Typography variant="span">
                            Describe the specific problem or challenge your business is currently facing.
                        </Typography>
                        <DescriptionContent />
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }} >
                            Problem or Challenge
                        </Typography>
                        <Typography variant="span">
                            Explain the type of solution or support you need to address the problem.                </Typography>
                        <ProblemChallengeContent />
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                            Goals
                        </Typography>
                        <Typography variant="span">
                            Goals with this project.</Typography>
                        <GoalsContent />
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                            Browse Image
                        </Typography>
                        <Typography variant="span">
                            Browse images for your project
                        </Typography>
                        <AddImageContent />
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="span" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                        Write Location
                        </Typography>
                        <Typography variant="span">
                            List the specific skills needed to successfully complete the project.
                        </Typography>
                       <AddLocationContent/>
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                           Objectives
                        </Typography>
                        <ObjectivesContent/>
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                           Skills
                        </Typography>
                       <AddSkillsContent/>
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                           Support Need
                        </Typography>
                      <SupportNeededContent/>
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                            Budget
                        </Typography>
                        <Typography variant="span">
                            Indicate the total budget allocated for this project.
                        </Typography>
                        <BudgetContent/>
                    </ItemContainer>
                    <ItemContainer >
                        <Typography variant="p" sx={{ width: '407px', fontWeight: 'bold', fontSize: "30px" }}>
                            Duration
                        </Typography>
                        <Typography variant="span">
                            Provide the estimated start and end dates for the project.
                        </Typography>
                        <DurationContent/>
                    </ItemContainer>
                    <ActionButtonComponent
                        variant="contained"
                        label='Submit'
                        type={"submit"}

                    />
                </ContentContainer>
            </MainContainer>
        </FormProvider>)
}
export default memo(AddProjectComponent)


const MainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
}));
const ContentContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: 'center',
    gap: "50px",
    width: '40%',
}))
const ItemContainer = styled('form')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: '10px',
    width: '100%'


}))

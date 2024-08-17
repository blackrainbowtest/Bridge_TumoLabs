import SupervisorBG from "static/images/Accounts/Supervisor.svg"
import SMEBG from "static/images/Accounts/SME.svg"
import StudentBG from "static/images/Accounts/Student.svg"

export const benefitsSettings = [
    {
        id: "BA002",
        url: "partners",
        title: "SME",
        description: "As a regional SME, you can access a pool of skilled students ready to help with your projects.",
        image: SMEBG,
    },
    {
        id: "BA001",
        url: "innovators",
        title: "Student",
        description: "As a student, you can find projects that align with your skills and interests.",
        image: StudentBG,
    },
    {
        id: "BA003",
        url: "advisors",
        title: "Superviosor",
        description: "As a supervisor, you can guide your students through practical projects.",
        image: SupervisorBG,
    }
];
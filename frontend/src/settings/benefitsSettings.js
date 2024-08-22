import SupervisorBG from "static/images/Accounts/Supervisor.svg"
import SMEBG from "static/images/Accounts/SME.svg"
import StudentBG from "static/images/Accounts/Student.svg"

export const benefitsSettings = [
    {
        id: "BA002",
        url: "partners",
        title: "SME",
        description: "Get Help for Your Business by connecting with skilled students ready to work on your projects.",
        image: SMEBG,
    },
    {
        id: "BA001",
        url: "innovators",
        title: "Student",
        description: "Start Building Your Career by finding projects that match your skills and interests.",
        image: StudentBG,
    },
    {
        id: "BA003",
        url: "advisors",
        title: "Superviosor",
        description: "Guide and Support Students through real-world projects.",
        image: SupervisorBG,
    }
];
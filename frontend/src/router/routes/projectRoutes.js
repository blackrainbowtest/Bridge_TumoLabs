import AddNewProject from 'pages/Layout/Projects/AddNewProject';
import AllProjects from 'pages/Layout/Projects/AllProjects';
import FeaturedProjects from 'pages/Layout/Projects/FeaturedProjects';
import ProjectCategories from 'pages/Layout/Projects/ProjectCategories';
import ProjectGuidelines from 'pages/Layout/Projects/ProjectGuidelines';
import ProjectSuccessStories from 'pages/Layout/Projects/ProjectSuccessStories';

const projectRoutes = [
  { path: "all-projects", element: <AllProjects /> },
  { path: "all-projects/project/:id", element: <h1>all-projects/project/:id</h1> },
  { path: "featured-projects", element: <FeaturedProjects /> },
  { path: "project-categories", element: <ProjectCategories /> },
  { path: "add-new-project", element: <AddNewProject /> },
  { path: "project-success-stories", element: <ProjectSuccessStories /> },
  { path: "project-guidelines", element: <ProjectGuidelines /> },
];

export default projectRoutes;
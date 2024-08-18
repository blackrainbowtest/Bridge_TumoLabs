import Projects from 'pages/Layout/Projects';

const projectRoutes = [
  { path: "all-projects", element: <Projects /> },
  { path: "featured-projects", element: <h1>Featured Projects</h1> },
  { path: "project-categories", element: <h1>Project Categories</h1> },
  { path: "submit-project", element: <h1>Submit a Project</h1> },
  { path: "project-success-stories", element: <h1>Project Success Stories</h1> },
  { path: "project-guidelines", element: <h1>Project Guidelines</h1> },
];

export default projectRoutes;
import Content from 'pages/Content';
import Main from 'pages/Main';
import Page404 from 'pages/Page404';
import SignIn from 'pages/Layout/SignIn';
import SignUp from 'pages/Layout/SignUp';
import accountRoutes from './accountRoutes';
import projectRoutes from './projectRoutes';

const mainRoutes = [
  {
    path: "", element: <Content />,
    children: [
      { path: "", element: <Main /> },
      ...accountRoutes,
      ...projectRoutes
    ]
  },
  { path: "sign-up", element: <SignUp /> },
  { path: "sign-in", element: <SignIn /> },
  { path: "*", element: <Page404 /> }
];

export default mainRoutes;
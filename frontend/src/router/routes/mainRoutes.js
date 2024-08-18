import Content from 'pages/Content';
import Main from 'pages/Main';
import Page404 from 'pages/Page404';
import SignIn from 'pages/Layout/SignIn';
import SignUp from 'pages/Layout/SignUp';
import accountRoutes from 'router/routes/accountRoutes';
import projectRoutes from 'router/routes/projectRoutes';
import SignUpChoose from 'pages/Layout/SignUpChoose';
import aboutUsRoutes from 'router/routes/aboutUsRoutes';
import contactUsRoutes from 'router/routes/contactUsRoutes';
import informationCenterRoutes from 'router/routes/informationCenterRoutes';

const mainRoutes = [
  {
    path: "", element: <Content />,
    children: [
      { path: "", element: <Main /> },
      ...accountRoutes,
      ...projectRoutes,
      ...aboutUsRoutes,
      ...contactUsRoutes,
      ...informationCenterRoutes,
      {
        path: "sign-up",
        element: <SignUpChoose />
      },
    ]
  },
  {
    path: "sign-up/:type",
    element: <SignUp />
  },
  { path: "sign-in", element: <SignIn /> },
  { path: "*", element: <Page404 /> }
];

export default mainRoutes;
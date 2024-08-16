import Profile from 'pages/Layout/Account/Profile';
import Settings from 'pages/Layout/Account/Settings';

const accountRoutes = [
  {
    path: "profile", element: <Profile />
  },
  {
    path: "settings", element: <Settings />
  }
];

export default accountRoutes;
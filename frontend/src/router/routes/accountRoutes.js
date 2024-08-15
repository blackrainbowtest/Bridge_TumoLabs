import Profile from 'pages/Account/Profile';
import Settings from 'pages/Account/Settings';

const accountRoutes = [
  {
    path: "profile", element: <Profile />
  },
  {
    path: "settings", element: <Settings />
  }
];

export default accountRoutes;
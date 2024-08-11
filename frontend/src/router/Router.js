import Profile from 'pages/Account/Profile'
import Settings from 'pages/Account/Settings'
import Content from 'pages/Content'
import Main from 'pages/Main'
import Page404 from 'pages/Page404'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import { useRoutes } from 'react-router-dom'



const Router = () => {
    const routing = useRoutes([
        {
            path: "", element: <Content />,
            children: [
                {
                    path: "", element: <Main />
                },
                {
                    path: "/profile", element: <Profile />
                },
                {
                    path: "/settings", element: <Settings />
                },
            ]

        },

        {
            path: "/sign-up", element: <SignUp />,
        },
        { path: "/sign-in", element: <SignIn /> },
        {
            path: "*", element: <Page404 />
        }
    ])

    return routing
}

export default Router
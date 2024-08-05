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
            ]

        },

        {
            path: "/sign-up",
            children: [
                {
                    path: "student", element: <h1>Student sign-up</h1>
                },
                {
                    path: "university", element: <h1>University sign-up</h1>
                }, {
                    path: "company", element: <h1>Company sign-up</h1>
                },
            ],
            element: <SignUp />
        },
        { path: "/sign-in", element: <SignIn /> },
        {
            path: "*", element: <Page404 onGoHome={() => window.location.href = '/'} />
        }
    ])

    return routing
}

export default Router
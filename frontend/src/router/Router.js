import { useRoutes } from 'react-router-dom'



const Router = () => {
    const routing = useRoutes([
        {
            path: "", element: <h1>Main layout</h1>,
            children: [
                {
                    path: "/", element: <h1>Main body</h1>
                },
                {
                    path: "/sign-up", element: <h1>sign-up</h1>
                },
                {
                    path: "/sign-in", element: <h1>sign-in</h1>
                }
            ]
        },
        {
            path: "*", element: <h1>Page not gound</h1>
        }
    ])

    return routing
}

export default Router
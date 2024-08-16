import { useRoutes } from 'react-router-dom';
import mainRoutes from './routes/mainRoutes';

const Router = () => {
    const routing = useRoutes(mainRoutes);
    return routing;
}

export default Router;
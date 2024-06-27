import Home from '../views/halaman/home';
import Detail from '../views/halaman/detail';
import Favorite from '../views/halaman/favorite';

const routes = {
    '/': Home,
    '/favorite': Favorite,
    '/home': Home,
    '/detail/:id': Detail,
};

export default routes;

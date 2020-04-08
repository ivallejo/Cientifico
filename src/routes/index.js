import Header from '../template/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error404';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('contect');

    header.innerHTML = await Header();
};

export default router;
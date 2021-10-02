import Navigo from 'navigo';
import { variables } from './variables.js';
const router = new Navigo('/');
router.on('/game', function () {
    variables.main.innerHTML = variables.as;
});
router.resolve();
router.navigate('/about');

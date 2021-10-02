import Navigo from 'navigo';
import { variables } from '../ts-built/variables.js'
import { pages } from './pages.js'

const router = new Navigo('/');

router.on('/game', function () {
    variables.main.innerHTML = pages.game
});

router.on('/about', function () {
    variables.main.innerHTML = 'about'
});

router.on('/settings', function () {
    variables.main.innerHTML = 'settings'
});

router.on('/score', function () {
    variables.main.innerHTML = 'score'
});



router.resolve();

router.navigate('/about')
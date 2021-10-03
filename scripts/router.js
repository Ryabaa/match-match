import { variables } from '../ts-built/variables.js'
import { pages } from './pages.js'

switch (location.pathname) {
    case '/game':
            variables.main.innerHTML = pages.game
        break;

    case '/about':
            variables.main.innerHTML = 'about'
        break;

    case '/score':
            variables.main.innerHTML = 'score'
        break;

    case '/settings':
            variables.main.innerHTML = 'settings'
        break;

    default:
        location.pathname = '/game'
}
import { variables } from '../ts-built/variables.js'
import { pages } from './pages.js'


switch (location.pathname) {
    case '/game':
            variables.main.innerHTML = pages.game
            variables.navLinkGame.style.background = '#2F80ED'
        break;

    case '/about':
            variables.main.innerHTML = 'about'
            variables.navLinkAbout.style.background = '#2F80ED'
        break;

    case '/score':
            variables.main.innerHTML = 'score'
            variables.navLinkScore.style.background = '#2F80ED'
        break;

    case '/settings':
            variables.main.innerHTML = 'settings'
            variables.navLinkSettings.style.background = '#2F80ED'
        break;

    default:
        location.pathname = '/game'
}
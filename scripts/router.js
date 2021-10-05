import { variables } from '../ts-built/variables.js'
import { pages } from './pages.js'


switch (location.pathname) {
    case '/match-match/game':
            variables.main.innerHTML = pages.game
            variables.navLinkGame.style.background = '#2F80ED'
        break;

    case '/match-match/about':
            variables.main.innerHTML = 'about'
            variables.navLinkAbout.style.background = '#2F80ED'
        break;

    case '/match-match/score':
            variables.main.innerHTML = 'score'
            variables.navLinkScore.style.background = '#2F80ED'
        break;

    case '/match-match/settings':
            variables.main.innerHTML = 'settings'
            variables.navLinkSettings.style.background = '#2F80ED'
        break;

    default:
        location.pathname = '/match-match/game'
}

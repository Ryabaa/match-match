import { variables } from "./variables.js";
import { pages } from "./pages.js";

switch (location.hash) {
    case "#game":
        variables.main.innerHTML = pages.game;
        variables.navLinkGame.style.background = "#2F80ED";
        break;

    case "#about":
        variables.main.innerHTML = "about";
        variables.navLinkAbout.style.background = "#2F80ED";
        break;

    case "#score":
        variables.main.innerHTML = "score";
        variables.navLinkScore.style.background = "#2F80ED";
        break;

    case "#settings":
        variables.main.innerHTML = "settings";
        variables.navLinkSettings.style.background = "#2F80ED";
        break;

    default:
        location.hash = "#game";
}

window.onhashchange = function () {
    window.location.reload();
};

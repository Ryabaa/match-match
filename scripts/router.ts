import { global } from "./variables/index.js";
import { pages } from "./pages.js";

switch (location.hash) {
    case "#game":
        global.main!.innerHTML = pages.game;
        global.navLinkGame!.style.background = "#2F80ED";
        break;

    case "#about":
        global.main!.innerHTML = pages.about;
        global.navLinkAbout!.style.background = "#2F80ED";
        break;

    case "#score":
        global.main!.innerHTML = "score";
        global.navLinkScore!.style.background = "#2F80ED";
        break;

    case "#settings":
        global.main!.innerHTML = "settings";
        global.navLinkSettings!.style.background = "#2F80ED";
        break;

    default:
        location.hash = "#game";
}

window.onhashchange = function () {
    window.location.reload();
};

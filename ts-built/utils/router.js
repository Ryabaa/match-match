import { getCards, global } from "../variables/index.js";
import { pages } from "./pages.js";
import { gameSettings } from "../main/settings.js";
import { leaderboard } from "../main/leaderboard.js";
export let gameDifficult = null;
export let gameCardType = null;
switch (location.hash) {
    case "#game":
        global.main.innerHTML = pages.game;
        global.navLinkGame.style.background = "#2F80ED";
        getCards();
        break;
    case "#about":
        global.main.innerHTML = pages.about;
        global.navLinkAbout.style.background = "#2F80ED";
        break;
    case "#score":
        global.main.innerHTML = pages.score;
        global.navLinkScore.style.background = "#2F80ED";
        leaderboard();
        break;
    case "#settings":
        global.main.innerHTML = pages.settings;
        global.navLinkSettings.style.background = "#2F80ED";
        gameSettings();
        break;
    default:
        if (localStorage.getItem("registration") !== "done") {
            location.hash = "#about";
        }
        else {
            location.hash = "#game";
        }
}
window.onhashchange = function () {
    window.location.reload();
};

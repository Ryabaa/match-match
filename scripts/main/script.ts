import { checkGameState } from "./modals.js";
import { global } from "../variables/index.js";

window.onload = function () {
    global.body!.classList.add("loaded_hiding");
    window.setTimeout(function () {
        global.body!.classList.add("loaded");
        global.body!.classList.remove("loaded_hiding");
    }, 500);
};

global.openGamePage!.onclick = function () {
    location.hash = "#game";
};

global.navLinkAbout!.onclick = () => {
    checkGameState("about");
};
global.navLinkGame!.onclick = () => {
    checkGameState("game");
};
global.navLinkScore!.onclick = () => {
    checkGameState("score");
};
global.navLinkSettings!.onclick = () => {
    checkGameState("settings");
};

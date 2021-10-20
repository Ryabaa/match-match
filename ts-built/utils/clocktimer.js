import { gamePause, getTime } from "../main/modals.js";
import { getGame, game } from "../variables/index.js";
export let timer;
export let time = "";
export let sec = "00";
export let min = "00";
export let getSec;
export function clearTime() {
    sec = "00";
    min = "00";
}
export function resetTime() {
    let gamePause2 = gamePause;
    if (gamePause2 === false) {
        clearTime();
    }
    else {
        sec = getTime;
        gamePause2 = false;
    }
}
export function clocktimer(clear) {
    if (clear === true) {
        clearTime();
    }
    else {
        resetTime();
    }
    timer = setInterval(function () {
        sec = +sec + 1;
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (sec == 60) {
            sec = "00";
            min = +min + 1;
            if (min < 10) {
                min = "0" + min;
            }
        }
        getGame();
        game.seconds.innerText = sec;
        game.minutes.innerText = min;
        time = `${min}:${sec}`;
        getSec = sec;
    }, 1000);
}

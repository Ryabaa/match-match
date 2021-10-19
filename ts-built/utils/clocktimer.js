import { getGame, game } from "../variables/index.js";
export let timer;
export let time = "";
export let sec = "00";
export let min = "00";
export let getSec;
export function resetTime() {
    sec = "00";
    min = "00";
}
export function clocktimer() {
    resetTime();
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

import { gamePause, getTime } from "../main/modals.js";
import { getGame, game } from "../variables/index.js";

export let timer: any;
export let time: string = "";
export let sec: any = "00";
export let min: any = "00";
export let getSec: any;
export function clearTime() {
    sec = "00";
    min = "00";
}
export function resetTime() {
    let gamePause2 = gamePause;
    if (gamePause2 === false) {
        clearTime();
    } else {
        sec = getTime;
        gamePause2 = false;
    }
}

export function clocktimer(clear: boolean) {
    if (clear === true) {
        clearTime();
    } else {
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
        game.seconds!.innerText = sec;
        game.minutes!.innerText = min;
        time = `${min}:${sec}`;
        getSec = sec;
    }, 1000);
}

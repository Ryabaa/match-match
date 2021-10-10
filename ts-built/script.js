import { shuffle } from "./utils.js";
import { openResultWindow } from "./modals.js";
import { cards, game, images, getGame, resetCards, result, global } from "./variables/index.js";
import { getCards } from "./variables/cards.js";
window.onload = function () {
    global.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
        global.body.classList.add("loaded");
        global.body.classList.remove("loaded_hiding");
    }, 500);
};
let gameState = false;
global.stateToggler.onclick = function () {
    if (gameState === false) {
        gameState = true;
        startGame();
    }
    else {
        gameState = false;
        game.fieldSubstrate.style.display = "unset";
        stopGame();
    }
    if (gameState === true) {
        global.stateText.textContent = "Stop";
    }
    else {
        global.stateText.textContent = "Start";
    }
};
global.openGamePage.onclick = function () {
    location.hash = "#game";
};
//--------------------ClockTimer---------------//
let timer = null;
let time = "";
let sec = "00";
let min = "00";
function clocktimer() {
    sec = "00";
    min = "00";
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
    }, 1000);
}
//------------Game----------------//
function startGame() {
    getCards();
    getGame();
    spawnImages(cards, shuffle(images));
    clocktimer();
    game.fieldSubstrate.style.display = "none";
}
export function stopGame() {
    resetCards();
    getGame();
    getCards();
    clearCards(cards);
    clearTimeout(timer);
    sec = "00";
    min = "00";
    game.seconds.innerText = sec;
    game.minutes.innerText = min;
}
function clearCards(cards) {
    cards.forEach((card, i) => {
        card.fail.style.display = "none";
        card.failCover.style.display = "none";
        card.imageContainer.style.display = "none";
        card.cover.style.display = "unset";
        card.fail.style.display = "none";
        card.failCover.style.display = "none";
        card.succes.style.display = "none";
        card.succesCover.style.display = "none";
    });
}
function spawnImages(cards, images) {
    cards.forEach((card, i) => {
        card.imageContainer.innerHTML = images[i].image;
        card.imageId = images[i].id;
        addOnclicks(card);
    });
}
let getSucces = null;
let arr = [];
function check(arr, card, getSucces) {
    if (arr[0] !== arr[1]) {
        game.fieldSubstrate.style.display = "unset";
        cards.forEach((card) => {
            setTimeout(() => {
                card.fail.style.display = "unset";
                card.failCover.style.display = "unset";
            }, 700);
            setTimeout(() => {
                card.imageContainer.style.display = "none";
                card.cover.style.display = "unset";
                card.fail.style.display = "none";
                card.failCover.style.display = "none";
                game.fieldSubstrate.style.display = "none";
            }, 1500);
        });
    }
    if (arr[0] == arr[1]) {
        setTimeout(() => {
            card.succes.style.display = "unset";
            card.succesCover.style.display = "unset";
            getSucces();
            if (cards.length === 0) {
                result.name.innerHTML = localStorage.getItem("name") || "";
                result.time1.innerHTML = time;
                result.time2.innerHTML = time;
                clearTimeout(timer);
                openResultWindow();
            }
        }, 1000);
        let index1 = cards.findIndex((card) => card.imageId === arr[0]);
        if (index1 !== -1) {
            cards.splice(index1, 1);
        }
        let index2 = cards.findIndex((card) => card.imageId === arr[1]);
        if (index2 !== -1) {
            cards.splice(index2, 1);
        }
    }
}
function addOnclicks(card) {
    card.cover.onclick = () => {
        card.imageContainer.style.display = "unset";
        card.cover.style.display = "none";
        let succes = card.succes;
        let succesCover = card.succesCover;
        arr.push(card.imageId);
        if (arr.length === 2) {
            check(arr, card, getSucces);
            arr = [];
        }
        else {
            getSucces = () => {
                succesCover.style.display = "unset";
                succes.style.display = "unset";
            };
        }
    };
}

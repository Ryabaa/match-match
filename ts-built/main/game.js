import { clearTime, clocktimer, getSec, min, sec, time, timer } from "../utils/clocktimer.js";
import { openResultWindow, gameState_modals, changeGameState_modals } from "./modals.js";
import { images, getImages } from "./settings.js";
import { cards, getCards, game, getGame, resetCards, result, global } from "../variables/index.js";
export let gameState = false;
let cl = true;
global.stateToggler.onclick = function () {
    if (gameState_modals !== true) {
        gameState = false;
        changeGameState_modals();
    }
    if (gameState === false) {
        gameState = true;
        startGame();
    }
    else {
        gameState = false;
        stopGame();
    }
    if (gameState === true) {
        global.stateText.textContent = "Stop";
    }
    else {
        global.stateText.textContent = "Start";
    }
};
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
function startGame() {
    getCards();
    getImages();
    getGame();
    spawnImages(cards, shuffle(images));
    clearTime();
    clocktimer(cl);
    game.fieldSubstrate.style.display = "none";
}
export function stopGame() {
    resetCards();
    getGame();
    getCards();
    clearCards(cards);
    clearTime();
    clearTimeout(timer);
    game.seconds.innerText = sec;
    game.minutes.innerText = min;
    game.fieldSubstrate.style.display = "unset";
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
let fullScore;
function check(arr, card, getSucces) {
    if (arr[0] !== arr[1]) {
        game.fieldSubstrate.style.display = "unset";
        cards.forEach((card) => {
            setTimeout(() => {
                card.fail.style.display = "unset";
                card.failCover.style.display = "unset";
            }, 600);
            setTimeout(() => {
                card.imageContainer.style.display = "none";
                card.cover.style.display = "unset";
                card.fail.style.display = "none";
                card.failCover.style.display = "none";
                game.fieldSubstrate.style.display = "none";
            }, 1300);
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
                let getScore = Number(localStorage.getItem("score"));
                console.log(getScore);
                if (getScore === 0) {
                    console.log(100);
                    fullScore = 100;
                }
                if (getScore < fullScore || Number(localStorage.getItem("score"))) {
                    localStorage.setItem("score", getSec);
                }
                clearTimeout(timer);
                setTimeout(() => {
                    openResultWindow();
                }, 1000);
            }
        }, 400);
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

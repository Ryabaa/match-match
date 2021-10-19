import { clocktimer, getSec, min, resetTime, sec, time, timer } from "../utils/clocktimer.js";
import { openResultWindow, checkGameState, gameState_modals, changeGameState_modals } from "./modals.js";
import { images, getImages } from "./settings.js";
import { IImage, getScore, cards, getCards, score, ICard, game, animalsEasy, animalsMedium, fruitsEasy, fruitsMedium, getGame, resetCards, result, global } from "../variables/index.js";

export let gameState = false;

global.stateToggler!.onclick = function () {
    if (gameState_modals !== true) {
        gameState = false;
        changeGameState_modals();
    }
    if (gameState === false) {
        gameState = true;
        startGame();
    } else {
        gameState = false;
        stopGame();
    }
    if (gameState === true) {
        global.stateText!.textContent = "Stop";
    } else {
        global.stateText!.textContent = "Start";
    }
};

function shuffle(arr: any) {
    return arr.sort(() => Math.random() - 0.5);
}

function startGame() {
    getCards();
    getImages();
    getGame();
    spawnImages(cards, shuffle(images));
    clocktimer();
    game.fieldSubstrate!.style.display = "none";
}

export function stopGame() {
    resetCards();
    getGame();
    getCards();
    clearCards(cards);
    resetTime();
    clearTimeout(timer);
    game.seconds!.innerText = sec;
    game.minutes!.innerText = min;
    game.fieldSubstrate!.style.display = "unset";
}

function clearCards(cards: ICard[]) {
    cards.forEach((card, i) => {
        card.fail!.style.display = "none";
        card.failCover!.style.display = "none";
        card.imageContainer!.style.display = "none";
        card.cover!.style.display = "unset";
        card.fail!.style.display = "none";
        card.failCover!.style.display = "none";
        card.succes!.style.display = "none";
        card.succesCover!.style.display = "none";
    });
}

function spawnImages(cards: ICard[], images: IImage[]) {
    cards.forEach((card, i) => {
        card.imageContainer!.innerHTML = images[i].image;
        card.imageId = images[i].id;
        addOnclicks(card);
    });
}

let getSucces: any = null;
let arr: number[] = [];

function check(arr: number[], card: ICard, getSucces: any) {
    if (arr[0] !== arr[1]) {
        game.fieldSubstrate!.style.display = "unset";
        cards.forEach((card: ICard) => {
            setTimeout(() => {
                card.fail!.style.display = "unset";
                card.failCover!.style.display = "unset";
            }, 600);
            setTimeout(() => {
                card.imageContainer!.style.display = "none";
                card.cover!.style.display = "unset";
                card.fail!.style.display = "none";
                card.failCover!.style.display = "none";
                game.fieldSubstrate!.style.display = "none";
            }, 1300);
        });
    }
    if (arr[0] == arr[1]) {
        setTimeout(() => {
            card.succes!.style.display = "unset";
            card.succesCover!.style.display = "unset";
            getSucces();
            if (cards.length === 0) {
                result.name!.innerHTML = localStorage.getItem("name") || "";
                result.time1!.innerHTML = time;
                result.time2!.innerHTML = time;
                let getScore = Number(localStorage.getItem("score"));
                if (getSec < getScore) {
                    localStorage.setItem("score", getSec);
                }
                clearTimeout(timer);
                setTimeout(() => {
                    openResultWindow();
                }, 1000);
            }
        }, 400);
        let index1 = cards.findIndex((card: ICard) => card.imageId === arr[0]);
        if (index1 !== -1) {
            cards.splice(index1, 1);
        }

        let index2 = cards.findIndex((card: ICard) => card.imageId === arr[1]);
        if (index2 !== -1) {
            cards.splice(index2, 1);
        }
    }
}

function addOnclicks(card: ICard) {
    card.cover!.onclick = () => {
        card.imageContainer!.style.display = "unset";
        card.cover!.style.display = "none";
        let succes = card.succes;
        let succesCover = card.succesCover;
        arr.push(card.imageId!);
        if (arr.length === 2) {
            check(arr, card, getSucces);
            arr = [];
        } else {
            getSucces = () => {
                succesCover!.style.display = "unset";
                succes!.style.display = "unset";
            };
        }
    };
}

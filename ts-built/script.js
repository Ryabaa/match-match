import { variables, cards, images, changeCards } from "./variables.js";
import { shuffle } from "./utils.js";
import { openResultWindow } from "./modals.js";
let gameState = false;
if (variables.gameStateToggler !== null) {
    variables.gameStateToggler.onclick = function () {
        if (gameState === false) {
            gameState = true;
            startGame();
        }
        else {
            gameState = false;
            variables.gameFieldSubstrate.style.display = "unset";
            stopGame();
        }
        if (gameState === true) {
            variables.gameStateText.textContent = "Stop";
        }
        else {
            variables.gameStateText.textContent = "Start";
        }
    };
}
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
        variables.seconds.innerText = sec;
        variables.minutes.innerText = min;
        time = `${min}:${sec}`;
    }, 1000);
}
//------------Game----------------//
function startGame() {
    spawnImages(cards, shuffle(images));
    clocktimer();
    variables.gameFieldSubstrate.style.display = "none";
}
function stopGame() {
    changeCards();
    clearCards(cards);
    clearTimeout(timer);
    sec = "00";
    min = "00";
    variables.seconds.innerText = sec;
    variables.minutes.innerText = min;
}
export { stopGame };
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
        variables.gameFieldSubstrate.style.display = "unset";
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
                variables.gameFieldSubstrate.style.display = "none";
            }, 1000);
        });
    }
    if (arr[0] == arr[1]) {
        setTimeout(() => {
            card.succes.style.display = "unset";
            card.succesCover.style.display = "unset";
            getSucces();
            if (cards.length === 0) {
                variables.resultTime1.innerHTML = time;
                variables.resultTime2.innerHTML = time;
                clearTimeout(timer);
                openResultWindow();
            }
        }, 1000);
        let index1 = cards.findIndex((n) => n.imageId === arr[0]);
        if (index1 !== -1) {
            cards.splice(index1, 1);
        }
        let index2 = cards.findIndex((n) => n.imageId === arr[1]);
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


const http = require("http");
const url = require("url");

http.createServer(function (req, res) {
    let urlParts = url.parse(req.url);
    if (req.method == "GET") {
        switch (urlParts.pathname){
            case "/":
                homepage(req, res);
                break;
        }
    }
})

function homepage(req, res) { 
    res.end("homepage");
}

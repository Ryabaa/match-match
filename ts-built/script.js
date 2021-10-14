import { shuffle } from "./utils.js";
import { openResultWindow, checkGameState } from "./modals.js";
import { getScore, cards, getCards, score, game, animalsEasy, animalsMedium, fruitsEasy, fruitsMedium, getGame, resetCards, result, global } from "./variables/index.js";
window.onload = function () {
    global.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
        global.body.classList.add("loaded");
        global.body.classList.remove("loaded_hiding");
    }, 500);
};
export let gameState = false;
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
export function leaderboard() {
    let scoreTime;
    let getTime = localStorage.getItem("time");
    if (getTime === null) {
        scoreTime = "00:00";
    }
    else {
        scoreTime = getTime;
    }
    let player1 = { name: "Nicci Troiani", mail: "nicci@gmail.com", time: "00:23" };
    let player2 = { name: "George Fields", mail: "george.f@gmail.com", time: "00:29" };
    let player3 = { name: "Jones Dermot", mail: "dermot@gamil.com", time: "00:32" };
    let player4 = { name: "Jane Doe", mail: "jane.doe@gmail.com", time: "00:39" };
    let player5 = { name: `${localStorage.getItem("name")} ${localStorage.getItem("lastname")}`, mail: `${localStorage.getItem("email")}`, time: `${scoreTime}` };
    getScore();
    let names = [score.name1, score.name2, score.name3, score.name4, score.name5];
    let mail = [score.mail1, score.mail2, score.mail3, score.mail4, score.mail5];
    let timea = [score.time1, score.time2, score.time3, score.time4, score.time5];
    let getPlayers = [player1, player2, player3, player4, player5];
    let players = getPlayers.sort(function (a, b) {
        return Number(b.time) - Number(a.time);
    });
    console.log(getPlayers);
    for (let i = 0; i < players.length; i++) {
        names[i].innerHTML = players[i].name;
        mail[i].innerHTML = players[i].mail;
        timea[i].innerHTML = players[i].time;
    }
}
global.openGamePage.onclick = function () {
    location.hash = "#game";
};
global.navLinkAbout.onclick = () => {
    checkGameState("about");
};
global.navLinkGame.onclick = () => {
    checkGameState("game");
};
global.navLinkScore.onclick = () => {
    checkGameState("score");
};
global.navLinkSettings.onclick = () => {
    checkGameState("settings");
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
export function gameSettings() {
    getGame();
    game.cardTypeBtn_fruits.onclick = () => {
        localStorage.setItem("cardType", "Fruits");
        game.cardTypeBtn_animals.style.background = "none";
        game.cardTypeBtn_animals.style.color = "#312f2f";
        game.cardTypeBtn_fruits.style.background = "#2196f3";
        game.cardTypeBtn_fruits.style.color = "#fff";
    };
    game.cardTypeBtn_animals.onclick = () => {
        localStorage.setItem("cardType", "Animals");
        game.cardTypeBtn_fruits.style.background = "none";
        game.cardTypeBtn_fruits.style.color = "#312f2f";
        game.cardTypeBtn_animals.style.background = "#2196f3";
        game.cardTypeBtn_animals.style.color = "#fff";
    };
    switch (localStorage.getItem("cardType")) {
        case "Animals":
            game.cardTypeBtn_fruits.style.background = "none";
            game.cardTypeBtn_fruits.style.color = "#312f2f";
            game.cardTypeBtn_animals.style.background = "#2196f3";
            game.cardTypeBtn_animals.style.color = "#fff";
            break;
        case "Fruits":
            game.cardTypeBtn_animals.style.background = "none";
            game.cardTypeBtn_animals.style.color = "#312f2f";
            game.cardTypeBtn_fruits.style.background = "#2196f3";
            game.cardTypeBtn_fruits.style.color = "#fff";
            break;
        default:
            game.cardTypeBtn_fruits.style.background = "none";
            game.cardTypeBtn_fruits.style.color = "#312f2f";
            game.cardTypeBtn_animals.style.background = "#2196f3";
            game.cardTypeBtn_animals.style.color = "#fff";
            localStorage.setItem("cardType", "Animals");
            break;
    }
    game.difficultBtn_easy.onclick = () => {
        localStorage.setItem("difficult", "Easy");
        game.difficultBtn_medium.style.background = "none";
        game.difficultBtn_medium.style.color = "#312f2f";
        game.difficultBtn_easy.style.background = "#2196f3";
        game.difficultBtn_easy.style.color = "#fff";
    };
    game.difficultBtn_medium.onclick = () => {
        localStorage.setItem("difficult", "Medium");
        game.difficultBtn_easy.style.background = "none";
        game.difficultBtn_easy.style.color = "#312f2f";
        game.difficultBtn_medium.style.background = "#2196f3";
        game.difficultBtn_medium.style.color = "#fff";
    };
    switch (localStorage.getItem("difficult")) {
        case "Easy":
            game.difficultBtn_medium.style.background = "none";
            game.difficultBtn_medium.style.color = "#312f2f";
            game.difficultBtn_easy.style.background = "#2196f3";
            game.difficultBtn_easy.style.color = "#fff";
            break;
        case "Medium":
            game.difficultBtn_easy.style.background = "none";
            game.difficultBtn_easy.style.color = "#312f2f";
            game.difficultBtn_medium.style.background = "#2196f3";
            game.difficultBtn_medium.style.color = "#fff";
            break;
        default:
            game.difficultBtn_medium.style.background = "none";
            game.difficultBtn_medium.style.color = "#312f2f";
            game.difficultBtn_easy.style.background = "#2196f3";
            game.difficultBtn_easy.style.color = "#fff";
            localStorage.setItem("difficult", "Easy");
            break;
    }
}
let images = [];
let type;
function cardType() {
    switch (localStorage.getItem("cardType")) {
        case "Animals":
            type = "animals";
            break;
        case "Fruits":
            type = "fruits";
            break;
        default:
            break;
    }
}
function getImages() {
    switch (localStorage.getItem("difficult")) {
        case "Easy":
            if (type === "animals") {
                images = animalsEasy;
            }
            else {
                images = fruitsEasy;
            }
            break;
        case "Medium":
            if (type === "animals") {
                images = animalsMedium;
            }
            else {
                images = fruitsMedium;
            }
            break;
    }
}
function startGame() {
    getCards();
    getGame();
    cardType();
    getImages();
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
                localStorage.setItem("time", time);
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

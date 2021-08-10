import { variables, cards, images } from "./variables.js";
import { shuffle } from "./utils.js";
if (variables.gameStateToggler !== null) {
    // Game state toggler
}
let gameState = "not active";
variables.gameStateToggler.onclick = function () {
    if (gameState === "not active") {
        gameState = "active";
    }
    else {
        gameState = "not active";
    }
    if (gameState === "active") {
        variables.gameStateText.textContent = "Stop";
    }
    else {
        variables.gameStateText.textContent = "Start";
    }
    //StartStop();
};
//--------------------ClockTimer---------------//
function clocktimer() {
    let sec = "00";
    let min = "00";
    setInterval(function () {
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
    }, 1000);
}
//------------Game----------------//
window.onload = function () {
    spawnImages(cards, shuffle(images));
    clocktimer();
};
function spawnImages(cards, images) {
    cards.forEach((card, i) => {
        card.imageContainer.innerHTML = images[i].image;
        card.imageId = images[i].id;
        addOnclicks(card);
    });
}
let arr = [];
function check(n1, n2) {
    if (n1 !== n2) {
        cards.forEach((card) => {
            function test(card) {
                card.imageContainer.style.display = "none";
                card.cover.style.display = "unset";
            }
            setTimeout(test(card), 10000);
        });
    }
    else {
    }
}
function addOnclicks(card) {
    card.cover.onclick = () => {
        arr.push(card.imageId);
        if (arr.length === 2) {
            check(arr[0], arr[1]);
            arr = [];
        }
        card.imageContainer.style.display = "unset";
        card.cover.style.display = "none";
    };
}

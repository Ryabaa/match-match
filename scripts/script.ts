import { ICard, IImage } from "./interfaces.js";
import { variables, cards, images } from "./variables.js";
import { shuffle } from "./utils.js";

if (variables.gameStateToggler !== null) {
    // Game state toggler
}

let gameState = "not active";

variables.gameStateToggler.onclick = function () {
    if (gameState === "not active") {
        gameState = "active";
    } else {
        gameState = "not active";
    }
    if (gameState === "active") {
        variables.gameStateText.textContent = "Stop";
    } else {
        variables.gameStateText.textContent = "Start";
    }
    //StartStop();
};

//--------------------ClockTimer---------------//

function clocktimer() {
    let sec: any = "00";
    let min: any = "00";

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

function spawnImages(cards: ICard[], images: IImage[]) {
    cards.forEach((card, i) => {
        card.imageContainer!.innerHTML = images[i].image;
        card.imageId = images[i].id;
        addOnclicks(card);
    });
}

let arr: number[] = [];
function check(arr: number[]) {
    if (arr[0] !== arr[1]) {
        variables.gameFieldSubstrate.style.display = "unset";
        cards.forEach((card) => {
            setTimeout(() => {
                //variables.background!.style.display = "unset";
                variables.fail.classList.remove("fail");
                variables.fail.classList.toggle("failVis");
            }, 1000);
            setTimeout(() => {
                card.imageContainer!.style.display = "none";
                card.cover!.style.display = "unset";
                variables.gameFieldSubstrate.style.display = "none";
                //variables.background!.style.display = "none";
                variables.fail.classList.remove("failVis");
                variables.fail.classList.toggle("fail");
            }, 2000);
        });
    }
    if (arr[0] == arr[1]) {
        setTimeout(() => {
            variables.succes.classList.remove("succes");
            variables.succes.classList.toggle("succesVis");
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

function addOnclicks(card: ICard) {
    card.cover!.onclick = () => {
        card.imageContainer!.style.display = "unset";
        card.cover!.style.display = "none";
        arr.push(card.imageId!);
        if (arr.length === 2) {
            check(arr);
            arr = [];
        }
    };
}

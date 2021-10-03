import { ICard, IImage } from "./interfaces.js";
import { variables, cards, images, changeCards } from "./variables.js";
import { shuffle } from "./utils.js";
import { openResultWindow } from "./modals.js";

let stopGame = () => {};

export { stopGame };

if (variables.game !== null) {
    let gameState = false;

    if (variables.gameStateToggler !== null) {
        variables.gameStateToggler.onclick = function () {
            if (gameState === false) {
                gameState = true;
                startGame();
            } else {
                gameState = false;
                variables.gameFieldSubstrate.style.display = "unset";
                stopGame();
            }
            if (gameState === true) {
                variables.gameStateText.textContent = "Stop";
            } else {
                variables.gameStateText.textContent = "Start";
            }
        };
    }

    //--------------------ClockTimer---------------//
    let timer: any = null;
    let time: string = "";
    let sec: any = "00";
    let min: any = "00";

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

    stopGame = () => {
        changeCards();
        clearCards(cards);
        clearTimeout(timer);
        sec = "00";
        min = "00";
        variables.seconds.innerText = sec;
        variables.minutes.innerText = min;
    };

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
            variables.gameFieldSubstrate.style.display = "unset";
            cards.forEach((card) => {
                setTimeout(() => {
                    card.fail!.style.display = "unset";
                    card.failCover!.style.display = "unset";
                }, 700);
                setTimeout(() => {
                    card.imageContainer!.style.display = "none";
                    card.cover!.style.display = "unset";
                    card.fail!.style.display = "none";
                    card.failCover!.style.display = "none";
                    variables.gameFieldSubstrate.style.display = "none";
                }, 1500);
            });
        }
        if (arr[0] == arr[1]) {
            setTimeout(() => {
                card.succes!.style.display = "unset";
                card.succesCover!.style.display = "unset";
                getSucces();
                if (cards.length === 0) {
                    variables.resultName.innerHTML = localStorage.getItem("name");
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
}

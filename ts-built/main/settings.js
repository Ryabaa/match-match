import { game, getGame } from "../variables/game.js";
import { animalsEasy, animalsMedium, fruitsEasy, fruitsMedium } from "../variables/images.js";
function fruitsActive() {
    game.cardTypeBtn_animals.style.background = "none";
    game.cardTypeBtn_animals.style.color = "#b8b8b8";
    game.cardTypeBtn_fruits.style.background = "#2196f3";
    game.cardTypeBtn_fruits.style.color = "#fff";
}
function animalsActive() {
    game.cardTypeBtn_fruits.style.background = "none";
    game.cardTypeBtn_fruits.style.color = "#b8b8b8";
    game.cardTypeBtn_animals.style.background = "#2196f3";
    game.cardTypeBtn_animals.style.color = "#fff";
}
function difficultEasyActive() {
    game.difficultBtn_medium.style.background = "none";
    game.difficultBtn_medium.style.color = "#b8b8b8";
    game.difficultBtn_easy.style.background = "#2196f3";
    game.difficultBtn_easy.style.color = "#fff";
}
function difficultMediumActive() {
    game.difficultBtn_easy.style.background = "none";
    game.difficultBtn_easy.style.color = "#b8b8b8";
    game.difficultBtn_medium.style.background = "#2196f3";
    game.difficultBtn_medium.style.color = "#fff";
}
export function gameSettings() {
    getGame();
    game.cardTypeBtn_fruits.onclick = () => {
        fruitsActive();
        localStorage.setItem("cardType", "Fruits");
    };
    game.cardTypeBtn_animals.onclick = () => {
        animalsActive();
        localStorage.setItem("cardType", "Animals");
    };
    switch (localStorage.getItem("cardType")) {
        case "Animals":
            animalsActive();
            break;
        case "Fruits":
            fruitsActive();
            break;
        default:
            animalsActive();
            localStorage.setItem("cardType", "Animals");
            break;
    }
    game.difficultBtn_easy.onclick = () => {
        localStorage.setItem("difficult", "Easy");
        difficultEasyActive();
    };
    game.difficultBtn_medium.onclick = () => {
        localStorage.setItem("difficult", "Medium");
        difficultMediumActive();
    };
    switch (localStorage.getItem("difficult")) {
        case "Easy":
            difficultEasyActive();
            break;
        case "Medium":
            difficultMediumActive();
            break;
        default:
            difficultEasyActive();
            localStorage.setItem("difficult", "Easy");
            break;
    }
}
export let images = [];
export function getImages() {
    let type = localStorage.getItem("cardType");
    switch (localStorage.getItem("difficult")) {
        case "Easy":
            if (type === "Animals") {
                images = animalsEasy;
            }
            else {
                images = fruitsEasy;
            }
            break;
        case "Medium":
            if (type === "Animals") {
                images = animalsMedium;
            }
            else {
                images = fruitsMedium;
            }
            break;
    }
}

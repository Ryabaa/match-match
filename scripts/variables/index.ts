import { global } from "./global.js";
import { game, getGame } from "./game.js";
import { result } from "./result.js";
import { cards, resetCards, getCards, ICard } from "./cards.js";
import { fruitsEasy, fruitsMedium, animalsEasy, animalsMedium, IImage } from "./images.js";
import { register } from "./register.js";
import { containers, getContainers } from "./containers.js";
import { relink } from "./relink.js";
import { score, getScore } from "./score.js";

export {
    cards,
    getScore,
    game,
    containers,
    fruitsEasy,
    score,
    fruitsMedium,
    animalsEasy,
    relink,
    animalsMedium,
    ICard,
    IImage,
    register,
    getGame,
    getCards,
    resetCards,
    result,
    global,
    getContainers,
};

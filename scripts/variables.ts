import { ICard, IImage } from "./interfaces";

export let variables: any = {
    gameStateToggler: document.getElementById("gameStateToggler"),
    gameStateText: document.getElementById("gameStateText"),
    headerAvatar: document.getElementById("headerAvatar"),
    substrate: document.getElementById("substrate"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    //-------------------------REGISTER WINDOW----------------------------//
    registerWindow: document.getElementById("registerWindow"),
    registerOpen: document.getElementById("registerOpen"),
    registerInput_1: document.getElementById("registerInput_1"),
    registerInput_2: document.getElementById("registerInput_2"),
    registerInput_3: document.getElementById("registerInput_3"),
    registerIconCheck_1: document.getElementById("registerIconCheck_1"),
    registerIconCheck_2: document.getElementById("registerIconCheck_2"),
    registerIconCheck_3: document.getElementById("registerIconCheck_3"),
    registerIconErr_1: document.getElementById("registerIconErr_1"),
    registerIconErr_2: document.getElementById("registerIconErr_2"),
    registerIconErr_3: document.getElementById("registerIconErr_3"),
    registerAvatar: document.getElementById("registerAvatar"),
    registerNoAvatar: document.getElementById("registerNoAvatar"),
    registerUserAvatar: document.getElementById("registerUserAvatar"),
    registerAdd: document.getElementById("registerAdd"),
    registerCancel: document.getElementById("registerCancel"),
};

export let cards: ICard[] = [
    { imageContainer: document.getElementById("gameImage_1"), cover: document.getElementById("backsideCard_1"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_2"), cover: document.getElementById("backsideCard_2"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_3"), cover: document.getElementById("backsideCard_3"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_4"), cover: document.getElementById("backsideCard_4"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_5"), cover: document.getElementById("backsideCard_5"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_6"), cover: document.getElementById("backsideCard_6"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_7"), cover: document.getElementById("backsideCard_7"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_8"), cover: document.getElementById("backsideCard_8"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_9"), cover: document.getElementById("backsideCard_9"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_10"), cover: document.getElementById("backsideCard_10"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_11"), cover: document.getElementById("backsideCard_11"), imageId: undefined },
    { imageContainer: document.getElementById("gameImage_12"), cover: document.getElementById("backsideCard_12"), imageId: undefined },
];

export let images: IImage[] = [
    { image: `<img class="game-field__container-image" src="./assets/images/elephant.png" />`, id: 1 },
    { image: `<img class="game-field__container-image" src="./assets/images/elephant.png" />`, id: 1 },
    { image: `<img class="game-field__container-image" src="./assets/images/bird.png" />`, id: 2 },
    { image: `<img class="game-field__container-image" src="./assets/images/bird.png" />`, id: 2 },
    { image: `<img class="game-field__container-image" src="./assets/images/wolf.png" />`, id: 3 },
    { image: `<img class="game-field__container-image" src="./assets/images/wolf.png" />`, id: 3 },
    { image: `<img class="game-field__container-image" src="./assets/images/lion.png" />`, id: 4 },
    { image: `<img class="game-field__container-image" src="./assets/images/lion.png" />`, id: 4 },
    { image: `<img class="game-field__container-image" src="./assets/images/tiger.png" />`, id: 5 },
    { image: `<img class="game-field__container-image" src="./assets/images/tiger.png" />`, id: 5 },
    { image: `<img class="game-field__container-image" src="./assets/images/pinguin.png" />`, id: 6 },
    { image: `<img class="game-field__container-image" src="./assets/images/pinguin.png" />`, id: 6 },
];

define("interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("variables", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.images = exports.changeCards = exports.cardsDefault = exports.cards = exports.variables = void 0;
    exports.variables = {
        gameStateToggler: document.getElementById("gameStateToggler"),
        gameStateText: document.getElementById("gameStateText"),
        headerAvatar: document.getElementById("headerAvatar"),
        substrate: document.getElementById("substrate"),
        substrate2: document.getElementById("substrate2"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds"),
        registerWindow: document.getElementById("registerWindow"),
        registerOpen: document.getElementById("registerOpen"),
        registerErrText: document.getElementById("registerErrText"),
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
        gameFieldSubstrate: document.getElementById("gameFieldSubstrate"),
        resultWindow: document.getElementById("resultWindow"),
        resultName: document.getElementById("resultName"),
        resultBtn: document.getElementById("resultBtn"),
        resultTime1: document.getElementById("resultTime1"),
        resultTime2: document.getElementById("resultTime2"),
        gameField: document.getElementById("game-field"),
        main: document.getElementById("main"),
        canvas: document.getElementById("canvas"),
        navLinkGame: document.getElementById("navLinkGame"),
        navLinkAbout: document.getElementById("navLinkAbout"),
        navLinkScore: document.getElementById("navLinkScore"),
        navLinkSettings: document.getElementById("navLinkSettings"),
    };
    exports.cards = [
        {
            imageContainer: document.getElementById("gameImage_1"),
            cover: document.getElementById("backsideCard_1"),
            imageId: null,
            succes: document.getElementById("succes1"),
            fail: document.getElementById("fail1"),
            succesCover: document.getElementById("succesCover1"),
            failCover: document.getElementById("failCover1"),
        },
        {
            imageContainer: document.getElementById("gameImage_2"),
            cover: document.getElementById("backsideCard_2"),
            imageId: null,
            succes: document.getElementById("succes2"),
            fail: document.getElementById("fail2"),
            succesCover: document.getElementById("succesCover2"),
            failCover: document.getElementById("failCover2"),
        },
        {
            imageContainer: document.getElementById("gameImage_3"),
            cover: document.getElementById("backsideCard_3"),
            imageId: null,
            succes: document.getElementById("succes3"),
            fail: document.getElementById("fail3"),
            succesCover: document.getElementById("succesCover3"),
            failCover: document.getElementById("failCover3"),
        },
        {
            imageContainer: document.getElementById("gameImage_4"),
            cover: document.getElementById("backsideCard_4"),
            imageId: null,
            succes: document.getElementById("succes4"),
            fail: document.getElementById("fail4"),
            succesCover: document.getElementById("succesCover4"),
            failCover: document.getElementById("failCover4"),
        },
        {
            imageContainer: document.getElementById("gameImage_5"),
            cover: document.getElementById("backsideCard_5"),
            imageId: null,
            succes: document.getElementById("succes5"),
            fail: document.getElementById("fail5"),
            succesCover: document.getElementById("succesCover5"),
            failCover: document.getElementById("failCover5"),
        },
        {
            imageContainer: document.getElementById("gameImage_6"),
            cover: document.getElementById("backsideCard_6"),
            imageId: null,
            succes: document.getElementById("succes6"),
            fail: document.getElementById("fail6"),
            succesCover: document.getElementById("succesCover6"),
            failCover: document.getElementById("failCover6"),
        },
        {
            imageContainer: document.getElementById("gameImage_7"),
            cover: document.getElementById("backsideCard_7"),
            imageId: null,
            succes: document.getElementById("succes7"),
            fail: document.getElementById("fail7"),
            succesCover: document.getElementById("succesCover7"),
            failCover: document.getElementById("failCover7"),
        },
        {
            imageContainer: document.getElementById("gameImage_8"),
            cover: document.getElementById("backsideCard_8"),
            imageId: null,
            succes: document.getElementById("succes8"),
            fail: document.getElementById("fail8"),
            succesCover: document.getElementById("succesCover8"),
            failCover: document.getElementById("failCover8"),
        },
        {
            imageContainer: document.getElementById("gameImage_9"),
            cover: document.getElementById("backsideCard_9"),
            imageId: null,
            succes: document.getElementById("succes9"),
            fail: document.getElementById("fail9"),
            succesCover: document.getElementById("succesCover9"),
            failCover: document.getElementById("failCover9"),
        },
        {
            imageContainer: document.getElementById("gameImage_10"),
            cover: document.getElementById("backsideCard_10"),
            imageId: null,
            succes: document.getElementById("succes10"),
            fail: document.getElementById("fail10"),
            succesCover: document.getElementById("succesCover10"),
            failCover: document.getElementById("failCover10"),
        },
        {
            imageContainer: document.getElementById("gameImage_11"),
            cover: document.getElementById("backsideCard_11"),
            imageId: null,
            succes: document.getElementById("succes11"),
            fail: document.getElementById("fail11"),
            succesCover: document.getElementById("succesCover11"),
            failCover: document.getElementById("failCover11"),
        },
        {
            imageContainer: document.getElementById("gameImage_12"),
            cover: document.getElementById("backsideCard_12"),
            imageId: null,
            succes: document.getElementById("succes12"),
            fail: document.getElementById("fail12"),
            succesCover: document.getElementById("succesCover12"),
            failCover: document.getElementById("failCover12"),
        },
    ];
    exports.cardsDefault = [
        {
            imageContainer: document.getElementById("gameImage_1"),
            cover: document.getElementById("backsideCard_1"),
            imageId: null,
            succes: document.getElementById("succes1"),
            fail: document.getElementById("fail1"),
            succesCover: document.getElementById("succesCover1"),
            failCover: document.getElementById("failCover1"),
        },
        {
            imageContainer: document.getElementById("gameImage_2"),
            cover: document.getElementById("backsideCard_2"),
            imageId: null,
            succes: document.getElementById("succes2"),
            fail: document.getElementById("fail2"),
            succesCover: document.getElementById("succesCover2"),
            failCover: document.getElementById("failCover2"),
        },
        {
            imageContainer: document.getElementById("gameImage_3"),
            cover: document.getElementById("backsideCard_3"),
            imageId: null,
            succes: document.getElementById("succes3"),
            fail: document.getElementById("fail3"),
            succesCover: document.getElementById("succesCover3"),
            failCover: document.getElementById("failCover3"),
        },
        {
            imageContainer: document.getElementById("gameImage_4"),
            cover: document.getElementById("backsideCard_4"),
            imageId: null,
            succes: document.getElementById("succes4"),
            fail: document.getElementById("fail4"),
            succesCover: document.getElementById("succesCover4"),
            failCover: document.getElementById("failCover4"),
        },
        {
            imageContainer: document.getElementById("gameImage_5"),
            cover: document.getElementById("backsideCard_5"),
            imageId: null,
            succes: document.getElementById("succes5"),
            fail: document.getElementById("fail5"),
            succesCover: document.getElementById("succesCover5"),
            failCover: document.getElementById("failCover5"),
        },
        {
            imageContainer: document.getElementById("gameImage_6"),
            cover: document.getElementById("backsideCard_6"),
            imageId: null,
            succes: document.getElementById("succes6"),
            fail: document.getElementById("fail6"),
            succesCover: document.getElementById("succesCover6"),
            failCover: document.getElementById("failCover6"),
        },
        {
            imageContainer: document.getElementById("gameImage_7"),
            cover: document.getElementById("backsideCard_7"),
            imageId: null,
            succes: document.getElementById("succes7"),
            fail: document.getElementById("fail7"),
            succesCover: document.getElementById("succesCover7"),
            failCover: document.getElementById("failCover7"),
        },
        {
            imageContainer: document.getElementById("gameImage_8"),
            cover: document.getElementById("backsideCard_8"),
            imageId: null,
            succes: document.getElementById("succes8"),
            fail: document.getElementById("fail8"),
            succesCover: document.getElementById("succesCover8"),
            failCover: document.getElementById("failCover8"),
        },
        {
            imageContainer: document.getElementById("gameImage_9"),
            cover: document.getElementById("backsideCard_9"),
            imageId: null,
            succes: document.getElementById("succes9"),
            fail: document.getElementById("fail9"),
            succesCover: document.getElementById("succesCover9"),
            failCover: document.getElementById("failCover9"),
        },
        {
            imageContainer: document.getElementById("gameImage_10"),
            cover: document.getElementById("backsideCard_10"),
            imageId: null,
            succes: document.getElementById("succes10"),
            fail: document.getElementById("fail10"),
            succesCover: document.getElementById("succesCover10"),
            failCover: document.getElementById("failCover10"),
        },
        {
            imageContainer: document.getElementById("gameImage_11"),
            cover: document.getElementById("backsideCard_11"),
            imageId: null,
            succes: document.getElementById("succes11"),
            fail: document.getElementById("fail11"),
            succesCover: document.getElementById("succesCover11"),
            failCover: document.getElementById("failCover11"),
        },
        {
            imageContainer: document.getElementById("gameImage_12"),
            cover: document.getElementById("backsideCard_12"),
            imageId: null,
            succes: document.getElementById("succes12"),
            fail: document.getElementById("fail12"),
            succesCover: document.getElementById("succesCover12"),
            failCover: document.getElementById("failCover12"),
        },
    ];
    function changeCards() {
        return (exports.cards = exports.cardsDefault);
    }
    exports.changeCards = changeCards;
    exports.images = [
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
});
define("utils", ["require", "exports", "modals", "variables"], function (require, exports, modals_js_1, variables_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addAccountBlock = exports.checkMail = exports.shuffle = void 0;
    function shuffle(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }
    exports.shuffle = shuffle;
    function checkMail() {
        let mail = variables_js_1.variables.registerInput_3.value;
        let dog = mail.indexOf("@");
        let errText = variables_js_1.variables.registerErrText;
        if (mail == "") {
            errText.innerHTML = "Введите Адрес электронной почты";
            return false;
        }
        else if (mail.indexOf(".") == -1) {
            errText.innerHTML = 'Нет символа"."';
            return false;
        }
        else if (mail.indexOf(",") >= 0 || mail.indexOf(";") >= 0 || mail.indexOf(" ") >= 0) {
            errText.innerHTML = "Адрес электронной почты был введен неправильно";
            return false;
        }
        else if (dog == -1) {
            errText.innerHTML = 'Нет символа"@"';
            return false;
        }
        else if (dog < 1 || dog > mail.length - 5) {
            errText.innerHTML = "Адрес электронной почты был введен неправильно";
            return false;
        }
        else if (mail.charAt(dog - 1) == "." || mail.charAt(dog + 1) == ".") {
            errText.innerHTML = "Адрес электронной почты был введен неправильно";
            return false;
        }
        else {
            return true;
        }
    }
    exports.checkMail = checkMail;
    function addAccountBlock() {
        if (modals_js_1.name && modals_js_1.lastname && modals_js_1.email && modals_js_1.ava !== null) {
            localStorage.setItem("name", modals_js_1.name);
            localStorage.setItem("lastname", modals_js_1.lastname);
            localStorage.setItem("email", modals_js_1.email);
            localStorage.setItem("ava", modals_js_1.ava);
        }
    }
    exports.addAccountBlock = addAccountBlock;
});
/* let name: any = localStorage.getItem("name");
let password: any = localStorage.getItem("password");
let email: any = localStorage.getItem("email"); */
define("script", ["require", "exports", "variables", "utils", "modals"], function (require, exports, variables_js_2, utils_js_1, modals_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stopGame = void 0;
    let gameState = false;
    variables_js_2.variables.gameStateToggler.onclick = function () {
        if (gameState === false) {
            gameState = true;
            startGame();
        }
        else {
            gameState = false;
            variables_js_2.variables.gameFieldSubstrate.style.display = "unset";
            stopGame();
        }
        if (gameState === true) {
            variables_js_2.variables.gameStateText.textContent = "Stop";
        }
        else {
            variables_js_2.variables.gameStateText.textContent = "Start";
        }
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
            variables_js_2.variables.seconds.innerText = sec;
            variables_js_2.variables.minutes.innerText = min;
            time = `${min}:${sec}`;
        }, 1000);
    }
    //------------Game----------------//
    function startGame() {
        spawnImages(variables_js_2.cards, utils_js_1.shuffle(variables_js_2.images));
        clocktimer();
        variables_js_2.variables.gameFieldSubstrate.style.display = "none";
    }
    function stopGame() {
        variables_js_2.changeCards();
        clearCards(variables_js_2.cards);
        clearTimeout(timer);
        sec = "00";
        min = "00";
        variables_js_2.variables.seconds.innerText = sec;
        variables_js_2.variables.minutes.innerText = min;
    }
    exports.stopGame = stopGame;
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
            variables_js_2.variables.gameFieldSubstrate.style.display = "unset";
            variables_js_2.cards.forEach((card) => {
                setTimeout(() => {
                    card.fail.style.display = "unset";
                    card.failCover.style.display = "unset";
                }, 700);
                setTimeout(() => {
                    card.imageContainer.style.display = "none";
                    card.cover.style.display = "unset";
                    card.fail.style.display = "none";
                    card.failCover.style.display = "none";
                    variables_js_2.variables.gameFieldSubstrate.style.display = "none";
                }, 1500);
            });
        }
        if (arr[0] == arr[1]) {
            setTimeout(() => {
                card.succes.style.display = "unset";
                card.succesCover.style.display = "unset";
                getSucces();
                if (variables_js_2.cards.length === 0) {
                    variables_js_2.variables.resultName.innerHTML = localStorage.getItem("name");
                    variables_js_2.variables.resultTime1.innerHTML = time;
                    variables_js_2.variables.resultTime2.innerHTML = time;
                    clearTimeout(timer);
                    modals_js_2.openResultWindow();
                }
            }, 1000);
            let index1 = variables_js_2.cards.findIndex((n) => n.imageId === arr[0]);
            if (index1 !== -1) {
                variables_js_2.cards.splice(index1, 1);
            }
            let index2 = variables_js_2.cards.findIndex((n) => n.imageId === arr[1]);
            if (index2 !== -1) {
                variables_js_2.cards.splice(index2, 1);
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
});
define("modals", ["require", "exports", "variables", "script", "utils"], function (require, exports, variables_js_3, script_js_1, utils_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.openResultWindow = exports.ava = exports.email = exports.lastname = exports.name = void 0;
    if (variables_js_3.variables.registerOpen !== null) {
        variables_js_3.variables.registerOpen.onclick = function () {
            variables_js_3.variables.registerWindow.classList.toggle("register-visible");
            variables_js_3.variables.substrate.classList.toggle("substrate-visible");
        };
    }
    let name = null;
    exports.name = name;
    let lastname = null;
    exports.lastname = lastname;
    let email = null;
    exports.email = email;
    let ava = null;
    exports.ava = ava;
    let reg = localStorage.getItem("registration");
    if (reg !== "done") {
        variables_js_3.variables.registerAdd.onclick = function () {
            function checkRegisterInputs() {
                let input_1 = false;
                let input_2 = false;
                let input_3 = false;
                if (variables_js_3.variables.registerInput_1.value.length < 2) {
                    variables_js_3.variables.registerIconErr_1.style.display = "flex";
                    variables_js_3.variables.registerIconCheck_1.style.display = "none";
                }
                else {
                    variables_js_3.variables.registerIconCheck_1.style.display = "unset";
                    variables_js_3.variables.registerIconErr_1.style.display = "none";
                    input_1 = true;
                }
                if (variables_js_3.variables.registerInput_2.value.length < 2) {
                    variables_js_3.variables.registerIconErr_2.style.display = "flex";
                    variables_js_3.variables.registerIconCheck_2.style.display = "none";
                }
                else {
                    variables_js_3.variables.registerIconCheck_2.style.display = "unset";
                    variables_js_3.variables.registerIconErr_2.style.display = "none";
                    input_2 = true;
                }
                if (utils_js_2.checkMail() === false) {
                    variables_js_3.variables.registerIconErr_3.style.display = "flex";
                    variables_js_3.variables.registerIconCheck_3.style.display = "none";
                }
                else {
                    variables_js_3.variables.registerIconCheck_3.style.display = "unset";
                    variables_js_3.variables.registerIconErr_3.style.display = "none";
                    input_3 = true;
                }
                if (input_1 && input_2 && input_3 === true) {
                    exports.name = name = variables_js_3.variables.registerInput_1.value;
                    exports.lastname = lastname = variables_js_3.variables.registerInput_2.value;
                    exports.email = email = variables_js_3.variables.registerInput_3.value;
                    utils_js_2.addAccountBlock();
                    return true;
                }
            }
            if (checkRegisterInputs() === true) {
                localStorage.setItem("registration", "done");
                variables_js_3.variables.headerAvatar.src = ava;
                variables_js_3.variables.registerWindow.classList.remove("register-visible");
                variables_js_3.variables.substrate.classList.remove("substrate-visible");
                variables_js_3.variables.gameStateToggler.style.display = "unset";
                variables_js_3.variables.headerAvatar.style.display = "unset";
                variables_js_3.variables.registerOpen.style.display = "none";
            }
        };
        variables_js_3.variables.registerCancel.onclick = function () {
            variables_js_3.variables.registerWindow.classList.remove("register-visible");
            variables_js_3.variables.substrate.classList.remove("substrate-visible");
        };
        let avatar = false;
        variables_js_3.variables.registerAvatar.onchange = function () {
            let file = variables_js_3.variables.registerAvatar.files[0];
            if (file) {
                exports.ava = ava = URL.createObjectURL(file);
                variables_js_3.variables.registerUserAvatar.src = ava;
            }
            variables_js_3.variables.registerUserAvatar.style.display = "unset";
            variables_js_3.variables.registerNoAvatar.style.display = "none";
            avatar = true;
        };
        if (avatar === false) {
            exports.ava = ava = "./assets/icons/no-avatar.svg";
        }
    }
    else {
        variables_js_3.variables.headerAvatar.src = localStorage.getItem("ava");
        variables_js_3.variables.gameStateToggler.style.display = "unset";
        variables_js_3.variables.headerAvatar.style.display = "unset";
        variables_js_3.variables.registerOpen.style.display = "none";
    }
    variables_js_3.variables.substrate.onclick = function () {
        variables_js_3.variables.substrate.classList.remove("substrate-visible");
        variables_js_3.variables.registerWindow.classList.remove("register-visible");
    };
    //-------Result Window-------//
    let openResultWindow = () => {
        if (variables_js_3.cards.length === 0) {
            variables_js_3.variables.substrate2.classList.toggle("substrate-visible");
            variables_js_3.variables.resultWindow.classList.toggle("result-visible");
        }
    };
    exports.openResultWindow = openResultWindow;
    variables_js_3.variables.resultBtn.onclick = function () {
        variables_js_3.variables.resultWindow.classList.remove("result-visible");
        variables_js_3.variables.substrate2.classList.remove("substrate-visible");
        script_js_1.stopGame();
    };
});
define("pages", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pages = void 0;
    exports.pages = {
        game: `<section id="game" class="game">
            <div id="gameFieldSubstrate"></div>
            <div class="game-time">
                <div id="minutes">00</div>
                :
                <div id="seconds">00</div>
            </div>
            <div class="game-field">
                <div class="game-field__container" id="gameContainer_1">
                    <div class="game-field__container-image" id="gameImage_1"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover1"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover1"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail1" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes1" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_1" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_2">
                    <div class="game-field__container-image" id="gameImage_2"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover2"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover2"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail2" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes2" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_2" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_3">
                    <div class="game-field__container-image" id="gameImage_3"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover3"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover3"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail3" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes3" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_3" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_4">
                    <div class="game-field__container-image" id="gameImage_4"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover4"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover4"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail4" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes4" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_4" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_5">
                    <div class="game-field__container-image" id="gameImage_5"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover5"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover5"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail5" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes5" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_5" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_6">
                    <div class="game-field__container-image" id="gameImage_6"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover6"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover6"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail6" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes6" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_6" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_7">
                    <div class="game-field__container-image" id="gameImage_7"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover7"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover7"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail7" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes7" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_7" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_8">
                    <div class="game-field__container-image" id="gameImage_8"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover8"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover8"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail8" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes8" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_8" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_9">
                    <div class="game-field__container-image" id="gameImage_9"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover9"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover9"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail9" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes9" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_9" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_10">
                    <div class="game-field__container-image" id="gameImage_10"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover10"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover10"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail10" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes10" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_10" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_11">
                    <div class="game-field__container-image" id="gameImage_11"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover11"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover11"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail11" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes11" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_11" src="./assets/images/card-top.png" />
                </div>
                <div class="game-field__container" id="gameContainer_12">
                    <div class="game-field__container-image" id="gameImage_12"></div>
                    <div class="game-field__container-background game-field__container-backgroundRed" id="failCover12"></div>
                    <div class="game-field__container-background game-field__container-backgroundGreen" id="succesCover12"></div>
                    <img src="./assets/icons/cross.png" alt="" id="fail12" class="failHide gameImageStateIcon" />
                    <img src="./assets/icons/check.png" alt="" id="succes12" class="succesHide gameImageStateIcon" />
                    <img class="cardCover" id="backsideCard_12" src="./assets/images/card-top.png" />
                </div>
            </div>
        </section>`,
        about: ``,
        score: ``,
        settings: ``,
    };
});
define("router", ["require", "exports", "variables", "pages"], function (require, exports, variables_js_4, pages_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    switch (location.hash) {
        case "#game":
            variables_js_4.variables.main.innerHTML = pages_js_1.pages.game;
            variables_js_4.variables.navLinkGame.style.background = "#2F80ED";
            break;
        case "#about":
            variables_js_4.variables.main.innerHTML = "about";
            variables_js_4.variables.navLinkAbout.style.background = "#2F80ED";
            break;
        case "#score":
            variables_js_4.variables.main.innerHTML = "score";
            variables_js_4.variables.navLinkScore.style.background = "#2F80ED";
            break;
        case "#settings":
            variables_js_4.variables.main.innerHTML = "settings";
            variables_js_4.variables.navLinkSettings.style.background = "#2F80ED";
            break;
        default:
            location.hash = "#game";
    }
    window.onhashchange = function () {
        window.location.reload();
    };
});

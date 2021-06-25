import variables from "./variables.js";
if (variables.gameStateToggler !== null) {
    // Game state toggler
}
if (variables.registerOpen !== null) {
    variables.registerOpen.onclick = function () {
        variables.registerWindow.classList.toggle("register-visible");
        variables.substrate.classList.remove("substrate-hidden");
        variables.substrate.classList.toggle("substrate-visible");
    };
}
variables.registerAdd.onclick = function () {
    function checkRegisterInputs() {
        let input_1 = false;
        let input_2 = false;
        let input_3 = false;
        if (variables.registerInput_1.value.length < 2) {
            variables.registerIconErr_1.style.display = "flex";
            variables.registerIconCheck_1.style.display = "none";
        }
        else {
            variables.registerIconCheck_1.style.display = "unset";
            variables.registerIconErr_1.style.display = "none";
            input_1 = true;
        }
        if (variables.registerInput_2.value.length < 2) {
            variables.registerIconErr_2.style.display = "flex";
            variables.registerIconCheck_2.style.display = "none";
        }
        else {
            variables.registerIconCheck_2.style.display = "unset";
            variables.registerIconErr_2.style.display = "none";
            input_2 = true;
        }
        if (variables.registerInput_3.value.length < 2) {
            variables.registerIconErr_3.style.display = "flex";
            variables.registerIconCheck_3.style.display = "none";
        }
        else {
            variables.registerIconCheck_3.style.display = "unset";
            variables.registerIconErr_3.style.display = "none";
            input_3 = true;
        }
        if (input_1 && input_2 && input_3 === true) {
            return true;
        }
    }
    if (checkRegisterInputs() === true) {
        variables.registerWindow.classList.remove("register-visible");
        variables.substrate.classList.toggle("substrate-hidden");
        variables.gameStateToggler.style.display = "unset";
        variables.headerAvatar.style.display = "unset";
        variables.registerOpen.style.display = "none";
    }
};
variables.registerCancel.onclick = function () {
    variables.registerWindow.classList.remove("register-visible");
    variables.substrate.classList.toggle("substrate-hidden");
};
let avatar = "default";
variables.registerAvatar.onchange = function () {
    let file = variables.registerAvatar.files[0];
    if (file) {
        variables.registerUserAvatar.src = URL.createObjectURL(file);
        variables.headerAvatar.src = URL.createObjectURL(file);
        localStorage.setItem("myImage", variables.registerUserAvatar.src);
    }
    variables.registerUserAvatar.style.display = "unset";
    variables.registerNoAvatar.style.display = "none";
    avatar = "custom";
};
if (avatar === "default") {
    variables.headerAvatar.src = "./assets/icons/no-avatar.svg";
}
variables.substrate.onclick = function () {
    variables.substrate.classList.toggle("substrate-hidden");
    variables.registerWindow.classList.remove("register-visible");
    //variables.resultWindow.classList.remove("result-visible");
};
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
    spawnImages(shuffle(imagesArr));
    clocktimer();
};
let image_1 = `<img class="game-field__container-image" src="./assets/images/elephant.png" />`;
let image_2 = `<img class="game-field__container-image" src="./assets/images/elephant.png" />`;
let image_3 = `<img class="game-field__container-image" src="./assets/images/bird.png" />`;
let image_4 = `<img class="game-field__container-image" src="./assets/images/bird.png" />`;
let image_5 = `<img class="game-field__container-image" src="./assets/images/wolf.png" />`;
let image_6 = `<img class="game-field__container-image" src="./assets/images/wolf.png" />`;
let image_7 = `<img class="game-field__container-image" src="./assets/images/lion.png" />`;
let image_8 = `<img class="game-field__container-image" src="./assets/images/lion.png" />`;
let image_9 = `<img class="game-field__container-image" src="./assets/images/tiger.png" />`;
let image_10 = `<img class="game-field__container-image" src="./assets/images/tiger.png" />`;
let image_11 = `<img class="game-field__container-image" src="./assets/images/pinguin.png" />`;
let image_12 = `<img class="game-field__container-image" src="./assets/images/pinguin.png" />`;
let imagesArr = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11, image_12];
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
function spawnImages(arr) {
    variables.gameImage_1.innerHTML = arr[0];
    variables.gameImage_2.innerHTML = arr[1];
    variables.gameImage_3.innerHTML = arr[2];
    variables.gameImage_4.innerHTML = arr[3];
    variables.gameImage_5.innerHTML = arr[4];
    variables.gameImage_6.innerHTML = arr[5];
    variables.gameImage_7.innerHTML = arr[6];
    variables.gameImage_8.innerHTML = arr[7];
    variables.gameImage_9.innerHTML = arr[8];
    variables.gameImage_10.innerHTML = arr[9];
    variables.gameImage_11.innerHTML = arr[10];
    variables.gameImage_12.innerHTML = arr[11];
}
variables.gameImage_1.onclick = function () {
    variables.gameImage_1.style.display = "none";
    variables.backsideCard_1.style.display = "unset";
};
variables.backsideCard_1.onclick = function () {
    variables.gameImage_1.style.display = "unset";
    variables.backsideCard_1.style.display = "none";
};
variables.gameImage_2.onclick = function () {
    variables.gameImage_2.style.display = "none";
    variables.backsideCard_2.style.display = "unset";
};
variables.backsideCard_2.onclick = function () {
    variables.gameImage_2.style.display = "unset";
    variables.backsideCard_2.style.display = "none";
};
variables.gameImage_3.onclick = function () {
    variables.gameImage_3.style.display = "none";
    variables.backsideCard_3.style.display = "unset";
};
variables.backsideCard_3.onclick = function () {
    variables.gameImage_3.style.display = "unset";
    variables.backsideCard_3.style.display = "none";
};
variables.gameImage_4.onclick = function () {
    variables.gameImage_4.style.display = "none";
    variables.backsideCard_4.style.display = "unset";
};
variables.backsideCard_4.onclick = function () {
    variables.gameImage_4.style.display = "unset";
    variables.backsideCard_4.style.display = "none";
};
variables.gameImage_5.onclick = function () {
    variables.gameImage_5.style.display = "none";
    variables.backsideCard_5.style.display = "unset";
};
variables.backsideCard_5.onclick = function () {
    variables.gameImage_5.style.display = "unset";
    variables.backsideCard_5.style.display = "none";
};
variables.gameImage_6.onclick = function () {
    variables.gameImage_6.style.display = "none";
    variables.backsideCard_6.style.display = "unset";
};
variables.backsideCard_6.onclick = function () {
    variables.gameImage_6.style.display = "unset";
    variables.backsideCard_6.style.display = "none";
};
variables.gameImage_7.onclick = function () {
    variables.gameImage_7.style.display = "none";
    variables.backsideCard_7.style.display = "unset";
};
variables.backsideCard_7.onclick = function () {
    variables.gameImage_7.style.display = "unset";
    variables.backsideCard_7.style.display = "none";
};
variables.gameImage_8.onclick = function () {
    variables.gameImage_8.style.display = "none";
    variables.backsideCard_8.style.display = "unset";
};
variables.backsideCard_8.onclick = function () {
    variables.gameImage_8.style.display = "unset";
    variables.backsideCard_8.style.display = "none";
};
variables.gameImage_9.onclick = function () {
    variables.gameImage_9.style.display = "none";
    variables.backsideCard_9.style.display = "unset";
};
variables.backsideCard_9.onclick = function () {
    variables.gameImage_9.style.display = "unset";
    variables.backsideCard_9.style.display = "none";
};
variables.gameImage_10.onclick = function () {
    variables.gameImage_10.style.display = "none";
    variables.backsideCard_10.style.display = "unset";
};
variables.backsideCard_10.onclick = function () {
    variables.gameImage_10.style.display = "unset";
    variables.backsideCard_10.style.display = "none";
};
variables.gameImage_11.onclick = function () {
    variables.gameImage_11.style.display = "none";
    variables.backsideCard_11.style.display = "unset";
};
variables.backsideCard_11.onclick = function () {
    variables.gameImage_11.style.display = "unset";
    variables.backsideCard_11.style.display = "none";
};
variables.gameImage_12.onclick = function () {
    variables.gameImage_12.style.display = "none";
    variables.backsideCard_12.style.display = "unset";
};
variables.backsideCard_12.onclick = function () {
    variables.gameImage_12.style.display = "unset";
    variables.backsideCard_12.style.display = "none";
};

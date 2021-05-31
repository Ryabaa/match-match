"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var variables_1 = __importDefault(require("./variables"));
if (variables_1.default.gameStateToggler !== null) {
    // Game state toggler
}
if (variables_1.default.registerOpen !== null) {
    variables_1.default.registerOpen.onclick = function () {
        variables_1.default.registerWindow.classList.toggle("register-visible");
        variables_1.default.substrate.classList.remove("substrate-hidden");
        variables_1.default.substrate.classList.toggle("substrate-visible");
    };
}
variables_1.default.registerAdd.onclick = function () {
    function checkRegisterInputs() {
        var input_1 = false;
        var input_2 = false;
        var input_3 = false;
        if (variables_1.default.registerInput_1.value.length < 2) {
            variables_1.default.registerIconErr_1.style.display = "flex";
            variables_1.default.registerIconCheck_1.style.display = "none";
        }
        else {
            variables_1.default.registerIconCheck_1.style.display = "unset";
            variables_1.default.registerIconErr_1.style.display = "none";
            input_1 = true;
        }
        if (variables_1.default.registerInput_2.value.length < 2) {
            variables_1.default.registerIconErr_2.style.display = "flex";
            variables_1.default.registerIconCheck_2.style.display = "none";
        }
        else {
            variables_1.default.registerIconCheck_2.style.display = "unset";
            variables_1.default.registerIconErr_2.style.display = "none";
            input_2 = true;
        }
        if (variables_1.default.registerInput_3.value.length < 2) {
            variables_1.default.registerIconErr_3.style.display = "flex";
            variables_1.default.registerIconCheck_3.style.display = "none";
        }
        else {
            variables_1.default.registerIconCheck_3.style.display = "unset";
            variables_1.default.registerIconErr_3.style.display = "none";
            input_3 = true;
        }
        if (input_1 && input_2 && input_3 === true) {
            return true;
        }
    }
    if (checkRegisterInputs() === true) {
        variables_1.default.registerWindow.classList.remove("register-visible");
        variables_1.default.substrate.classList.toggle("substrate-hidden");
        variables_1.default.gameStateToggler.style.display = "unset";
        variables_1.default.headerAvatar.style.display = "unset";
        variables_1.default.registerOpen.style.display = "none";
    }
};
variables_1.default.registerCancel.onclick = function () {
    variables_1.default.registerWindow.classList.remove("register-visible");
    variables_1.default.substrate.classList.toggle("substrate-hidden");
};
var avatar = "default";
variables_1.default.registerAvatar.onchange = function () {
    var file = variables_1.default.registerAvatar.files[0];
    if (file) {
        variables_1.default.registerUserAvatar.src = URL.createObjectURL(file);
        variables_1.default.headerAvatar.src = URL.createObjectURL(file);
        localStorage.setItem("myImage", variables_1.default.registerUserAvatar.src);
    }
    variables_1.default.registerUserAvatar.style.display = "unset";
    variables_1.default.registerNoAvatar.style.display = "none";
    avatar = "custom";
};
if (avatar === "default") {
    variables_1.default.headerAvatar.src = "./assets/icons/no-avatar.svg";
}
variables_1.default.substrate.onclick = function () {
    variables_1.default.substrate.classList.toggle("substrate-hidden");
    variables_1.default.registerWindow.classList.remove("register-visible");
    //variables.resultWindow.classList.remove("result-visible");
};
var gameState = "not active";
variables_1.default.gameStateToggler.onclick = function () {
    if (gameState === "not active") {
        gameState = "active";
    }
    else {
        gameState = "not active";
    }
    if (gameState === "active") {
        variables_1.default.gameStateText.textContent = "Stop";
    }
    else {
        variables_1.default.gameStateText.textContent = "Start";
    }
    //StartStop();
};
//--------------------ClockTimer---------------//
window.onload = function () {
    StartStop();
};
var base = 60;
var clocktimer, dateObj, dm, ds, ms;
var readout = "";
var h = 1, m = 1, tm = 1, s = 0, ts = 0, ms = 0, init = 0;
function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = "00:00:00";
    document.MyForm.stopwatch.value = readout;
}
function StartTIME() {
    var cdateObj = new Date();
    var t = cdateObj.getTime() - dateObj.getTime() - s * 1000;
    if (t > 999) {
        s++;
    }
    if (s >= m * base) {
        ts = 0;
        m++;
    }
    else {
        ts = parseInt(ms / 100 + s);
        if (ts >= base) {
            ts = ts - (m - 1) * base;
        }
    }
    if (m > h * base) {
        tm = 1;
        h++;
    }
    else {
        tm = parseInt(ms / 100 + m);
        if (tm >= base) {
            tm = tm - (h - 1) * base;
        }
    }
    ms = Math.round(t / 10);
    if (ms > 99) {
        ms = 0;
    }
    if (ms == 0) {
        ms = "00";
    }
    if (ms > 0 && ms <= 9) {
        ms = "0" + ms;
    }
    if (ts > 0) {
        ds = ts;
        if (ts < 10) {
            ds = "0" + ts;
        }
    }
    else {
        ds = "00";
    }
    dm = tm - 1;
    if (dm > 0) {
        if (dm < 10) {
            dm = "0" + dm;
        }
    }
    else {
        dm = "00";
    }
    readout = dm + ":" + ds;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout(StartTIME, 1);
}
function StartStop() {
    if (init == 0) {
        ClearСlock();
        dateObj = new Date();
        StartTIME();
        init = 1;
    }
    else {
        clearTimeout(clocktimer);
        init = 0;
    }
}
//------------Game----------------//
window.onload = function () {
    console.log(getRandomImages());
    spawnImages();
};
function getRandomImages() {
    for (var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], i = a.length; i--;) {
        var randIndex = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        switch (randIndex) {
            case 1:
                console.log(2);
                break;
            case 2:
                console.log("kek");
                break;
        }
    }
}
function spawnImages() { }

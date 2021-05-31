import variables from "./variables";

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
        } else {
            variables.registerIconCheck_1.style.display = "unset";
            variables.registerIconErr_1.style.display = "none";
            input_1 = true;
        }
        if (variables.registerInput_2.value.length < 2) {
            variables.registerIconErr_2.style.display = "flex";
            variables.registerIconCheck_2.style.display = "none";
        } else {
            variables.registerIconCheck_2.style.display = "unset";
            variables.registerIconErr_2.style.display = "none";
            input_2 = true;
        }
        if (variables.registerInput_3.value.length < 2) {
            variables.registerIconErr_3.style.display = "flex";
            variables.registerIconCheck_3.style.display = "none";
        } else {
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

window.onload = function () {
    StartStop();
};

var base = 60;
var clocktimer, dateObj, dm, ds, ms;
var readout = "";
var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;

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
    } else {
        ts = parseInt(ms / 100 + s);
        if (ts >= base) {
            ts = ts - (m - 1) * base;
        }
    }
    if (m > h * base) {
        tm = 1;
        h++;
    } else {
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
    } else {
        ds = "00";
    }
    dm = tm - 1;
    if (dm > 0) {
        if (dm < 10) {
            dm = "0" + dm;
        }
    } else {
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
    } else {
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
    for (let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], i = a.length; i--; ) {
        let randIndex = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
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

function spawnImages() {}

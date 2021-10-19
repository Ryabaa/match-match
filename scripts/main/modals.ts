import { gameState, stopGame } from "./game.js";
import { game, result, global, relink, register, getGame } from "../variables/index.js";
import { checkMail } from "../utils/validate.js";

if (register.open !== null) {
    register.open.onclick = function () {
        getGame();
        register.window!.classList.toggle("register-visible");
        game.substrate2!.classList.toggle("substrate-visible");
    };
}

let name: any = null;
let lastname: any = null;
let email: any = null;

export { name, lastname, email };

let reg = localStorage.getItem("registration");

if (reg !== "done") {
    register.add!.onclick = function () {
        function checkregister() {
            let input_1 = false;
            let input_2 = false;
            let input_3 = false;

            if (register.input_1.value.length < 2) {
                register.iconErr_1!.style.display = "flex";
                register.iconCheck_1!.style.display = "none";
            } else {
                register.iconCheck_1!.style.display = "unset";
                register.iconErr_1!.style.display = "none";
                input_1 = true;
            }
            if (register.input_2.value.length < 2) {
                register.iconErr_2!.style.display = "flex";
                register.iconCheck_2!.style.display = "none";
            } else {
                register.iconCheck_2!.style.display = "unset";
                register.iconErr_2!.style.display = "none";
                input_2 = true;
            }
            if (checkMail() === false) {
                register.iconErr_3!.style.display = "flex";
                register.iconCheck_3!.style.display = "none";
            } else {
                register.iconCheck_3!.style.display = "unset";
                register.iconErr_3!.style.display = "none";
                input_3 = true;
            }

            if (input_1 && input_2 && input_3 === true) {
                name = register.input_1.value;
                lastname = register.input_2.value;
                email = register.input_3.value;
                addAccountBlock();
                return true;
            }
        }
        if (checkregister() === true) {
            getGame();
            localStorage.setItem("registration", "done");
            register.window!.classList.remove("register-visible");
            game.substrate2!.classList.remove("substrate-visible");
            global.stateToggler!.style.display = "unset";
            global.headerAvatar!.style.display = "unset";
            register.open!.style.display = "none";
            location.hash = "#settings";
        }
    };
    register.cancel!.onclick = function () {
        register.window!.classList.remove("register-visible");
        game.substrate2!.classList.remove("substrate-visible");
    };
} else {
    if (location.hash === "#game") {
        global.stateToggler!.style.display = "unset";
    } else {
        global.openGamePage!.style.display = "unset";
    }
    global.headerAvatar!.style.display = "unset";
    register.open!.style.display = "none";
}

function addAccountBlock() {
    if (name && lastname && email !== null) {
        localStorage.setItem("name", name);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("email", email);
    }
}

export let openResultWindow = () => {
    game.substrate2!.classList.toggle("substrate-visible");
    result.window!.classList.toggle("result-visible");
};

result.btnYes!.onclick = function () {
    window.location.hash = "#score";
    window.location.reload();
};

export let gameState_modals: boolean = true;
export function changeGameState_modals() {
    gameState_modals = true;
}

result.btnNo!.onclick = function () {
    stopGame();
    global.stateText!.textContent = "Start";
    gameState_modals = false;
    result.window!.classList.remove("result-visible");
    game.substrate2!.classList.remove("substrate-visible");
};

export function checkGameState(hash: string) {
    if (gameState === true && gameState_modals === true) {
        relink.window!.classList.toggle("relink-visible");
        game.substrate2!.classList.toggle("substrate-visible");
        //pauseGame()
    } else {
        location.hash = `#${hash}`;
    }
    relink.cancelBtn!.onclick = () => {
        relink.window!.classList.remove("relink-visible");
        game.substrate2!.classList.remove("substrate-visible");
    };

    relink.okBtn!.onclick = () => {
        location.hash = `#${hash}`;
    };
}

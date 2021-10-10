import { stopGame } from "./script.js";
import { addAccountBlock, checkMail } from "./utils.js";
import { cards, game, getGame, register, result, global } from "./variables/index.js";

if (register.open !== null) {
    register.open.onclick = function () {
        register.window!.classList.toggle("register-visible");
        game.substrate!.classList.toggle("substrate-visible");
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
            game.substrate!.classList.remove("substrate-visible");
            global.stateToggler!.style.display = "unset";
            global.headerAvatar!.style.display = "unset";
            register.open!.style.display = "none";
        }
    };
    register.cancel!.onclick = function () {
        register.window!.classList.remove("register-visible");
        game.substrate!.classList.remove("substrate-visible");
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

//-------Result Window-------//

export let openResultWindow = () => {
    if (cards.length === 0) {
        game.substrate2!.classList.toggle("substrate-visible");
        result.window!.classList.toggle("result-visible");
    }
};

result.btn!.onclick = function () {
    result.window!.classList.remove("result-visible");
    game.substrate2!.classList.remove("substrate-visible");
    stopGame();
    window.location.hash = "#score";
    window.location.reload();
};

import { cards, variables } from "./variables.js";
import { stopGame } from "./script.js";
import { addAccountBlock, checkMail } from "./utils.js";
if (variables.registerOpen !== null) {
    variables.registerOpen.onclick = function () {
        variables.registerWindow.classList.toggle("register-visible");
        variables.substrate.classList.toggle("substrate-visible");
    };
}
let name = null;
let lastname = null;
let email = null;
let ava = null;
export { name, lastname, email, ava };
let reg = localStorage.getItem("registration");
if (reg !== "done") {
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
            if (checkMail() === false) {
                variables.registerIconErr_3.style.display = "flex";
                variables.registerIconCheck_3.style.display = "none";
            }
            else {
                variables.registerIconCheck_3.style.display = "unset";
                variables.registerIconErr_3.style.display = "none";
                input_3 = true;
            }
            if (input_1 && input_2 && input_3 === true) {
                name = variables.registerInput_1.value;
                lastname = variables.registerInput_2.value;
                email = variables.registerInput_3.value;
                addAccountBlock();
                return true;
            }
        }
        if (checkRegisterInputs() === true) {
            localStorage.setItem("registration", "done");
            variables.headerAvatar.src = ava;
            variables.registerWindow.classList.remove("register-visible");
            variables.substrate.classList.remove("substrate-visible");
            variables.gameStateToggler.style.display = "unset";
            variables.headerAvatar.style.display = "unset";
            variables.registerOpen.style.display = "none";
        }
    };
    variables.registerCancel.onclick = function () {
        variables.registerWindow.classList.remove("register-visible");
        variables.substrate.classList.remove("substrate-visible");
    };
    let avatar = false;
    variables.registerAvatar.onchange = function () {
        let file = variables.registerAvatar.files[0];
        if (file) {
            ava = URL.createObjectURL(file);
            variables.registerUserAvatar.src = ava;
        }
        variables.registerUserAvatar.style.display = "unset";
        variables.registerNoAvatar.style.display = "none";
        avatar = true;
    };
    if (avatar === false) {
        ava = "./assets/icons/no-avatar.svg";
    }
}
else {
    variables.headerAvatar.src = localStorage.getItem("ava");
    variables.gameStateToggler.style.display = "unset";
    variables.headerAvatar.style.display = "unset";
    variables.registerOpen.style.display = "none";
}
variables.substrate.onclick = function () {
    variables.substrate.classList.remove("substrate-visible");
    variables.registerWindow.classList.remove("register-visible");
};
//-------Result Window-------//
export let openResultWindow = () => {
    if (cards.length === 0) {
        variables.substrate2.classList.toggle("substrate-visible");
        variables.resultWindow.classList.toggle("result-visible");
    }
};
variables.resultBtn.onclick = function () {
    variables.resultWindow.classList.remove("result-visible");
    variables.substrate2.classList.remove("substrate-visible");
    stopGame();
};

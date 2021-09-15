import { cards, variables } from "./variables.js";
import { stopGame } from "./script.js";
if (variables.registerOpen !== null) {
    variables.registerOpen.onclick = function () {
        variables.registerWindow.classList.toggle("register-visible");
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
        variables.substrate.classList.remove("substrate-visible");
        variables.gameStateToggler.style.display = "unset";
        variables.headerAvatar.style.display = "unset";
        variables.registerOpen.style.display = "none";
        localStorage.setItem("username", JSON.stringify(variables.registerInput_1.value));
        localStorage.setItem("password", JSON.stringify(variables.registerInput_2.value));
        localStorage.setItem("email", JSON.stringify(variables.registerInput_3.value));
    }
};
variables.registerCancel.onclick = function () {
    variables.registerWindow.classList.remove("register-visible");
    variables.substrate.classList.remove("substrate-visible");
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
    variables.substrate.classList.remove("substrate-visible");
    variables.registerWindow.classList.remove("register-visible");
};
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

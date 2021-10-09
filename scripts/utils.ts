import { name, email, lastname, ava } from "./modals.js";
import { register } from "./variables/index.js";

export function shuffle(arr: any) {
    return arr.sort(() => Math.random() - 0.5);
}

export function checkMail() {
    let mail = register.input_3!.value;
    let dog = mail.indexOf("@");
    let errText = register.errText;

    if (mail == "") {
        errText!!.innerHTML = "Введите Адрес электронной почты";
        return false;
    } else if (mail.indexOf(".") == -1) {
        errText!.innerHTML = 'Нет символа"."';
        return false;
    } else if (mail.indexOf(",") >= 0 || mail.indexOf(";") >= 0 || mail.indexOf(" ") >= 0) {
        errText!.innerHTML = "Адрес электронной почты был введен неправильно";
        return false;
    } else if (dog == -1) {
        errText!.innerHTML = 'Нет символа"@"';
        return false;
    } else if (dog < 1 || dog > mail.length - 5) {
        errText!.innerHTML = "Адрес электронной почты был введен неправильно";
        return false;
    } else if (mail.charAt(dog - 1) == "." || mail.charAt(dog + 1) == ".") {
        errText!.innerHTML = "Адрес электронной почты был введен неправильно";
        return false;
    } else {
        return true;
    }
}

export function addAccountBlock() {
    if (name && lastname && email && ava !== null) {
        localStorage.setItem("name", name);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("email", email);
        //localStorage.setItem("ava", ava);
    }
}

/* let name: any = localStorage.getItem("name");
let password: any = localStorage.getItem("password");
let email: any = localStorage.getItem("email"); */

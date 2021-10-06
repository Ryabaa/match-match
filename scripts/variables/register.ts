interface IRegister {
    window: HTMLElement | null;
    open: HTMLElement | null;
    errText: HTMLElement | null;
    input_1: any;
    input_2: any;
    input_3: any;
    iconCheck_1: HTMLElement | null;
    iconCheck_2: HTMLElement | null;
    iconCheck_3: HTMLElement | null;
    iconErr_1: HTMLElement | null;
    iconErr_2: HTMLElement | null;
    iconErr_3: HTMLElement | null;
    avatar: any;
    noAvatar: HTMLElement | null;
    userAvatar: any;
    add: HTMLElement | null;
    cancel: HTMLElement | null;
}

export let register: IRegister = {
    window: document.getElementById("registerWindow"),
    open: document.getElementById("registerOpen"),
    errText: document.getElementById("registerErrText"),
    input_1: document.getElementById("registerInput_1"),
    input_2: document.getElementById("registerInput_2"),
    input_3: document.getElementById("registerInput_3"),
    iconCheck_1: document.getElementById("registerIconCheck_1"),
    iconCheck_2: document.getElementById("registerIconCheck_2"),
    iconCheck_3: document.getElementById("registerIconCheck_3"),
    iconErr_1: document.getElementById("registerIconErr_1"),
    iconErr_2: document.getElementById("registerIconErr_2"),
    iconErr_3: document.getElementById("registerIconErr_3"),
    avatar: document.getElementById("registerAvatar"),
    noAvatar: document.getElementById("registerNoAvatar"),
    userAvatar: document.getElementById("registerUserAvatar"),
    add: document.getElementById("registerAdd"),
    cancel: document.getElementById("registerCancel"),
};

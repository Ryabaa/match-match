interface IResult {
    window: HTMLElement | null;
    name: HTMLElement | null;
    btnYes: HTMLElement | null;
    btnNo: HTMLElement | null;
    time1: HTMLElement | null;
    time2: HTMLElement | null;
}

export let result: IResult = {
    window: document.getElementById("resultWindow"),
    name: document.getElementById("resultName"),
    btnYes: document.getElementById("resultBtnYes"),
    btnNo: document.getElementById("resultBtnNo"),
    time1: document.getElementById("resultTime1"),
    time2: document.getElementById("resultTime2"),
};

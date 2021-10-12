interface IRelink {
    window: HTMLElement | null;
    cancelBtn: HTMLElement | null;
    okBtn: HTMLElement | null;
}

export let relink: IRelink = {
    window: document.getElementById("relinkWindow"),
    cancelBtn: document.getElementById("relinkCancelBtn"),
    okBtn: document.getElementById("relinkOkBtn"),
};

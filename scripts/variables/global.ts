interface IGlobal {
    stateToggler: HTMLElement | null;
    stateText: HTMLElement | null;
    headerAvatar: any;
    main: HTMLElement | null;
    navLinkGame: HTMLElement | null;
    navLinkAbout: HTMLElement | null;
    navLinkScore: HTMLElement | null;
    navLinkSettings: HTMLElement | null;
}

export let global: IGlobal = {
    stateToggler: document.getElementById("gameStateToggler"),
    stateText: document.getElementById("gameStateText"),
    headerAvatar: document.getElementById("headerAvatar"),
    main: document.getElementById("main"),
    navLinkGame: document.getElementById("navLinkGame"),
    navLinkAbout: document.getElementById("navLinkAbout"),
    navLinkScore: document.getElementById("navLinkScore"),
    navLinkSettings: document.getElementById("navLinkSettings"),
};

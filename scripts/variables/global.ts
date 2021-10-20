interface IGlobal {
    stateToggler: HTMLElement | null;
    stateText: HTMLElement | null;
    main: HTMLElement | null;
    navLinkGame: HTMLElement | null;
    navLinkAbout: HTMLElement | null;
    navLinkScore: HTMLElement | null;
    navLinkSettings: HTMLElement | null;
    openGamePage: HTMLElement | null;
    body: HTMLElement | null;
}

export let global: IGlobal = {
    stateToggler: document.getElementById("gameStateToggler"),
    stateText: document.getElementById("gameStateText"),
    main: document.getElementById("main"),
    navLinkGame: document.getElementById("navLinkGame"),
    navLinkAbout: document.getElementById("navLinkAbout"),
    navLinkScore: document.getElementById("navLinkScore"),
    navLinkSettings: document.getElementById("navLinkSettings"),
    openGamePage: document.getElementById("openGamePage"),
    body: document.getElementById("body"),
};

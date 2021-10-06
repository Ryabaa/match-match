interface IGame {
    fieldSubstrate: HTMLElement | null;
    field: HTMLElement | null;
    substrate: HTMLElement | null;
    substrate2: HTMLElement | null;
    minutes: HTMLElement | null;
    seconds: HTMLElement | null;
}

export let game: IGame = {
    fieldSubstrate: document.getElementById("gameFieldSubstrate"),
    field: document.getElementById("game-field"),
    substrate: document.getElementById("substrate"),
    substrate2: document.getElementById("substrate2"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
};

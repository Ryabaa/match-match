interface IGame {
    fieldSubstrate: HTMLElement | null;
    field: HTMLElement | null;
    substrate: HTMLElement | null;
    substrate2: HTMLElement | null;
    minutes: HTMLElement | null;
    seconds: HTMLElement | null;
    cardTypeBtn_animals: HTMLElement | null;
    difficultBtn_easy: HTMLElement | null;
    cardTypeBtn_fruits: HTMLElement | null;
    difficultBtn_medium: HTMLElement | null;
}

export let game: IGame;

export let getGame = () => {
    game = {
        fieldSubstrate: document.getElementById("gameFieldSubstrate"),
        field: document.getElementById("game-field"),
        substrate: document.getElementById("substrate"),
        substrate2: document.getElementById("substrate2"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds"),
        cardTypeBtn_animals: document.getElementById("cardTypeBtn_animals"),
        cardTypeBtn_fruits: document.getElementById("cardTypeBtn_fruits"),
        difficultBtn_easy: document.getElementById("difficultBtn_easy"),
        difficultBtn_medium: document.getElementById("difficultBtn_medium"),
    };
};

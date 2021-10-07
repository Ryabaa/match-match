export let game;
export let getGame = () => {
    game = {
        fieldSubstrate: document.getElementById("gameFieldSubstrate"),
        field: document.getElementById("game-field"),
        substrate: document.getElementById("substrate"),
        substrate2: document.getElementById("substrate2"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds"),
    };
};

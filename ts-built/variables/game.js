export let game;
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

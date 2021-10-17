interface IScore {
    card1: HTMLElement | null;
    card2: HTMLElement | null;
    card3: HTMLElement | null;
    card4: HTMLElement | null;
    card5: HTMLElement | null;
}

export let score: IScore;

export let getScore = () => {
    score = {
        card1: document.getElementById("scoreCard1"),
        card2: document.getElementById("scoreCard2"),
        card3: document.getElementById("scoreCard3"),
        card4: document.getElementById("scoreCard4"),
        card5: document.getElementById("scoreCard5"),
    };
};

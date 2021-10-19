import { score, getScore } from "../variables/index.js";
export function leaderboard() {
    let scores;
    let getScores = localStorage.getItem("score");
    if (getScores === null) {
        scores = 0;
    }
    else {
        scores = 100 - Number(getScores);
    }
    let player = { name: `${localStorage.getItem("name")} ${localStorage.getItem("lastname")}`, mail: `${localStorage.getItem("email")}`, score: `${scores}` };
    let block = `
        <img src="./assets/icons/no-avatar.svg" alt="" class="score-card__avatar" />
        <div class="score-card__container">
            <h3 class="score-card__name">${player.name}</h3>
            <p class="score-card__mail">${player.mail}</p>
        </div>
        <p class="score-card__time">Score: <span class="score-card__span">${player.score}</span></p>
    `;
    getScore();
    if (localStorage.getItem("name") || localStorage.getItem("lastname") || localStorage.getItem("email") !== null) {
        if (scores > 79) {
            score.card1.style.display = "flex";
            score.card1.innerHTML = block;
        }
        else if (scores > 75) {
            score.card2.style.display = "flex";
            score.card2.innerHTML = block;
        }
        else if (scores > 70) {
            score.card3.style.display = "flex";
            score.card3.innerHTML = block;
        }
        else if (scores > 67) {
            score.card4.style.display = "flex";
            score.card4.innerHTML = block;
        }
        else {
            score.card5.style.display = "flex";
            score.card5.innerHTML = block;
        }
    }
}

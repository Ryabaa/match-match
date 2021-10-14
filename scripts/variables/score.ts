interface IScore {
    name1: HTMLElement | null;
    name2: HTMLElement | null;
    name3: HTMLElement | null;
    name4: HTMLElement | null;
    name5: HTMLElement | null;

    mail1: HTMLElement | null;
    mail2: HTMLElement | null;
    mail3: HTMLElement | null;
    mail4: HTMLElement | null;
    mail5: HTMLElement | null;

    time1: HTMLElement | null;
    time2: HTMLElement | null;
    time3: HTMLElement | null;
    time4: HTMLElement | null;
    time5: HTMLElement | null;
}

export let score: IScore;

export let getScore = () => {
    score = {
        name1: document.getElementById("scoreName1"),
        name2: document.getElementById("scoreName2"),
        name3: document.getElementById("scoreName3"),
        name4: document.getElementById("scoreName4"),
        name5: document.getElementById("scoreName5"),

        mail1: document.getElementById("scoreMail1"),
        mail2: document.getElementById("scoreMail2"),
        mail3: document.getElementById("scoreMail3"),
        mail4: document.getElementById("scoreMail4"),
        mail5: document.getElementById("scoreMail5"),

        time1: document.getElementById("scoreTime1"),
        time2: document.getElementById("scoreTime2"),
        time3: document.getElementById("scoreTime3"),
        time4: document.getElementById("scoreTime4"),
        time5: document.getElementById("scoreTime5"),
    };
};

import { containers, getContainers } from "./index.js";
export interface ICard {
    imageContainer: HTMLElement | null;
    cover: HTMLElement | null;
    succes: HTMLElement | null;
    fail: HTMLElement | null;
    succesCover: HTMLElement | null;
    failCover: HTMLElement | null;
    imageId: number | null;
}
export let cards: any = [];

export let getCards = () => {
    let arr = [
        {
            imageContainer: document.getElementById("gameImage_1"),
            cover: document.getElementById("backsideCard_1"),
            imageId: null,
            succes: document.getElementById("succes1"),
            fail: document.getElementById("fail1"),
            succesCover: document.getElementById("succesCover1"),
            failCover: document.getElementById("failCover1"),
        },
        {
            imageContainer: document.getElementById("gameImage_2"),
            cover: document.getElementById("backsideCard_2"),
            imageId: null,
            succes: document.getElementById("succes2"),
            fail: document.getElementById("fail2"),
            succesCover: document.getElementById("succesCover2"),
            failCover: document.getElementById("failCover2"),
        },
        {
            imageContainer: document.getElementById("gameImage_3"),
            cover: document.getElementById("backsideCard_3"),
            imageId: null,
            succes: document.getElementById("succes3"),
            fail: document.getElementById("fail3"),
            succesCover: document.getElementById("succesCover3"),
            failCover: document.getElementById("failCover3"),
        },
        {
            imageContainer: document.getElementById("gameImage_4"),
            cover: document.getElementById("backsideCard_4"),
            imageId: null,
            succes: document.getElementById("succes4"),
            fail: document.getElementById("fail4"),
            succesCover: document.getElementById("succesCover4"),
            failCover: document.getElementById("failCover4"),
        },
        {
            imageContainer: document.getElementById("gameImage_5"),
            cover: document.getElementById("backsideCard_5"),
            imageId: null,
            succes: document.getElementById("succes5"),
            fail: document.getElementById("fail5"),
            succesCover: document.getElementById("succesCover5"),
            failCover: document.getElementById("failCover5"),
        },
        {
            imageContainer: document.getElementById("gameImage_6"),
            cover: document.getElementById("backsideCard_6"),
            imageId: null,
            succes: document.getElementById("succes6"),
            fail: document.getElementById("fail6"),
            succesCover: document.getElementById("succesCover6"),
            failCover: document.getElementById("failCover6"),
        },
        {
            imageContainer: document.getElementById("gameImage_7"),
            cover: document.getElementById("backsideCard_7"),
            imageId: null,
            succes: document.getElementById("succes7"),
            fail: document.getElementById("fail7"),
            succesCover: document.getElementById("succesCover7"),
            failCover: document.getElementById("failCover7"),
        },
        {
            imageContainer: document.getElementById("gameImage_8"),
            cover: document.getElementById("backsideCard_8"),
            imageId: null,
            succes: document.getElementById("succes8"),
            fail: document.getElementById("fail8"),
            succesCover: document.getElementById("succesCover8"),
            failCover: document.getElementById("failCover8"),
        },
        {
            imageContainer: document.getElementById("gameImage_9"),
            cover: document.getElementById("backsideCard_9"),
            imageId: null,
            succes: document.getElementById("succes9"),
            fail: document.getElementById("fail9"),
            succesCover: document.getElementById("succesCover9"),
            failCover: document.getElementById("failCover9"),
        },
        {
            imageContainer: document.getElementById("gameImage_10"),
            cover: document.getElementById("backsideCard_10"),
            imageId: null,
            succes: document.getElementById("succes10"),
            fail: document.getElementById("fail10"),
            succesCover: document.getElementById("succesCover10"),
            failCover: document.getElementById("failCover10"),
        },
        {
            imageContainer: document.getElementById("gameImage_11"),
            cover: document.getElementById("backsideCard_11"),
            imageId: null,
            succes: document.getElementById("succes11"),
            fail: document.getElementById("fail11"),
            succesCover: document.getElementById("succesCover11"),
            failCover: document.getElementById("failCover11"),
        },
        {
            imageContainer: document.getElementById("gameImage_12"),
            cover: document.getElementById("backsideCard_12"),
            imageId: null,
            succes: document.getElementById("succes12"),
            fail: document.getElementById("fail12"),
            succesCover: document.getElementById("succesCover12"),
            failCover: document.getElementById("failCover12"),
        },
        {
            imageContainer: document.getElementById("gameImage_13"),
            cover: document.getElementById("backsideCard_13"),
            imageId: null,
            succes: document.getElementById("succes13"),
            fail: document.getElementById("fail13"),
            succesCover: document.getElementById("succesCover13"),
            failCover: document.getElementById("failCover13"),
        },
        {
            imageContainer: document.getElementById("gameImage_14"),
            cover: document.getElementById("backsideCard_14"),
            imageId: null,
            succes: document.getElementById("succes14"),
            fail: document.getElementById("fail14"),
            succesCover: document.getElementById("succesCover14"),
            failCover: document.getElementById("failCover14"),
        },
        {
            imageContainer: document.getElementById("gameImage_15"),
            cover: document.getElementById("backsideCard_15"),
            imageId: null,
            succes: document.getElementById("succes15"),
            fail: document.getElementById("fail15"),
            succesCover: document.getElementById("succesCover15"),
            failCover: document.getElementById("failCover15"),
        },
        {
            imageContainer: document.getElementById("gameImage_16"),
            cover: document.getElementById("backsideCard_16"),
            imageId: null,
            succes: document.getElementById("succes16"),
            fail: document.getElementById("fail16"),
            succesCover: document.getElementById("succesCover16"),
            failCover: document.getElementById("failCover16"),
        },
    ];
    switch (localStorage.getItem("difficult")) {
        case "Easy":
            arr.splice(12, 4);
            cards = arr;
            getContainers();
            containers.container13!.style.display = "none";
            containers.container14!.style.display = "none";
            containers.container15!.style.display = "none";
            containers.container16!.style.display = "none";
            break;
        case "Medium":
            cards = arr;
            break;
    }
};

export let cardsDefault = [
    {
        imageContainer: document.getElementById("gameImage_1"),
        cover: document.getElementById("backsideCard_1"),
        imageId: null,
        succes: document.getElementById("succes1"),
        fail: document.getElementById("fail1"),
        succesCover: document.getElementById("succesCover1"),
        failCover: document.getElementById("failCover1"),
    },
    {
        imageContainer: document.getElementById("gameImage_2"),
        cover: document.getElementById("backsideCard_2"),
        imageId: null,
        succes: document.getElementById("succes2"),
        fail: document.getElementById("fail2"),
        succesCover: document.getElementById("succesCover2"),
        failCover: document.getElementById("failCover2"),
    },
    {
        imageContainer: document.getElementById("gameImage_3"),
        cover: document.getElementById("backsideCard_3"),
        imageId: null,
        succes: document.getElementById("succes3"),
        fail: document.getElementById("fail3"),
        succesCover: document.getElementById("succesCover3"),
        failCover: document.getElementById("failCover3"),
    },
    {
        imageContainer: document.getElementById("gameImage_4"),
        cover: document.getElementById("backsideCard_4"),
        imageId: null,
        succes: document.getElementById("succes4"),
        fail: document.getElementById("fail4"),
        succesCover: document.getElementById("succesCover4"),
        failCover: document.getElementById("failCover4"),
    },
    {
        imageContainer: document.getElementById("gameImage_5"),
        cover: document.getElementById("backsideCard_5"),
        imageId: null,
        succes: document.getElementById("succes5"),
        fail: document.getElementById("fail5"),
        succesCover: document.getElementById("succesCover5"),
        failCover: document.getElementById("failCover5"),
    },
    {
        imageContainer: document.getElementById("gameImage_6"),
        cover: document.getElementById("backsideCard_6"),
        imageId: null,
        succes: document.getElementById("succes6"),
        fail: document.getElementById("fail6"),
        succesCover: document.getElementById("succesCover6"),
        failCover: document.getElementById("failCover6"),
    },
    {
        imageContainer: document.getElementById("gameImage_7"),
        cover: document.getElementById("backsideCard_7"),
        imageId: null,
        succes: document.getElementById("succes7"),
        fail: document.getElementById("fail7"),
        succesCover: document.getElementById("succesCover7"),
        failCover: document.getElementById("failCover7"),
    },
    {
        imageContainer: document.getElementById("gameImage_8"),
        cover: document.getElementById("backsideCard_8"),
        imageId: null,
        succes: document.getElementById("succes8"),
        fail: document.getElementById("fail8"),
        succesCover: document.getElementById("succesCover8"),
        failCover: document.getElementById("failCover8"),
    },
    {
        imageContainer: document.getElementById("gameImage_9"),
        cover: document.getElementById("backsideCard_9"),
        imageId: null,
        succes: document.getElementById("succes9"),
        fail: document.getElementById("fail9"),
        succesCover: document.getElementById("succesCover9"),
        failCover: document.getElementById("failCover9"),
    },
    {
        imageContainer: document.getElementById("gameImage_10"),
        cover: document.getElementById("backsideCard_10"),
        imageId: null,
        succes: document.getElementById("succes10"),
        fail: document.getElementById("fail10"),
        succesCover: document.getElementById("succesCover10"),
        failCover: document.getElementById("failCover10"),
    },
    {
        imageContainer: document.getElementById("gameImage_11"),
        cover: document.getElementById("backsideCard_11"),
        imageId: null,
        succes: document.getElementById("succes11"),
        fail: document.getElementById("fail11"),
        succesCover: document.getElementById("succesCover11"),
        failCover: document.getElementById("failCover11"),
    },
    {
        imageContainer: document.getElementById("gameImage_12"),
        cover: document.getElementById("backsideCard_12"),
        imageId: null,
        succes: document.getElementById("succes12"),
        fail: document.getElementById("fail12"),
        succesCover: document.getElementById("succesCover12"),
        failCover: document.getElementById("failCover12"),
    },
    {
        imageContainer: document.getElementById("gameImage_13"),
        cover: document.getElementById("backsideCard_13"),
        imageId: null,
        succes: document.getElementById("succes13"),
        fail: document.getElementById("fail13"),
        succesCover: document.getElementById("succesCover13"),
        failCover: document.getElementById("failCover13"),
    },
    {
        imageContainer: document.getElementById("gameImage_14"),
        cover: document.getElementById("backsideCard_14"),
        imageId: null,
        succes: document.getElementById("succes14"),
        fail: document.getElementById("fail14"),
        succesCover: document.getElementById("succesCover14"),
        failCover: document.getElementById("failCover14"),
    },
    {
        imageContainer: document.getElementById("gameImage_15"),
        cover: document.getElementById("backsideCard_15"),
        imageId: null,
        succes: document.getElementById("succes15"),
        fail: document.getElementById("fail15"),
        succesCover: document.getElementById("succesCover15"),
        failCover: document.getElementById("failCover15"),
    },
    {
        imageContainer: document.getElementById("gameImage_16"),
        cover: document.getElementById("backsideCard_16"),
        imageId: null,
        succes: document.getElementById("succes16"),
        fail: document.getElementById("fail16"),
        succesCover: document.getElementById("succesCover16"),
        failCover: document.getElementById("failCover16"),
    },
];

export function resetCards() {
    return (cards = cardsDefault);
}

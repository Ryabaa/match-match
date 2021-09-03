export interface ICard {
    imageContainer: HTMLElement | null;
    cover: HTMLElement | null;
    succes: HTMLElement | null;
    fail: HTMLElement | null;
    imageId: number | null;
}

export interface IImage {
    image: string;
    id: number;
}

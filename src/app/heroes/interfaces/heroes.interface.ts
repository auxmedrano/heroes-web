export interface Heroe {
    id?:              number;
    superhero:        string;
    publisherId:       number;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:         string; // https://kasdfjaskdfajsdf.com/img.png
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}


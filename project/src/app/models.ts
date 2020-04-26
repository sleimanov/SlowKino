export interface Movie {
    id: number;
    title: string;
    year: number;
    rating: number;
    genres: Genre[];
    countries: String;
    description: string;
    cast: Actor[];
    posterSrc: string;
    budget: number;
}

export interface Comment {
    id: number;
    text: String;
    user: UserProfile;
    movie: Movie;
}

export interface Genre {
    id: number;
    name: String;
}

export interface Actor {
    id: number;
    name: String;
    country: String;
    age: number;
    imgSrc: String;
}

export interface User{
    id:number;
    username:string;
    password:string;
    email:string;
}

export interface UserProfile {
    id: number;
    name: String;
    user: User;
    birthDate: Date;
    aboutSelf: String;
    country_city: String;
    gender: String;
    mood: String;
}

export interface IAuthResponse{
    token: string;
    is_staff:boolean;
}

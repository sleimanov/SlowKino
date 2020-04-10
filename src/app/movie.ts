import { Genre } from './genre';

export interface Movie {
    id: number,
    title: string;
    year: number;
    rating: number;
    genres: String[];
    description: string;
    cast: String[];
}

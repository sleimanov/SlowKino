import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable({ providedIn: 'root' })
export class MovieService {

  findedMovies: Movie[] = [];

  constructor(@Inject(DOCUMENT) document) { }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovie(id: number): Observable<Movie> {
    return of(MOVIES.find(movie => movie.id === id));
  }

  getFindedMovies(): Observable<Movie[]>{
    return of(this.findedMovies);
  }

  search(title: string){
    for(let mv of MOVIES){
      if(mv.title.search(title) != -1) this.findedMovies.push(mv);
    }
  }

  searchByGenre(genre: string){
    
    for(let mv of MOVIES){
      if(mv.genres.includes(genre)) this.findedMovies.push(mv);
    }
  }


}

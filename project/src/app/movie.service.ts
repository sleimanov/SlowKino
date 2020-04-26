import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainService } from './main.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Movie, Actor, Comment, IAuthResponse } from './models';

@Injectable({ providedIn: 'root' })
export class MovieService extends MainService{
  BASE_URL = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  findedMovies: Movie[] = [];
  allMovies: Movie[] = [];

  constructor(http: HttpClient) {
    super(http)
  }

  auth1(login: string, password: string): Promise<IAuthResponse> {
    return this.post(this.BASE_URL + '/api/login/', {
    username: login,
    password: password
    });
  }

  logout():Promise<any>{
    return this.post(this.BASE_URL + '/api/login/',{})
  }

  getComments(id: number): Promise<Comment[]> {
    return this.get(this.BASE_URL + '/api/movies/' + id + '/comments', {});
  }

  getAllMovies(): Promise<Movie[]> {
    return  this.get(`${this.BASE_URL}/api/movies/`,{});
  }

  getOneMovie(id: number): Promise<Movie> {
    return this.get(this.BASE_URL + '/api/movies/' + id, {});
  }

  getMovieActors(id: number) : Promise<Actor[]> {
    return this.get(this.BASE_URL + '/api/movies/' + id + '/actors', {});
  }

  getFindedMovies(): Observable<Movie[]>{
    return of(this.findedMovies);
  }

  search(title: string){
    for(let mv of this.allMovies){
      if(mv.title.search(title) != -1) this.findedMovies.push(mv);
    }
  }

  searchByGenre(id: number){
    return this.http.get<Movie[]>(this.BASE_URL + '/api/genres/' + id + '/movies');
  }

  clear(){
    this.findedMovies = [];
  }


}

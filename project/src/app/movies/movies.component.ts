import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  flag: boolean;

  myImage6:string = "assets/images/knife.png"
  myImage7:string = "assets/images/passa.jpg"
  myImage8:string = "assets/images/nerv.jpg"
  myImage9:string = "assets/images/sher.jpg"
  myImage10:string = "assets/images/obman.jpg"

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
  this.movieService.getMovies()
  .subscribe(movies => this.movies = movies);
}

}

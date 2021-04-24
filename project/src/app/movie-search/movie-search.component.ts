import { Component, OnInit } from '@angular/core';
import { Movie } from '../models';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movies: Movie[];
  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getFindedMovies()
    .subscribe(movies => this.movies = movies);

  }
}

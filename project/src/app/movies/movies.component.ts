import { Component, OnInit } from '@angular/core';

import { Movie } from '../models';
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
  imageSlide1:string = "assets/images/bloodshot.jpg"
  imageSlide2:string = "assets/images/black_widow.jpg"
  imageSlide3:string = "assets/images/bond.jpg"
  imageSlide4:string = "assets/images/artemis.jpg"
  imageSlide5:string = "assets/images/ford-vs-ferrari.jpg"
  telegramLogo:string = "assets/images/telegram.png"


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
  this.movieService.getAllMovies()
  .then(movies => {this.movies = movies});
}
  searchByGenre(event){
    var genre = event.target.value;
    this.movieService.searchByGenre(genre);
  }

}

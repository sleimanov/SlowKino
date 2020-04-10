import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  logoImage:string = "assets/images/lol.png"
  searchValue: string;

  constructor(private movieService: MovieService) { }

  onKey(event){
    this.searchValue = event.target.value;
  }
  search(){
    this.movieService.search(this.searchValue);
  }
  searchByGenre(event){
    console.log('message');
    var genre = event.target.value;
    this.movieService.searchByGenre(genre);
  }
}

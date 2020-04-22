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
  searchValue: string = '';

  constructor(private movieService: MovieService) { }

  onKey(event){
    this.searchValue = event.target.value;
  }
  search(){
    console.log(this.searchValue);
    if(this.searchValue != ''){
      console.log('wtf');
    this.movieService.search(this.searchValue);}
  }
  searchByGenre(event){
    var genre = event.target.value;
    this.movieService.searchByGenre(genre);
  }
  clear(){
    this.movieService.clear();
  }
}

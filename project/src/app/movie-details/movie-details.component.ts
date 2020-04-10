import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  myImage1:string = "assets/images/John_Wick_3.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}

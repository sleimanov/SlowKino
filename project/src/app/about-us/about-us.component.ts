import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  imageOshik:string = "assets/images/oshik.jpg"
  imageAlbina:string = "assets/images/albina.jpg"
  imageYelaman:string = "assets/images/yelaman.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
